import React from 'react';
import { Controller } from 'react-hook-form';
import { Button } from '@rewind-ui/core';
import { Tooltip } from 'flowbite-react';
import { BsFileEarmarkPdfFill, BsFileEarmarkTextFill, BsFileEarmarkWordFill, BsXCircle } from 'react-icons/bs';

const FileInput = ({ control, name ,files = 1 }) => {
  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'application/pdf':
        return <div className="flex items-center bg-pink-400 rounded justify-center w-12 h-12"><BsFileEarmarkPdfFill className="text-white text-3xl" /></div>;
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return <div className="flex items-center bg-blue-400 rounded justify-center w-12 h-12"> <BsFileEarmarkWordFill className="text-white text-3xl" /></div>;
      case 'text/plain':
        return <div className="flex items-center bg-gray-400 rounded justify-center w-12 h-12"><BsFileEarmarkTextFill className="text-white text-3xl" /></div>;
      default:
        return null;
    }
  };
  const getFileExtension = (fileType) => {
    switch (fileType) {
      case 'application/pdf':
        return 'PDF';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'Word Document';
      case 'text/plain':
        return 'Text Document';
      default:
        return fileType;
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={null}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        // Function to remove the selected PDF file
        const removePDF = () => onChange(null);

        return (
          <>
            <input
              type="file"
              onChange={(e) => onChange(e.target.files[0])} // Update form state with the selected file
              accept='.doc,.docx,.txt,.pdf'
              onBlur={onBlur}
              ref={ref}
              className='file-input w-full max-w-lg rounded-lg border-gray-900 h-[initial] p-0 mb-2'
            />
            {value && (
              <div className="rounded relative border-[1px] gap-2 w-fit ps-2 pe-4 py-2 flex flex-row">
                <>
                  {getFileIcon(value.type)}
                </>
                <div className="file-info">
                  <div className="file-name text-gray-800">
                    <span className="font-semibold">{value.name}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {getFileExtension(value.type)}
                  </div>
                </div>
                <Tooltip
                  theme={'light'}
                  content={<p className="text-xs !w-fit">Remove uploaded file</p>}
                  placement="right"
                >
                  <Button variant="link" radius="full" onClick={removePDF}>
                    <BsXCircle className="text-red-500 hover:text-red-600 cursor-pointer" />
                  </Button>
                </Tooltip>
              </div>
            )}
          </>
        );
      }}
    />
  );
};

export default FileInput;
