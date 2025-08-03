/* filepath: d:\gym-web-frontend\src\testComponents\TeamSection.js */
import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './TeamSection.css';

const TeamSection = () => {
  const teamData = [
    {
      category: "Governor",
      members: [
        {
          id: 1,
          name: "John Doe",
          image: "/testAssets/post.png",
          instagram: "https://instagram.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          facebook: "https://facebook.com/johndoe"
        },
        {
          id: 2,
          name: "Jane Smith",
          image: "/testAssets/post.png",
          instagram: "https://instagram.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
          facebook: "https://facebook.com/janesmith"
        },
        {
          id: 3,
          name: "Mike Johnson",
          image: "/testAssets/post.png",
          instagram: "https://instagram.com/mikejohnson",
          linkedin: "https://linkedin.com/in/mikejohnson",
          facebook: "https://facebook.com/mikejohnson"
        }
      ]
    },
    {
      category: "Heads",
      members: [
        {
          id: 4,
          name: "Sarah Wilson",
          image: "/testAssets/post.png",
          instagram: "https://instagram.com/sarahwilson",
          linkedin: "https://linkedin.com/in/sarahwilson",
          facebook: "https://facebook.com/sarahwilson"
        },
        {
          id: 5,
          name: "David Brown",
          image: "/testAssets/post.png",
          instagram: "https://instagram.com/davidbrown",
          linkedin: "https://linkedin.com/in/davidbrown",
          facebook: "https://facebook.com/davidbrown"
        },
        {
          id: 6,
          name: "Emma Davis",
          image: "/testAssets/post.png",
          instagram: "https://instagram.com/emmadavis",
          linkedin: "https://linkedin.com/in/emmadavis",
          facebook: "https://facebook.com/emmadavis"
        }
      ]
    }
  ];

  return (
    <div className="team-container">
      {teamData.map((section, index) => (
        <div key={index} className="team-section">
          <h2 className="team-category-title">{section.category}</h2>
          <div className="team-grid">
            {section.members.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="member-image"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                  <div className="social-overlay">
                    <div className="social-icons">
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon instagram" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon linkedin" />
                      </a>
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon facebook" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;