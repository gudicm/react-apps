import React from 'react';

import Post from '../../features/post';
import { getAllBlogs } from '../../services/blog-service';

type PostProps = {
  children?: React.ReactNode;
};

const PostPage: React.FC<PostProps> = ({ children = null }) => {
  const blogs = getAllBlogs(5);

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

export default PostPage;
