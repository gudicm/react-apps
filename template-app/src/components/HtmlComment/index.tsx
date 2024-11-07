import React from 'react';

interface HtmlCommentProps {
  comment: string;
}

const HtmlComment: React.FC<HtmlCommentProps> = ({ comment }) => {
  return (
    <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: '<!-- ' + comment.toUpperCase() + ' -->' }} />
  );
};

export default HtmlComment;
