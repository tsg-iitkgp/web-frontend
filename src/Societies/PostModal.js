import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './PostModal.css';

const PostModal = ({ post, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-image">
          <img
            src={post.image}
            alt={post.title}
            onError={(e) => {
              e.target.src =
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
            }}
          />
        </div>
        <div className="modal-info">
          <div className="modal-header-info">
            <img
              src="/testAssets/kodeinLogo.png"
              alt="KodeInKGP Logo"
              className="modal-logo-img"
            />
            <span className="modal-title">KodeInKGP</span>
          </div>
          <hr className="modal-divider" />
          <div className="modal-text">{post.content}</div>
          <div className="modal-date">{new Date(post.date).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;