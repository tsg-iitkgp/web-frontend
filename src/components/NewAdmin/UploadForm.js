import { useState } from "react";


export default function UploadForm(){
    const [templateName, setTemplateName] = useState("");
    return (
        <div className="details">
            <div className="box">
              <label className="name" htmlFor="template-name">
                Template Name:
              </label>
              <input
                id="template-name"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
              />
            </div>
            <button className="upload-btn">Upload Template</button>
          </div>
    );
}