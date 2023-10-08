import React , { useRef ,useState } from "react";

import PreviewCarousel from "./PreviewCarousel";

const FileUpload = () => {
        const fileInputRef = useRef(null);
        const [file , setFile] =useState(null); 
        const [uploadComplete, setUploadComplete] = useState(false)
      
        const handleButtonClick = () => {
          fileInputRef.current.click();
        };
      
        const handleFileChange = (event) => {
          setFile(event.target.files[0]);

          setTimeout(() => {
            setUploadComplete(true);
          }, 2000);
        };

        const handleFileRemoval = ()=>{
            setFile(null);
        }
    
        
        return (
          <div>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
      
            {/* Custom-styled button */}
            {file== null ? 
            <button onClick={handleButtonClick} className="upload_btn"><i className="fa fa-upload"></i>Choose File</button>
            : 
            <div className="uploaded">
                <button onClick={handleButtonClick} className="uploaded_btn"><span style={{fontWeight:"600"}}>File Uploaded </span>: {file.name} </button>
                <button onClick={handleFileRemoval} className="delete_btn"><i class="fa fa-times"></i></button>
            </div>}

            {/*Preview of generated certificates*/}
            {uploadComplete && file!= null ? (
                <PreviewCarousel 
                    file={file}
                />
            )
            : <></>}
            
          </div>
        );
        }
      
export default FileUpload;