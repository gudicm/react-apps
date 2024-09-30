import React from 'react';

import Post from '../../features/Post';
import { getAllBlogs } from '../../services/blog-service';
import { Blog } from '../../types/services/blogs';
import { getMaxValue } from '../../utils/collections';

const HomePage: React.FC = () => {
  const blogs: Array<Blog> = getAllBlogs();
  const maxScore = getMaxValue(blogs, 'score');
  const topBlogs: Array<Blog> = blogs.filter((blog) => blog.score === maxScore);

  return (
    <>
      <div className="container">
        <section className="latest-post">
          <h2>Latest Post</h2>
          <article>
            <h3>Title of the Latest Post</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nibh eget mi sodales fermentum at et
              sem.
            </p>
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
    </>
  );
};

export default HomePage;
