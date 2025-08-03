import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BASE_URL } from '../constants/api';
import './SocietiesList.css';

const SocietiesList = () => {
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');
  const [categories] = useState([
    'Social and Cultural',
    'Technology', 
    'Sports and Games',
    "Student's Welfare"
  ]);

  const fetchSocieties = async (category = '') => {
    setLoading(true);
    setError(null);
    
    try {
      const queryParams = new URLSearchParams({
        status: 'active',
        limit: '50'
      });
      
      if (category) {
        queryParams.append('category', category);
      }

      const response = await fetch(`${BASE_URL}/societies?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setSocieties(data.societies || []);
    } catch (err) {
      console.error('Failed to fetch societies:', err);
      setError('Failed to load societies. Please try again later.');
      setSocieties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSocieties(activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  if (loading) {
    return (
      <div className="societies-container">
        <div className="societies-loading">
          <div className="loading-spinner"></div>
          <p>Loading societies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="societies-container">
      <div className="societies-header">
        <h1 className="societies-title">Societies</h1>
        
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => fetchSocieties(activeCategory)} className="retry-btn">
            Retry
          </button>
        </div>
      )}

      <div className="societies-grid">
        {societies.length === 0 && !loading && !error ? (
          <div className="no-societies">
            <p>No societies found for this category.</p>
          </div>
        ) : (
          societies.map((society) => (
            <div key={society.id} className="society-card">
              <div className="society-logo">
                <img
                  src={society.logo_url}
                  alt={`${society.name} logo`}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvZ288L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              
              <div className="society-info">
                <h3 className="society-name">{society.name}</h3>
                <div className="social-icons">
                  {society.social_media?.facebook && (
                    <a href={society.social_media.facebook} className="social-link" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  )}
                  {society.social_media?.instagram && (
                    <a href={society.social_media.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {society.social_media?.linkedin && (
                    <a href={society.social_media.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SocietiesList;