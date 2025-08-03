import React, { useState } from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import NavigationTabs from './NavigationTabs';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';
import PostsSection from './PostsSection';
import EventsSection from './EventsSection';
import TeamSection from './TeamSection';
import './MainProfile.css'; 

const MainProfile = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeTab = params.get('tab') || 'about';

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="content-wrapper">
            <AboutSection />
            <StatsSection />
            
            <div className="expertise-section">
              <h3 className="section-title">Our Expertise :</h3>
              
              <div className="expertise-items">
                <div className="expertise-item">
                  <h4 className="expertise-title">
                    <span className="highlight">AI & Metaverse :</span>
                  </h4>
                  <p className="expertise-description">
                    Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.
                  </p>
                </div>
                
                <div className="expertise-item">
                  <h4 className="expertise-title">
                    <span className="highlight">Web :</span>
                  </h4>
                  <p className="expertise-description">
                    Crafting dynamic, responsive websites that deliver exceptional user experiences across all devices.
                  </p>
                </div>
                
                <div className="expertise-item">
                  <h4 className="expertise-title">
                    <span className="highlight">Blockchain :</span>
                  </h4>
                  <p className="expertise-description">
                    Building the decentralized future with secure, transparent blockchain solutions and smart contracts.
                  </p>
                </div>
              </div>
              
              <div className="website-section">
                <h3 className="section-title">Official Website :</h3>
                <div className="website-link">
                  <span className="website-url">https://kodeinkgp.in/</span>
                  <button className="visit-button">visit</button>
                </div>
              </div>
              
              <div className="social-section">
                <h3 className="section-title">Social Media Handles :</h3>
                <div className="social-icons">
                  <FaYoutube className="social-icon youtube" />
                  <FaInstagram className="social-icon instagram" />
                  <FaLinkedin className="social-icon linkedin" />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'posts':
        return <PostsSection />;
      
      case 'event':
        return <EventsSection />;
      
      case 'team':
        return <TeamSection />;
      
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <ProfileHeader />
      <NavigationTabs />
      {renderTabContent()}
    </div>
  );
};

export default MainProfile;