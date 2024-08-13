import React from 'react';
import './FileUpload.css';
import { UploadCloudIcon } from '../CustomIcons';


const FileUpload: React.FC = ({}) => {
  return (
    <div className='file-upload-container'>
        <div className='featured-icon'>
            <UploadCloudIcon/>
        </div>
        <div className='text-and-subtext'>
            <p className='text'><span>Click to upload</span> or drag and drop</p>
            <p className='subtext'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </div>

    </div>
  );
};

export default FileUpload;
