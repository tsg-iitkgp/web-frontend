import React, { useState } from 'react';
import PostModal from './PostModal';
import './PostsSection.css';

const PostsSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posts = [
    {
      id: 1,
      title: "KodeInKGP",
      image: "/testAssets/post.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna quam, elementum sed auctor vitae, maximus in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies suscipit tempus. Suspendisse venenatis lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies suscipit tempus. Suspendisse venenatis lectus.",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "KodeInKGP",
      image: "/testAssets/post.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna quam, elementum sed auctor vitae, maximus in lectus.",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "KodeInKGP",
      image: "/testAssets/post.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna quam, elementum sed auctor vitae, maximus in lectus.",
      date: "2024-01-05"
    },
    {
      id: 4,
      title: "KodeInKGP",
      image: "/testAssets/post.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna quam, elementum sed auctor vitae, maximus in lectus.",
      date: "2023-12-28"
    },
    {
      id: 5,
      title: "KodeInKGP",
      image: "/testAssets/post.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna quam, elementum sed auctor vitae, maximus in lectus.",
      date: "2023-12-20"
    }
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="posts-container">
      <div className="posts-grid">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="post-card"
            onClick={() => handlePostClick(post)}
          >
            <div className="post-image">
              <img 
                src={post.image} 
                alt={post.title}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedPost && (
        <PostModal 
          post={selectedPost} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default PostsSection;