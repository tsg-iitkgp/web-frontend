import React from "react";
import Layout from "../components/Layout";

export default function NotFound() {
  document.title = "Page Not Found | TSG";
  return (
    <Layout>
      <div style={{ textAlign: "center", fontSize: 20 }}>
        OOPS! It's a 404 error.
      </div>
    </Layout>
  );
}
