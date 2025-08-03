import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <div className="header-container">
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-content">
          <div className="nav-left">
            <div className="logo">
              <img
                src="../testAssets/tsg-logo.png"
                alt="KodeInKGP Logo"
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  background: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Header Content */}
      <div className="header-content">
        <div className="header-wrapper">
          <div className="profile-section">
            {/* Profile Logo */}
            <div className="profile-logo">
              <img
                src="../testAssets/kodeinLogo.png" 
                alt="KodeInKGP Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid #fbbf24',
                  background: 'transparent'
                }}
              />
            </div>
            
            {/* Profile Info */}
            <div className="profile-info">
              <div className="profile-header-content">
                <h1 className="profile-title">KodeInKGP</h1>
                <blockquote className="profile-quote">
                  "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past"
                </blockquote>
                <div className="profile-domain">
                  <span className="domain-label">Domain</span>
                  <span className="domain-value"> : Web 3.0 Technology</span>
                </div>
              </div>
              
              <div className="profile-social-tags">
                <div className="profile-tags">
                  <span className="tag">web3</span>
                  <span className="tag">metaverse</span>
                  <span className="tag">code</span>
                </div>
                
                <div className="header-social-icons">
                  <FaYoutube className="header-social-icon youtube" />
                  <FaInstagram className="header-social-icon instagram" />
                  <FaLinkedin className="header-social-icon linkedin" />
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