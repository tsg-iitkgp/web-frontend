import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
        {/* Default meta tags for all pages - will be overridden by page-specific Helmet tags */}
        <title>Technology Students' Gymkhana - IIT Kharagpur | TSG</title>
        <meta
          name="description"
          content="Technology Students' Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
The motto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means Perfection in action is
    Yoga'. Our goal is to bring overall development in IITians through cultivating and nurturing their extra-curricular
    talents."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gymkhana.iitkgp.ac.in/" />
        <meta
          property="og:title"
          content="Technology Students' Gymkhana - IIT Kharagpur"
        />
        <meta
          property="og:description"
          content="The hub of extra-curricular and co-curricular activities in IIT Kharagpur. Managed by students, for students."
        />
        <meta
          property="og:image"
          content="https://gymkhana.iitkgp.ac.in/data/media/images/general/gymkhanaLogo.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gymkhana.iitkgp.ac.in/" />
        <meta
          property="twitter:title"
          content="Technology Students' Gymkhana - IIT Kharagpur"
        />
        <meta
          property="twitter:description"
          content="The hub of extra-curricular and co-curricular activities in IIT Kharagpur. Managed by students, for students."
        />
        <meta
          property="twitter:image"
          content="https://gymkhana.iitkgp.ac.in/data/media/images/general/gymkhanaLogo.png"
        />
      </Helmet>
      <Navbar />
      <main style={{ paddingBottom: "5rem" }}>{children}</main>
      <Footer />
    </div>
  );
}
