import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    console.log('submit');
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('http://localhost:4000/certificate/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage('File uploaded');
      console.log(setMessage);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          {/* <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label> */}
        </div>
        <br />
        <Progress percentage={uploadPercentage} />

        <div className='fileuploadbutton'>
            <input
                type="submit"
                value="Generate"
                className="btn btn-primary btn-block mt-4 col-lg-7"
            />
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
