import blogs from '../data/blogs';
import { BlogShort, Blog } from '../types/services/blogs';

const getAllBlogs = (page: number = blogs.length, skip: number = 0): Array<BlogShort> => {
  return blogs.slice(skip, page);
};

const getBlogById = (id: number): Blog | undefined => {
  return blogs.find((blog) => blog.id === id);
};

export { getAllBlogs, getBlogById };
