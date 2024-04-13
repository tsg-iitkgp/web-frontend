import React, { useState, useEffect } from "react";
import "../certifgen2/ExistingTemplates.css";
import { Link } from "react-feather";
// import Search from "./magnifying-glass.png";
import data from '../../../components/NewAdmin/existingTemplate.json';
// import Fuse from 'fuse.js';
// import SearchList from './SearchList';



export default function ExistingTemplates(){
    //useEffect(()=>{},)
    const [searchField, setSearchField] = useState("");
    const handleChange = e => {
        setSearchField(e.target.value);
    }
    console.log(searchField);

    const filteredCert = data['Templates'].filter(check
        // cert => {
        //     return (
        //         cert.name.includes(searchField.toLowerCase()) || cert.name.includes(searchField.toUpperCase())
        //     )
        // }
    );

    function check(data)
    {
        return data.name.includes(searchField.toLowerCase()) || data.name.includes(searchField.toUpperCase());
    }

    // function searchList() {
    //     return (
    //         <SearchList filteredCert={filteredCert} />
    //     );
    //   }
    //   onChange={handleChange}

    return(
        <div className="templatePage">
            <h1 className="template_title">Existing Templates</h1> 
                <div className="searchBar">
                    <div className = " searchbar searchBar_tem">
                        <input type='text' placeholder="Certificate type" />                        
                    </div>
                    <button className="upload_template searchBar_tem">Upload Template</button>
                </div>
                {/* <Search details={data}/> */}
                {/* {searchList()} */}
                <div className="template_container">
                    <div className = "template">
                        <img src={data.Templates[0].image } className = "image"/>
                        <p className = "text">{data.Templates[0].name}</p>
                    </div>
                    <div className = "template">
                        <img src={data.Templates[1].image} className = "image" />
                        <p className = "text">{data.Templates[1].name}</p>
                    </div>
                    <div className = "template">
                        <img src={data.Templates[2].image} className = "image"/>
                        <p className = "text">{data.Templates[2].name}</p>
                    </div>
                    <div className = "template">
                        <img src={data.Templates[3].image} className = "image"/>
                        <p className = "text">{data.Templates[3].name}</p>
                    </div>
                    <div className = "template">
                        <img src={data.Templates[4].image} className = "image"/>
                        <p className = "text">{data.Templates[4].name}</p>
                    </div>
                </div>  
                
        </div>     
        
    )
}