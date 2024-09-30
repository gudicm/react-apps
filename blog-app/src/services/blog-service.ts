import blogs from '../data/blogs';
import { Blog } from '../types/services/blogs';

const getAllBlogs = (page: number = blogs.length, skip: number = 0): Array<Blog> => {
  return blogs.slice(skip, page);
};

export { getAllBlogs };
