/* filepath: d:\gym-web-frontend\src\testComponents\EventsSection.js */
import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Event Title 1",
      image: "/testAssets/post.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna quam, elementum sed auctor vitae, maximus in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies suscipit tempus. Suspendisse venenati lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies suscipit tempus. Suspendisse venenati",
      period: "January"
    },
    {
      id: 2,
      title: "Event Title 2",
      image: "/testAssets/post.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna quam, elementum sed auctor vitae, maximus in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies suscipit tempus. Suspendisse venenati lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies suscipit tempus. Suspendisse venenati",
      period: "May"
    },
    {
      id: 3,
      title: "Event Title 3",
      image: "/testAssets/post.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna quam, elementum sed auctor vitae, maximus in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies suscipit tempus. Suspendisse venenati lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies suscipit tempus. Suspendisse venenati",
      period: "September"
    }
  ];

  return (
    <div className="events-container">
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img 
                src={event.image} 
                alt={event.title}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-footer">
                <div className="event-period">
                  <span className="period-label">Event Period :</span>
                  <span className="period-value">{event.period}</span>
                </div>
                <button className="details-button">
                  Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;