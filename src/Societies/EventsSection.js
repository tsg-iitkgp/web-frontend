/* filepath: d:\gym-web-frontend\src\testComponents\EventsSection.js */
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/api";
import "./EventsSection.css";

const EventsSection = () => {
  const { society_slug } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [hasMore, setHasMore] = useState(true);

  const fetchEvents = useCallback(
    async (page = 1, isLoadMore = false) => {
      if (loading) return;
      setLoading(true);

      try {
        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: pagination.limit.toString(),
        });

        const response = await fetch(`${BASE_URL}/societies/${encodeURIComponent(society_slug)}/events?${queryParams}`);
        const data = await response.json();

        if (isLoadMore) {
          setEvents((prev) => [...prev, ...data.events]);
        } else {
          setEvents(data.events);
        }

        setPagination(data.pagination);
        setHasMore(data.pagination.page < data.pagination.totalPages);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    },
    [loading, pagination.limit, society_slug]
  );

  useEffect(() => {
    fetchEvents(1, false);
  }, [society_slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000 &&
        hasMore &&
        !loading
      ) {
        fetchEvents(pagination.page + 1, true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchEvents, hasMore, loading, pagination.page]);

  const formatEventPeriod = (eventDate) => {
    const date = new Date(eventDate);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className='events-container'>
      {events.length === 0 && !loading ? (
        <div
          style={{
            color: "#fbbf24",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            margin: "4rem 0",
          }}>
          No events available
        </div>
      ) : (
        <div className='events-list'>
          {events.map((event) => (
            <div key={event.id} className='event-card'>
              <div className='event-image'>
                <img
                  src={
                    event.image_url ||
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50PC90ZXh0Pjwvc3ZnPg=="
                  }
                  alt={event.title}
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50PC90ZXh0Pjwvc3ZnPg==";
                  }}
                />
              </div>
              <div className='event-content'>
                <h3 className='event-title'>{event.title}</h3>
                <p className='event-description'>{event.description}</p>
                <div className='event-footer'>
                  <div className='event-period'>
                    <span className='period-label'>Event Period :</span>
                    <span className='period-value'>{formatEventPeriod(event.event_date)}</span>
                  </div>
                  <button className='details-button'>Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2rem 0",
          }}>
          <div className='loading-spinner'></div>
          <span
            style={{
              color: "#fbbf24",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginTop: "1rem",
            }}>
            Loading...
          </span>
        </div>
      )}
    </div>
  );
};

export default EventsSection;
