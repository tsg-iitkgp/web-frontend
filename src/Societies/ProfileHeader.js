import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BASE_URL } from "../constants/api";
import "./ProfileHeader.css";

const cache = {};

const ProfileHeader = () => {
  const { society_slug } = useParams();
  const [society, setSociety] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSociety() {
      setLoading(true);
      setError(null);

      if (cache[society_slug]) {
        setSociety(cache[society_slug]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${BASE_URL}/societies/${encodeURIComponent(society_slug)}`);
        if (!res.ok) throw new Error("Failed to fetch society");
        const data = await res.json();
        setSociety(data.society);
        cache[society_slug] = data.society;
      } catch (err) {
        setError("Could not load society details.");
      } finally {
        setLoading(false);
      }
    }

    if (society_slug) {
      fetchSociety();
    }
  }, [society_slug]);

  if (loading) {
    return (
      <div className='header-container'>
        <div className='header-content'>
          <div className='header-wrapper'>
            <div className='loading-container'>
              <div className='loading-spinner'></div>
              <p>Loading society...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !society) {
    return (
      <div className='header-container'>
        <div className='header-content'>
          <div className='header-wrapper'>
            <div className='error-container'>
              <p>{error || "Society not found."}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='header-container'>
      {/* Top Navigation */}
      <nav className='top-nav'>
        <div className='nav-content'>
          <div className='nav-left'>
            <div className='logo'>
              <img
                src='../testAssets/tsg-logo.png'
                alt='TSG Logo'
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Header Content */}
      <div className='header-content'>
        <div className='header-wrapper'>
          <div className='profile-section'>
            {/* Profile Logo */}
            <div className='profile-logo'>
              <img
                src={society.logo_url}
                alt={`${society.name} Logo`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "4px solid #fbbf24",
                  background: "transparent",
                }}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvZ288L3RleHQ+PC9zdmc+";
                }}
              />
            </div>

            {/* Profile Info */}
            <div className='profile-info'>
              <div className='profile-header-content'>
                <h1 className='profile-title'>{society.name}</h1>
                <blockquote className='profile-quote'>{society.description}</blockquote>
                <div className='profile-domain'>
                  <span className='domain-label'>Category</span>
                  <span className='domain-value'> : {society.category_name}</span>
                </div>
              </div>

              <div className='profile-social-tags'>
                <div className='profile-tags'>
                  <span className='tag'>{society.category_name.toLowerCase()}</span>
                  <span className='tag'>active</span>
                </div>

                <div className='header-social-icons'>
                  {society.social_media?.facebook && (
                    <a href={society.social_media.facebook} target='_blank' rel='noopener noreferrer'>
                      <FaFacebook style={{ fontSize: "2.8rem" }} className='header-social-icon facebook' />
                    </a>
                  )}
                  {society.social_media?.instagram && (
                    <a href={society.social_media.instagram} target='_blank' rel='noopener noreferrer'>
                      <FaInstagram style={{ fontSize: "2.8rem" }} className='header-social-icon instagram' />
                    </a>
                  )}
                  {society.social_media?.linkedin && (
                    <a href={society.social_media.linkedin} target='_blank' rel='noopener noreferrer'>
                      <FaLinkedin style={{ fontSize: "2.8rem" }} className='header-social-icon linkedin' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
