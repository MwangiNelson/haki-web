// ImageInput.js
import { Text } from '@rewind-ui/core';
import { Button } from 'flowbite-react';
import React from 'react';
import { BsTrash, BsXCircle } from 'react-icons/bs';

const ImageInput = ({ onImageSelected, imagePreviewUrl, onImageRemoved, error }) => {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (resource) => {
                onImageSelected(file, resource.target.result); // Pass the file and image data URL to the parent
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        onImageRemoved(); // Call the parent's remove image handler
    };

    return (
        <div
            className="flex flex-col relative items-center justify-center w-full h-52 tablet:h-72 rounded-lg"
            style={{
                backgroundImage: `url(${imagePreviewUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >

            {imagePreviewUrl && (
                <Button
                    type="button"
                    className="absolute top-1 right-1 bg-red-300/75 text-red-600 hover:!bg-red-300"
                    color='red'
                    onClick={handleRemoveImage}
                >
                    <BsTrash className="me-3 text-base" />
                    Remove banner Image
                </Button>
            )}
            {!imagePreviewUrl && (<>
                <label htmlFor="dropzone-file"
                    className={`flex flex-col w-full h-52 desktop:h-72 border-2 ${error ? 'border-red-600' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer ${error ? 'bg-red-200 hover:bg-red-300' : 'bg-transparent hover:bg-gray-200/80'}  p-10 text-center items-center justify-center`}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className={`w-8 h-8 mb-4 ${error ? 'text-red-600' : 'text-gray-400'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className={`mb-2 text-sm ${error ? '!text-red-600' : 'text-gray-400'}`} >
                            <span className="font-semibold">Click to upload</span> an image for the resource
                        </p>
                        <p className={`text-xs ${error ? '!text-red-600' : 'text-gray-400'} `}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input
                        id="dropzone-file"
                        accept="image/*"
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>
            </>)}
            {error && <Text variant='p' className='text-xs text-red-600 w-full py-2'>Please select an image</Text>}
        </div>
    );
};

export default ImageInput;
