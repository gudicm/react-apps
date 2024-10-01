import React from 'react';
import { useParams } from 'react-router-dom';

import { getBlogById } from '../../services/blog-service';

type PostContentProps = {
  children?: React.ReactNode;
};
const PostContent: React.FC<PostContentProps> = ({ children = null }) => {
  const { id } = useParams();
  const blog = getBlogById(Number(id));

  return (
    <section className="blog-content" key={blog?.id}>
      <h3>{blog?.title}</h3>
      <p>{blog?.content}</p>
      {children}
    </section>
  );
};

export default PostContent;
