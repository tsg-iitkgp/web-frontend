import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layouts/Layout";
import "./GaiaEvent2025.css";

export default function GaiaEvent2025() {
  const pageTitle = "Gaia Event 2025 - IIT Kharagpur Cambridge Collaboration | TSG";
  const pageDescription = "Historic collaboration between IIT Kharagpur and University of Cambridge for the Gaia Platform. Inaugural event of the 2nd phase of the International Software Derby organized by 1 Earth Holdings Inc.";
  const pageImage = "https://gymkhana.iitkgp.ac.in/data/media/images/events/Gaia_Platform_KGP-Cambridge_Collab.JPEG";
  const pageUrl = "https://gymkhana.iitkgp.ac.in/events/gaia-2025";

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />
        
        {/* WhatsApp */}
        <meta property="og:site_name" content="Technology Students' Gymkhana - IIT Kharagpur" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      
      <div className="gaia-event-container">
        <div className="gaia-event-header">
          <h1 className="gaia-event-title gaia-event-breaking-news">
            GLOBAL BREAKING NEWS!
          </h1>
          <h1 className="gaia-event-title">
            IIT Kharagpur - University of Cambridge, UK
            <br />
            Collaboration for Defense of Nature
          </h1>
          <h2 className="gaia-event-subtitle">
            Inaugural Event of the 2nd Phase of the International Software Derby
          </h2>
          <h3 className="gaia-event-subtitle">
            SAVE: Software for Awakening Voice for Nature
          </h3>
          <div className="gaia-event-meta">
            <strong>Date:</strong> 17 November 2025
            <br />
            <strong>Location:</strong> Indian Institute of Technology Kharagpur
          </div>
        </div>

        <div className="gaia-event-image-container">
          <img
            src="/data/media/images/events/Gaia_Platform_KGP-Cambridge_Collab.JPEG"
            className="gaia-event-image"
            alt="Gaia Event 2025 - IIT Kharagpur Cambridge Collaboration"
          />
        </div>

        <div className="gaia-event-section">
          <p className="gaia-event-paragraph">
            The Indian Institute of Technology Kharagpur hosted the inaugural
            event of the 2nd phase of the International Software Derby,
            organized by <strong>1 Earth Holdings Inc.</strong>, a Canadian
            biosphere-focused climate startup. The keynote address was delivered
            by
            <strong> Ms. Nandani Jangid</strong>, Gen Z representative,
            Information Alchemist, and proud IIT Kharagpur graduate.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">Keynote Address</h2>
          <p className="gaia-event-speaker">
            Speech Delivered by Ms. Nandani Jangid
          </p>

          <p className="gaia-event-paragraph">
            1 Earth Holdings Inc. is the first climate startup in the world with
            its own flag - a flag that took our founder two years to design. It
            symbolizes our mission and represents patient Earth more powerfully
            and purposefully than any flag before it.
          </p>

          <p className="gaia-event-paragraph">
            Our initiatives, <strong>The Earth Cup</strong> and{" "}
            <strong>The Gaia Platform</strong>, form a planetary movement for
            climate action and world peace. The Gaia Platform is envisioned as a
            Digital Galápagos, inspired by the evolutionary heritage of the
            Galápagos Islands.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">
            Historic Collaboration Announcement
          </h2>
          <p className="gaia-event-paragraph">
            On behalf of Gen Z, our Founder, and all current and future
            stakeholders - including IIT Kharagpur - I am proud to announce our
            commitment to establishing a historic collaboration with the{" "}
            <strong>University of Cambridge, UK</strong>, to accelerate the
            launch of the Gaia Platform. A working prototype has already been
            developed under our <span className="gaia-event-highlight">SAVE initiative - Software for Awakening Voice
            for Earth</span>.
          </p>

          <p className="gaia-event-paragraph">
            We hold deep respect for{" "}
            <strong>His Majesty King Charles III</strong>, whom we honor as the
            Redeemer-in-Chief of the Biosphere. We call upon{" "}
            <strong>Prime Minister Narendra Modi</strong>, the
            Catalyzer-in-Chief of the Biosphere, to join hands with the Climate
            King - because we are truly racing against time.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">
            IIT Kharagpur's Contribution
          </h2>
          <p className="gaia-event-paragraph">
            I am thrilled to have joined this future-ready startup alongside{" "}
            <strong>21 fellow IIT Kharagpur graduates and students</strong> who
            have pledged themselves fully to the Earth Cup mission. Many more
            are ready to join. We seek the support of everyone who believes they
            can make a difference.
          </p>

          <p className="gaia-event-paragraph">
            Our startup has introduced a pioneering sustainable business model
            integrating the four bottom lines, going beyond People, Planet, and
            Profit. We believe a global biosphere consciousness revolution will
            spark the world's largest sustainable industry in our
            lifetime—powered by eco-cosmopolitan citizens and consumers.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">The Gaia Platform Vision</h2>
          <p className="gaia-event-paragraph">
            In Greek mythology, Gaia is the primordial Mother Earth. The Gaia
            Platform will bring this spirit alive by empowering and organizing
            the voice of mothers in defense of nature. A call to action has
            already been released by our Gen Z sister, Raisa Ameen, as part of A
            Sneak Peek of the Earth Cup Documentary.
          </p>

          <p className="gaia-event-paragraph">
            On the Gaia Platform, there will be no "users" or "followers." We
            are all crew on this spaceship Earth. Everyone will be a{" "}
            <strong>planetarian</strong> - a responsible participant in a global
            purpose economy.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">Ambitious Goals</h2>
          <p className="gaia-event-paragraph">
            We have a top-secret strategy whereby the Gaia Platform shall be
            able to generate 1 billion or more downloads on a single day. Our
            target is <strong>5 billion planetarians</strong> and
            <strong> 6 billion planet-friendly shoppers</strong> with a
            collective buying power of
            <strong> $25.3 trillion</strong> as of today. God is in the details.
          </p>

          <p className="gaia-event-paragraph">
            We are building a new language of the future - integrating machine
            language, ecolinguistics, and the universal language of soccer,
            loved by 6 billion people.
          </p>

          <p className="gaia-event-quote gaia-event-highlight">
            "Mankind invented the atomic bomb, but no mouse would ever construct
            a mousetrap. Let us hope it is not too late to restore wisdom and
            sanity." - Albert Einstein
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">Acknowledgments</h2>
          <p className="gaia-event-paragraph">
            We also express our gratitude to{" "}
            <strong>Smt. Mamata Banerjee</strong>, Hon'ble Chief Minister of
            West Bengal, in anticipation of her support for our climate, soccer,
            and media initiatives being launched from this state.
          </p>
        </div>

        <div className="gaia-event-section">
          <p className="gaia-event-paragraph">
            During a private meeting with stakeholders, the soft-spoken founder of 1 Earth Holdings Inc. Sammy remarked that Nandani Jangid and her Gen Z sister Raisa Ameen from Canada shall be the Greta Thunberg duo from the Global South. Nandani and Raisa, together as the face of the Earth Cup and the Gaia Platform, will generate astronomical network effects & a positive feedback loop within the global soccer and sports fans congregation towards achieving the goal of 6 billion planet friendly shoppers. The SAVE project is building the Great Attractor.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">Documentary</h2>
          <p className="gaia-event-paragraph">
            <strong>Link to IIT Kharagpur Inaugural Events Documentary:</strong>
            <br />
            <a
              href="https://www.dropbox.com/scl/fi/3v06ihn00j2cysv22gt65/IIT-Kharagpur-Inaugural-Events-Part-1-to-Part-4-Einstein-Tagore-Spotlight.mp4?rlkey=txs8aqjpj34yeq5z3qlo36u8v&st=2cgnqlsu&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="gaia-event-link"
            >
              View Documentary
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
