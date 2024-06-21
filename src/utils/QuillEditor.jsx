import { useState, useRef } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const QuillEditor = ({ onContentChange }) => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
            [{ 'direction': 'rtl' }], // text direction
            [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
            [{ 'align': [] }],
            ['link', 'image', 'video'], // links and media
            ['clean'] // remove formatting button
        ],
    };

    const handleChange = (content, delta, source, editor) => {
        if (onContentChange) {
            onContentChange(editor.getHTML()); // Pass the HTML content up
        }
    };


    return (
        <ReactQuill
            onChange={handleChange}
            modules={modules}
            className="h-96 w-full mb-20 tablet:mb-10 "
            theme="snow" // Add the theme prop
        />
    );
};