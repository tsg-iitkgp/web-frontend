import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import PostModal from './PostModal';
import { BASE_URL } from '../constants/api';
import './PostsSection.css';

const PostsSection = () => {
  const { society_slug } = useParams();
  const history = useHistory();
  const location = useLocation();

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    total: 0,
    totalPages: 0
  });
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(async (page = 1, isLoadMore = false) => {
    if (loading) return;
    setLoading(true);

    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString()
      });

      const response = await fetch(`${BASE_URL}/societies/${encodeURIComponent(society_slug)}/posts?${queryParams}`);
      const data = await response.json();

      if (isLoadMore) {
        setPosts(prev => [...prev, ...data.posts]);
      } else {
        setPosts(data.posts);
      }

      setPagination(data.pagination);
      setHasMore(data.pagination.page < data.pagination.totalPages);

    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  }, [loading, pagination.limit, society_slug]);

  useEffect(() => {
    fetchPosts(1, false);
  }, [society_slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop 
        >= document.documentElement.offsetHeight - 1000 &&
        hasMore &&
        !loading
      ) {
        fetchPosts(pagination.page + 1, true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchPosts, hasMore, loading, pagination.page]);

  // --- Modal URL logic starts here ---

  // Open modal if postid is in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const postid = params.get('postid');
    if (postid && posts.length > 0) {
      const post = posts.find(p => p.id === postid);
      if (post) {
        setSelectedPost(post);
        setIsModalOpen(true);
      }
    }
  }, [location.search, posts]);

  // When a post is clicked, update the URL and open modal
  const handlePostClick = (post) => {
    const params = new URLSearchParams(location.search);
    params.set('postid', post.id);
    window.history.replaceState(
      null,
      '',
      `${location.pathname}?${params.toString()}`
    );
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  // When modal closes, remove postid from URL
  const closeModal = () => {
    const params = new URLSearchParams(location.search);
    params.delete('postid');
    window.history.replaceState(
      null,
      '',
      `${location.pathname}?${params.toString()}`
    );
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const imagePosts = posts
    .filter(post => post.image_url)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <div className="posts-container">
      {imagePosts.length === 0 && !loading ? (
        <div
          style={{
            color: '#fbbf24',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '4rem 0',
          }}
        >
          No posts available
        </div>
      ) : (
        <div className="posts-grid">
          {imagePosts.map((post) => (
            <div 
              key={post.id} 
              className="post-card"
              onClick={() => handlePostClick(post)}
            >
              <div className="post-image">
                <img src={post.image_url} alt="" />
              </div>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '2rem 0'
        }}>
          <div className="loading-spinner"></div>
          <span style={{
            color: '#fbbf24',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginTop: '1rem'
          }}>Loading...</span>
        </div>
      )}

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