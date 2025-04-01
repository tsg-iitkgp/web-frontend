import "./report.css"
import React, { useEffect, useState } from 'react';
import host from "../../apiService";
import Layout from "../../components/Layouts/Layout";
const AllReports = () => {

    // State management
    const [activeTab, setActiveTab] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [reportsData,setReports] = useState([]);
    const reportsPerPage = 10;

    useEffect(()=>{
       fetch(`${host}/reports/get-report`)
        .then(async(res)=>{
            if(res.ok){
            const response= await res.json()
            setReports(response.report)
            }
        }).catch((e)=>{
            console.log(e)
        })

    },[activeTab,currentPage])

    // Filter reports based on active tab
    const filteredReports = activeTab === "all"
        ? reportsData
        : reportsData.filter(report => report.category === activeTab);

    // Pagination logic
    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);
    const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle tab change
    // const handleTabChange = (tab) => {
    //     console.log(tab)
    //     setActiveTab(tab);
    //     setCurrentPage(1); // Reset to first page when changing tabs
    // };



    return (
        <Layout>
        <div className="reports-container">
            <h1>Reports</h1>

            {/* Tab Navigation */}
            <div className="tabs">
                {/* <button
                    className={activeTab === "all" ? "tab active" : "tab"}
                    onClick={() => handleTabChange("all")}
                >
                    All Reports
                </button> */}
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

            {/* Reports List */}
            <div className="reports-list">
                {currentReports.length > 0 ? (
                    currentReports.map(report =>{ 
                        const urlArrray= report.uploadedReportId.split("/")
                        const modifiedArray= urlArrray.slice(2,);
                        const url= modifiedArray.join('/');
                       
                        const date = new Date(report.date);
                        const options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
                        const formattedDate = date.toLocaleDateString("en-US", options).replace(',', '');
                       return (

                        <div key={report._id} className="report-item">
                            <div className="report-date">{formattedDate}</div>
                            <div className="report-title">{report.title}</div>
                           {activeTab==="all" ? <span className={`report-category ${report.category}`}>
                                {report.category.charAt(0).toUpperCase() + report.category.slice(1)}
                            </span>: null}
                            <a href={`${host}/${url}`} className="report-download">Download</a>
                        </div>
                        
                    )})
                ) : (
                    <div className="empty-state">No reports available in this category.</div>
                )}
            </div>

            {/* Pagination */}
            {filteredReports.length > 0 && (
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
