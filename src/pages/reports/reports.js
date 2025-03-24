import "./report.css"
import React, { useEffect, useState } from 'react';
import host from "../../apiService";
import Layout from "../../components/Layouts/Layout";
const AllReports = () => {

    // State management
    const [activeTab, setActiveTab] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [noticesData,setNotices] = useState([  {
        _id: "1",
        uploadedReportId: "https://example.com/reports/notice1.pdf",
        date: "2025-03-20T10:00:00Z",
        title: "Annual Meeting Notice",
        category: "general"
      },
     ]);
    const noticesPerPage = 5;

    useEffect(()=>{
       fetch(`${host}/reports/get-report`)
        .then(async(res)=>{
            if(res.ok){
            const response= await res.json()
            setNotices(response.report)
            }
        }).catch((e)=>{
            console.log(e)
        })

    },[activeTab,currentPage])

    // Filter notices based on active tab
    const filteredNotices = activeTab === "all"
        ? noticesData
        : noticesData.filter(notice => notice.category === activeTab);

    // Pagination logic
    const indexOfLastNotice = currentPage * noticesPerPage;
    const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
    const currentNotices = filteredNotices.slice(indexOfFirstNotice, indexOfLastNotice);
    const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle tab change
    const handleTabChange = (tab) => {
        console.log(tab)
        setActiveTab(tab);
        setCurrentPage(1); // Reset to first page when changing tabs
    };



    return (
        <Layout>
        <div className="notices-container">
            <h1>Notices</h1>

            {/* Tab Navigation */}
            <div className="tabs">
                <button
                    className={activeTab === "all" ? "tab active" : "tab"}
                    onClick={() => handleTabChange("all")}
                >
                    All Notices
                </button>
                {/* <button
                    className={activeTab === "cultural" ? "tab active" : "tab"}
                    onClick={() => handleTabChange("cultural")}
                >
                    cultural
                </button>
                <button
                    className={activeTab === "technology" ? "tab active" : "tab"}
                    onClick={() => handleTabChange("tech")}
                >
                    technology
                </button>
                <button
                    className={activeTab === "welfare" ? "tab active" : "tab"}
                    onClick={() => handleTabChange("welfare")}
                >
                    welfare
                </button>
                <button
                    className={activeTab === "sports" ? "tab active" : "tab"}
                    onClick={() => handleTabChange("sports")}
                >
                    sports
                </button> */}
            </div>

            {/* Notices List */}
            <div className="notices-list">
                {currentNotices.length > 0 ? (
                    currentNotices.map(notice =>{ 
                        const urlArrray= notice.uploadedReportId.split("/")
                        const modifiedArray= urlArrray.slice(2,);
                        const url= modifiedArray.join('/');
                       
                        const date = new Date(notice.date);
                        const options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
                        const formattedDate = date.toLocaleDateString("en-US", options).replace(',', '');
                       return (

                        <div key={notice._id} className="notice-item">
                            <div className="notice-date">{formattedDate}</div>
                            <div className="notice-title">{notice.title}</div>
                           {activeTab==="all" ? <span className={`notice-category ${notice.category}`}>
                                {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                            </span>: null}
                            <a href={`${host}/${url}`} className="notice-download">Download</a>
                        </div>
                        
                    )})
                ) : (
                    <div className="empty-state">No notices available in this category.</div>
                )}
            </div>

            {/* Pagination */}
            {filteredNotices.length > 0 && (
                <div className="pagination">
                    <button
                        className="page-btn prev"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>

                    <div className="page-numbers">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                            <button
                                key={number}
                                className={currentPage === number ? "page-number active" : "page-number"}
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </button>
                        ))}
                    </div>

                    <button
                        className="page-btn next"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
        </Layout>
    )
}


export default AllReports;
