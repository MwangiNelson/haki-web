import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../firebase"
import DOMPurify from 'dompurify'
import { toast } from 'react-toastify';

const uploadPhotoSyntax = (file, fileName) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `Images/${fileName}`)
        uploadBytes(storageRef, file).then(
            (snapshot) => {
                // alert("Success uploading photo")

                getDownloadURL(storageRef).then((img_url) => {
                    resolve(img_url)
                }).catch((err) => {
                    reject(err)
                })
            }
        ).catch((err) => {
            alert(`${err}`)
            reject(err)
        })
    })
}

const uploadDocumentSyntax = (file, fileName) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `docs/${fileName}`)
        uploadBytes(storageRef, file).then(
            (snapshot) => {
                // alert("Success uploading photo")
                getDownloadURL(storageRef).then((img_url) => {
                    resolve(img_url)
                }).catch((err) => {
                    reject(err)
                })
            }
        ).catch((err) => {
            alert(`${err}`)
            reject(err)
        })
    })
}


export const uploadFirebaseDocument = async (file, name) => {
   //upload a document to firebase storage
    if (!file) {
        console.log('No file selected');
        return Promise.reject('No file selected');
    }
    try {
        const fileUrl = await uploadDocumentSyntax(file, name);
        return fileUrl;
    } catch (err) {
        console.error('Error uploading photo:', err);
        return Promise.reject(err); // Reject the promise with the error
    }

}

export function getYouTubeEmbedLink(videoUrl) {
    // This function uses regex to get video url for embedding into the jsx component
    var match = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

    if (match && match[1]) {
        return 'https://www.youtube.com/embed/' + match[1];
    } else {
        return null;
    }
}

export function getVideoIdFromDriveLink(driveLink) {
    if (!driveLink.includes('https://drive.google.com/file/d/')) {
        return null;
    }

    const videoIdStartIndex = driveLink.indexOf('/d/') + 3;
    const videoIdEndIndex = driveLink.indexOf('/view');
    const videoId = driveLink.slice(videoIdStartIndex, videoIdEndIndex);

    return videoId;
}

export function getEmbedLink(videoUrl) {
    // Check if the video URL is a YouTube URL
    const youtubeEmbedLink = getYouTubeEmbedLink(videoUrl);
    if (youtubeEmbedLink) {
        return youtubeEmbedLink;
    }

    // Check if the video URL is a Google Drive URL
    const videoId = getVideoIdFromDriveLink(videoUrl);
    if (videoId) {
        return `https://drive.google.com/file/d/${videoId}/preview`;
    }

    // If the video URL is not recognized, return null
    return null;
}
// This function should be in a separate utilities file, e.g., `imageUploadUtils.js`
export const handleImageUpload = async (image, name) => {
    if (!image) {
        console.log('No image selected');
        return Promise.reject('No image selected');
    }

    try {
        const imgUrl = await uploadPhotoSyntax(image, name);
        console.log('Success uploading photo:', imgUrl);

        toast.info('Images uploaded successfully')

        return imgUrl; // Resolve the promise with the image URL
    } catch (err) {
        console.error('Error uploading photo:', err);
        return Promise.reject(err); // Reject the promise with the error
    }
};

export function readFileContent(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result); // Resolves with the content of the file
        reader.onerror = () => reject('Failed to read file');
        reader.readAsDataURL(file); // Reads the file as a data URL (Base64), adjust according to needs
    });
}

export function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const BlogContentRenderer = ({ content }) => {
    // Define regular expressions separately for clarity
    const h2Regex = /<h2([^>]*)>/g;
    const h3Regex = /<h3([^>]*)>/g;
    const strongInH1Regex = /<h1><strong([^>]*)>/g;
    const multipleBrRegex = /<br \/>{2,}/g;
    const brBetweenMainAndH3Regex = /<\/main([^>]*)\s*<br>\s*<h3/g; // Matches single <br> with any class names on main using .*
    const paragraphRegex = /<p([^>]*)>/g;
    const liRegex = /<li([^>]*)>/g;
    const ulRegex = /<ul([^>]*)>/g;
    const olRegex = /<ol([^>]*)>/g;
    const aRegex = /<a\s+(?=[^>]*href)([^>]*)>/g;
    const imgRegex = /<img\s+([^>]*)>/g;

    // Apply modifications in order using string methods
    let modifiedHtmlContent = DOMPurify.sanitize(content);

    // Replace p tags with desired class
    modifiedHtmlContent = modifiedHtmlContent.replace(paragraphRegex, '<p class="text-lg desktop:text-xl !bg-transparent" />');

    modifiedHtmlContent = modifiedHtmlContent.replace(aRegex, (match, attributes) => {
        const hrefMatch = attributes.match(/href\s*=\s*["']([^"']*)["']/);
        const hrefAttribute = hrefMatch ? `href="${hrefMatch[1]}"` : '';

        return `<a target="_blank" class="text-blue-500 after:content-['_↗'] !bg-transparent" ${hrefAttribute} ${attributes}>`;
    });
    // Replace ol tags with desired class
    modifiedHtmlContent = modifiedHtmlContent.replace(olRegex, '<ol class="list-decimal ps-4 flex flex-col desktop:!gap-3 desktop:ps-10 !bg-transparent" />');

    // Replace ul tags with desired class
    modifiedHtmlContent = modifiedHtmlContent.replace(ulRegex, '<ul class="list-disc flex flex-col desktop:!gap-3 ps-4 desktop:ps-10 !bg-transparent" />');

    // Replace img tags with desired class
    modifiedHtmlContent = modifiedHtmlContent.replace(imgRegex, (match, attributes) => {
        const srcMatch = attributes.match(/src\s*=\s*["']([^"']*)["']/);
        const srcAttribute = srcMatch ? `src="${srcMatch[1]}"` : '';

        return `<img class="m-3 border-slate-400 border-2 !rounded-lg !bg-transparent" ${srcAttribute} ${attributes}>`;
    });

    // Replace li tags with desired class
    modifiedHtmlContent = modifiedHtmlContent.replace(liRegex, '<li class="text-lg desktop:text-xl !bg-transparent" />');

    // Replace h2 tags with desired class
    modifiedHtmlContent = modifiedHtmlContent.replace(h2Regex, '<h2 class="text-2xl desktop:text-3xl font-semibold !bg-transparent"$1>');

    // Replace newlines with line breaks
    modifiedHtmlContent = modifiedHtmlContent.replace(/\\n/g, '<br />');

    // Replace multiple <br /> with single <br />
    modifiedHtmlContent = modifiedHtmlContent.replace(multipleBrRegex, '<br />');

    // Replace strong tag within h1 with desired class
    modifiedHtmlContent = modifiedHtmlContent.replace(strongInH1Regex, '<strong class="font-semibold !bg-transparent" />');

    // Replace h3 tags with desired class
    modifiedHtmlContent = modifiedHtmlContent.replace(h3Regex, '<h3 class="font-bold text-xl tablet:text-2xl !bg-transparent" />');

    // Remove <br> between </main> and <h3>
    modifiedHtmlContent = modifiedHtmlContent.replace(brBetweenMainAndH3Regex, '</main><h3');

    return <div className="!bg-transparent" dangerouslySetInnerHTML={{ __html: modifiedHtmlContent }} />;
};
