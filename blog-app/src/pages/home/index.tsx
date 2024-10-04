import React, { useState, useEffect } from 'react';

import Circular from '../../components/Circular';
import ErrorComponent from '../../components/Error';
import ErrorBoundary from '../../features/ErrorBoundary';
import Post from '../../features/Post';
import { getAllBlogs } from '../../services/blog-service';
import { BlogShort } from '../../types/services/blogs';
import { getMaxValue } from '../../utils/collections';


const HomePage: React.FC = () => {
  const [blogs, setBlogs] = useState<Array<BlogShort>>([]);
  const [latestBlog, setLatestBlog] = useState<BlogShort | null>(null);
  const [maxScore, setMaxScore] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null); // Add error state

  const topBlogs: Array<BlogShort> = blogs.filter((blog) => blog.score === maxScore);

  useEffect(() => {
    // Error handling inside useEffect
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs() as Array<BlogShort>;
        setBlogs(blogs);
        const maxScore = getMaxValue(blogs, 'score');
        setMaxScore(maxScore);
        setLatestBlog(blogs[blogs.length - 1]);
        
      } catch (error) {
        console.log('Error fetching blogs:', error);
        setError(error as Error);
        throw error;
      } finally {
        setLoading(false); 
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return loading ? (
    <Circular size={50} color="black" strokeWidth={8}>
      <h2>loading ...</h2>
    </Circular>
  ) : (
    <div className="container">
      <section className="latest-post">
        <h2>Latest Post</h2>
        <article>
            <Post 
              key={latestBlog?.id} 
              item={latestBlog} />
        </article>
      </section>

      <section className="popular-posts">
        <h2>Popular Posts</h2>
        {topBlogs?.map((blog) => <Post key={blog.id} item={blog} />)}
      </section>

      <section className="blog-list">
        <h2>All Blog Posts</h2>

        {blogs.map((blog) => (
          <Post key={blog.id} item={blog} />
        ))}
      </section>
    </div>
  );
};

const HomePageWithErrorBoundary =() => {
  // Wrapping HomePage in ErrorBoundary
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

export default HomePageWithErrorBoundary;
