import React , {useState} from "react";
import AdminLayout from "../../../components/AdminLayout";
import CoordinateMapping from "../../../components/NewAdmin/CoordinateMapping";

export default function Canvas(){
    const [templateName, setTemplateName] = useState("");

    return (
        <AdminLayout>
            <div className="template-details">
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
          </div>
            <CoordinateMapping />
        </AdminLayout>
    );
}