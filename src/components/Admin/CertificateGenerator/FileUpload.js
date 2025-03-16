import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import apiService from '../../../apiService';

const FileUpload = (props) => {
  const [file, setFile] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploadPercentage, setUploadPercentage] = useState(0);
  
  // File validation constants
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const MIN_IMAGE_WIDTH = 800;
  const MIN_IMAGE_HEIGHT = 600;
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];

  const validateFileType = (file) => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      props.setMessage('Invalid file type. Please upload a JPG, PNG or PDF file.');
      return false;
    }
    return true;
  };

  const validateFileSize = (file) => {
    if (file.size > MAX_FILE_SIZE) {
      props.setMessage('File is too large. Maximum size allowed is 5MB.');
      return false;
    }
    return true;
  };

  const validateImageDimensions = (file) => {
    return new Promise((resolve) => {
      if (!file.type.startsWith('image/')) {
        resolve(true);
        return;
      }

      const img = new Image();
      img.src = URL.createObjectURL(file);
      
      img.onload = () => {
        URL.revokeObjectURL(img.src);
        if (img.width < MIN_IMAGE_WIDTH || img.height < MIN_IMAGE_HEIGHT) {
          props.setMessage(`Image dimensions too small. Minimum required dimensions are ${MIN_IMAGE_WIDTH}x${MIN_IMAGE_HEIGHT} pixels.`);
          resolve(false);
        } else {
          resolve(true);
        }
      };

      img.onerror = () => {
        URL.revokeObjectURL(img.src);
        props.setMessage('Error loading image. Please try another file.');
        resolve(false);
      };
    });
  };

  const onChange = async (e) => {
    const selectedFile = e.target.files[0];
    
    if (!selectedFile) return;

    // Reset previous error messages
    props.setMessage('');
    
    // Validate file type and size
    if (!validateFileType(selectedFile) || !validateFileSize(selectedFile)) {
      e.target.value = '';
      return;
    }

    // Validate image dimensions if it's an image
    const isValidDimensions = await validateImageDimensions(selectedFile);
    if (!isValidDimensions) {
      e.target.value = '';
      return;
    }

    setFile(selectedFile);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('certificateId', props.id);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': 'https://gymkhana.iitkgp.ac.in',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
      },
      onUploadProgress: progressEvent => {
        setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
        props.setStatus(false);
        props.setGenerate('Generating...');
        props.setGenerateStatus('warning');
      }   
    }
    try {
        const res = await axios.post(apiService + '/certificate/upload', formData, config);
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
        // console.log(res.status);
        props.setMessage('Certificates generated and sent successfully!');
        setUploadPercentage(0);
        props.setGenerate('Generated');
        props.setGenerateStatus('success');
        props.setStatus(false);
        
        if (res.status === 204) {
            props.setMessage('Please attach a file!');
            setUploadPercentage(0);
            props.setGenerate('Generation Failed');
            props.setGenerateStatus('danger');
            props.setStatus(false);
            setTimeout(() => {
                props.setMessage('');
                setUploadPercentage(0);
                props.setGenerate('Generate');
                props.setGenerateStatus('primary');
                props.setStatus(true);
            }, 5000);
        }
    }
    catch (err) {
        if (err.message === "Request failed with status code 422") {
            props.setMessage('The file format is invalid!');
            setUploadPercentage(0);
            props.setGenerate('Generation Failed');
            props.setGenerateStatus('danger');
            props.setStatus(false);      
            setTimeout(() => {
                props.setMessage('');
                setUploadPercentage(0);
                props.setGenerate('Generate');
                props.setGenerateStatus('primary');
                props.setStatus(true);
            }, 5000);
        } else {
          console.log(err)
            props.setMessage('Failed to generate certificates! Please try again later!');
            setUploadPercentage(0);
            props.setGenerate('Generation Failed');
            props.setGenerateStatus('danger');
            props.setStatus(false);
        }
    }
    // console.log(formData);
  }
  return (
    <Fragment>
      {props.message ? <Message msg={props.message} setMessage={props.setMessage} generateStatus={props.generateStatus} /> : null}
      <form onSubmit={onSubmit}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
        </div>
        <br />
        <Progress percentage={uploadPercentage} />

        <div className='fileuploadbutton'>
          <button
            type="submit"
            value="Generate"
            className={`btn btn-${props.generateStatus} btn-block mt-4 col-lg-7`}
            disabled={!(props.status)}
          >{props.generate}</button>
        </div>
      </form>
      {uploadedFile ? <div className="row mt-5">
        <div className="col-md-6 m-auto"></div>
        <h3 className="text-center">{uploadedFile.fileName}</h3>
        <img style={{ width: '100%' }} src={uploadedFile.filePath} alt="" />
      </div> : null}
    </Fragment>
  );
};

export default FileUpload;
