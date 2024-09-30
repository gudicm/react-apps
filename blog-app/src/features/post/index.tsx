import React from 'react';

import { Blog } from '../../types/services/blogs';

type BlogItemProps = {
  item: Blog;
  children?: React.ReactNode;
};
const Post: React.FC<BlogItemProps> = ({ item: blog, children = null }) => {
  return (
    <div className="blog-post" key={blog.id}>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      {children}
    </div>
  );
};

export default Post;
