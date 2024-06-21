import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { BsCheck2Circle, BsClock, BsLaptop, BsList, BsPerson, BsPinMap, BsPlusCircle, BsQuestionCircleFill, BsUpload, BsYoutube } from "react-icons/bs";
import { Breadcrumb, Button, FloatingLabel, Label, Modal, Select, Spinner, TextInput, Textarea, Tooltip, Badge, Datepicker } from 'flowbite-react';
import { Selector, Text, } from '@rewind-ui/core';
import { generateRandomString, handleImageUpload } from '@utils/FormUtils';
import ImageInput from '@utils/ImageInput';
import { QuillEditor } from '@utils/QuillEditor';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const PostBlog = () => {

  const editorRef = useRef(null);
  const navigate = useNavigate();
  // const [content, setContent] = useState('');
  const [blogMode, setblogMode] = useState('in-person')
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imageError, setImageError] = useState(false);
  const [approveModal, setApproveModal] = useState(false)
  const [loading, setLoading] = useState(false)
//   const { userData } = useContext(AppContext)
  const [selectedThemes, setSelectedThemes] = useState([])
  const [themeError, setThemeError] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString())




  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }, } = useForm()


  const handleImageSelected = (selectedImage, previewUrl) => {
    setImage(selectedImage);
    setImageUrl(previewUrl);
    setImageError(false);
  };

  const handleImageRemoved = () => {
    setImage(null); // Clear the image from the state hook
    setImageUrl('');// Clear the image URL from the state
    setImageError(true); // image is required , so it'll trigger an error
  };

  useEffect(() => {
    console.log('dATE UPDTED', selectedDate)
  }, [selectedDate])


  const onSubmit = async (data) => {
    setLoading(true)
    if (!imageUrl) {
      toast.add({
        description: "Please select a banner image",
        duration: 3000,
        iconType: 'warning',
        tone: 'light',
        color: 'yellow',
        showProgress: false,
      })
      setImageError(true); // Trigger error state if no image is selected
      return; // Prblog form submission
    }

    // const POST_ENDPOINT = import.meta.env.VITE_APP_BASE_ENDPOINT + '/blogs';
    const POST_ENDPOINT = '/blogs';

    const formData = new FormData();
    console.log(`${data.start_time} - ${data.end_time}`)


    // Populate formData with text fields

    formData.append('blog_title', data.blog_title);
    formData.append('blog_description', data.blog_description);
    formData.append('blog_date', selectedDate);
    formData.append('blog_time', `${data.start_time} - ${data.end_time}`);
    formData.append('blog_is_featured', false);
    formData.append('blog_location', data.blog_location);
    formData.append('blog_mode', blogMode);
    formData.append('blog_theme', selectedThemes.join(', '));  // Convert the array to a comma-separated string
    formData.append('blog_content', editorRef.current);

    // formData.append('blog_by', userData.user_data.user_id);
    formData.append('blog_is_published', false);

    // Handle the image URL upload separately if necessary
    const img_name = `${data.blog_title}${generateRandomString(5)}_bnr`;
    const uploadedImageUrl = await handleImageUpload(image, img_name);

    formData.append('banner_image', uploadedImageUrl);



    try {
      const response = await fetch(POST_ENDPOINT, {
        method: 'POST',
        body: formData, // Send formData as the request body
        // Note: When using FormData, you don't set the Content-Type header manually
        // it's automatically set to 'multipart/form-data', and the correct boundary is set
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        // Success actions here
        reset()
        setImage(null); // Clear the image from the state hook
        setImageUrl('');

        navigate('/blogs/my-blogs')

        toast.success('blog posted successfully')
        setLoading(false)
        return true;
      } else {
        alert('Post failed.');
        setLoading(false)
        return false;
      }
    } catch (error) {
      setLoading(false)
      console.error('Error:', error);
      return false;
    }
  };

  const handleContentChange = (content) => {
    editorRef.current = content;
    // console.log(content); // Process the content as needed
  };

  useEffect(() => {
    console.log(blogMode)

  }, [blogMode])

  return (
    <>
      <div className="w-full px-4 h-fit  flex flex-row justify-center items-start">
        <div className="w-3/4 flex flex-col gap-1 justify-start items-start">
          <Breadcrumb className='w-fit bg-green-100 p-3 rounded-md py-1'>
            <Breadcrumb.Item href='/' icon={BsList} >Home</Breadcrumb.Item>
            <Breadcrumb.Item href='' icon={BsPlusCircle}>Post blog</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="text-center w-fit text-3xl text-black  font-semibold pt-4">Post a blog</h1>

          <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-5 py-5'>
            <div className="w-full flex flex-col desktop:flex-row gap-4 justify-between">
              <div className="w-full h-fit desktop:w-8/12 flex flex-col">
                <Text variant='h5' weight='bold' className='py-3' >Blog details :</Text>

                {/*blog title input field */}
                <div className="flex flex-col w-full h-fit gap-3 justify-start items-start">
                  <div className="flex flex-col w-full  h-full">
                    <Label >blog title:</Label>
                    <TextInput
                      className='!bg-transparent'
                      {...register('blog_title', { required: 'Please select a blog title.' })}
                      helperText={errors.blog_title?.message} color={errors.blog_title ? "failure" : "gray"}
                      placeholder='blog TITLE' />
                  </div>
                  <div className="flex flex-col tablet:flex-row gap-3 w-full ">
                    <div className="flex flex-col w-full tablet:w-1/2">
                      <Label >blog date:</Label>
                      <Datepicker minDate={new Date()} onSelectedDateChanged={(date) => { setSelectedDate(date.toISOString()) }} helperText={'Enter the blog date here'} />
                    </div>
                    <div className="flex flex-row gap-2 w-full tablet:w-1/2">
                      <div className="flex flex-col w-1/2">
                        <Label >Start time:</Label>
                        <input type='time' {...register('start_time', { required: 'Start time is required' })} className={`${errors.start_time ? 'border-red-400' : ''} border-gray-300 border-2 rounded-lg p-2`} />
                        {errors.start_time && <small className='text-red-500 text-xs'>Please select a start time</small>}

                      </div> <div className="flex flex-col w-1/2">
                        <Label >End time:</Label>
                        <input type='time' {...register('end_time', { required: 'End time is required' })} className={`${errors.start_time ? 'border-red-400' : ''} border-gray-300 border-2 rounded-lg p-2`} />
                        {errors.end_time && <small className='text-red-500 text-xs'>Please select a end time</small>}
                      </div>
                    </div>

                  </div>

                </div>

             

                {/* blog description input field */}
                <div className="flex py-3 flex-col">
                  <small className=" ps-1 text-xs font-normal text-gray-600 py-1" >Add a 15 - 30 word description of this blog</small>
                  <Textarea placeholder='blog DESCRIPTION'
                    {...register('blog_description', {
                      required: 'Please add a description for this blog',
                      validate: {
                        minWords: value => value.split(' ').filter(Boolean).length >= 15 || 'The description must be at least 15 words.',
                        maxWords: value => value.split(' ').filter(Boolean).length <= 30 || 'The description must not exceed 30 words.'
                      }
                    })}
                    color={errors.blog_description ? "failure" : "gray"}
                    helperText={errors.blog_description?.message}
                    rows={4}
                  />
                </div>

                {/* blog input content area */}
                <div className="w-full flex flex-col gap-3 h-[initial]">
                  <Text variant='h5' weight='bold' className='py-0 m-0 desktop:py-3' >Blog Banner Image:</Text>

                  <ImageInput
                    onImageSelected={handleImageSelected}
                    imagePreviewUrl={imageUrl}
                    onImageRemoved={handleImageRemoved}
                    error={imageError}
                  />



                </div>

                <div className="flex flex-col py-4">


                  <Selector onChange={(e) => setblogMode(e)} value={blogMode} color='black' tone='light' fullWidth>
                    <Selector.Tab label='Online' className='w-fit' anchor='online' />
                    <Selector.Tab label='In-person' anchor='in-person' />
                  </Selector>
                </div>
                <div className="flex flex-col h-fit ">
                  {blogMode == 'in-person' &&
                    <div className="flex flex-col pb-10">
                      <TextInput
                        helperText={errors.blog_location?.message}
                        color={errors.blog_location ? 'failure' : 'gray'}

                        addon={<BsPinMap className='text-xl text-gray-500' />} type="text"  {...register("blog_location", { required: 'Please enter a location for the blog' })} id="blog_location" placeholder="Add the blog location details here" />
                      <Label className='text-gray-700 text-xs ps-1 pt-2'>Add the blog location here. </Label>
                    </div>
                  }


                  {blogMode == 'online' && <div className='pb-10'>
                    <div className="flex flex-col">
                      <TextInput
                        helperText={errors.blog_location?.message}
                        color={errors.blog_location ? 'failure' : 'gray'}
                        addon={<BsLaptop className='text-xl text-gray-500' />} type="text"  {...register("blog_location", { required: 'Please enter a link for the blog' })} id="blog_location" placeholder="Add  link here" />
                      <Label className='text-gray-700 text-xs ps-1 pt-2'>Paste the scheduled meeting invite link here </Label>
                    </div>
                  </div>
                  }
                  <div className='pb-14 h-fit'>

                    <Text variant='h5' weight='bold' className='py-0 m-0 desktop:py-3' >blog Content:</Text>
                    <QuillEditor onContentChange={handleContentChange} />
                  </div>

                </div>
                <div className="flex flex-row gap-3">
                  <Tooltip content={'Submit as pending approval.'}>
                    <Button
                      disabled={loading}
                      type='submit'
                      color='purple' className=' text-white border border-gray-300 hover:text-white flex items-center !w-full '>

                      {
                        loading ? <Spinner size={'sm'} color={'purple'} className='me-2' />
                          : <BsClock className='me-2' />}
                      Submit
                    </Button>
                  </Tooltip>

                  {/* <Button
                                    type='button'
                                    onClick={() => setApproveModal(true)}
                                    color='blue'
                                    className='relative flex bg-blue-500 w-full !text-white flex-grow'>
                                    <BsUpload className='me-2' /> Publish blog
                                </Button> */}
                  <Tooltip content='Post the blog for review.' className='flex-grow'>
                    <BsQuestionCircleFill />
                  </Tooltip>

                </div>

              </div>
              <div className="w-full desktop:w-4/12">
                <div className="flex flex-row w-full py-2 gap-3">

                </div>
                <Modal
                  dismissible
                  show={approveModal}
                  onClose={() => { setApproveModal(!approveModal) }} >
                  <Modal.Header><Text variant='h3' weight='bold' color='gray'>Confirmation request</Text></Modal.Header>
                  <Modal.Body>Do you want to publish this blog to the <a href='https://sk-frontend-two.vercel.app/' target='_blank' className='text-blue-600 underline'>Sustainable Kenya</a> platform? This will make it <b>visible to all users.</b> </Modal.Body>
                  <Modal.Footer>
                    <Button type='submit' color='blue'>
                      <BsCheck2Circle className='me-3' />
                      I approve , publish</Button>
                    <Button color='red' onClick={() => { setApproveModal(!approveModal) }}>Cancel</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}

export default PostBlog