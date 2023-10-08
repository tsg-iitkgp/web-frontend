import React from 'react';
import AdminNavbar from "./AdminNavbar/AdminNavbar";

export default function AdminLayout({ children }) {
    return (
      <div className="adminlayout">
        <AdminNavbar />
        <main style={{ margin:"3vw auto" ,
        padding:" 0vw 0vw 5vw 0vw", width:"85vw",
        minHeight:"80vh" ,backgroundColor:"white", borderRadius:"0.75vw", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>{children}</main>
      </div>
    );
  }
