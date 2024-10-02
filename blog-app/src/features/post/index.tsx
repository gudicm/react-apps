import React from 'react';
import { Link } from 'react-router-dom';

import { BlogShort } from '../../types/services/blogs';

type BlogItemProps = {
  item?: BlogShort | null;
  children?: React.ReactNode;
};
const Post: React.FC<BlogItemProps> = ({ 
  item: blog = null, children = null }) => {
  return blog === null ? null : (
    <section className="blog-post" key={blog?.id}>
      <h3>
        <Link to={`/posts/${blog?.id}`}>{blog?.title}</Link>
      </h3>
      <p>{blog?.description}</p>
      {children}
    </section>
  );
};

export default Post;
