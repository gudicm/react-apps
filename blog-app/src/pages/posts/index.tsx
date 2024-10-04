import React, { useEffect, useState } from 'react';

import ErrorComponent from '../../components/Error';
import ErrorBoundary from '../../features/ErrorBoundary';
import Post from '../../features/Post';
import { getAllBlogs } from '../../services/blog-service';
import { BlogShort } from '../../types/services/blogs';

type PostProps = {
  children?: React.ReactNode;
};

const PostsPage: React.FC<PostProps> = ({ children = null }) => {
  const [blogs, setBlogs] = useState<Array<BlogShort>>([]);
  const [error, setError] = useState<Error | null>(null); // Add error state
  
  useEffect(() => {
    // Error handling inside useEffect
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs() as Array<BlogShort>;
        setBlogs(blogs);
      } catch (error) {
        console.log('Error fetching blogs:', error);
        setError(error as Error);
        throw error;
      }
    };
    fetchBlogs();
    }, []);
  
  if (error) {
    return <ErrorComponent error={error} />;
  }
  
  return blogs.length === 0 ? null : (
    <section className="blog-list">
      <h2>All Blog Posts</h2>

      {blogs.map((blog) => (
        <Post key={blog.id} item={blog} />
      ))}
      {children}
    </section>
  );
};

const PostPageWithErrorBoundary =() => {
  // Wrapping HomePage in ErrorBoundary
  return (
    <ErrorBoundary>
      <PostsPage />
    </ErrorBoundary>
  );
}

export default PostPageWithErrorBoundary;
