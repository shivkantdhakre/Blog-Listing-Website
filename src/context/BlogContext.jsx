import React, { createContext, useState, useContext } from 'react';
import { sampleBlogs } from '../data/sampleBlogs';

const BlogContext = createContext();

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(sampleBlogs);

  const addBlog = (blog) => {
    const newBlog = {
      id: Date.now().toString(),
      title: blog.title,
      content: blog.content,
      date: blog.date,
      summary: blog.content.substring(0, 150) + (blog.content.length > 150 ? '...' : '')
    };

    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
  };

  const getBlogById = (id) => {
    return blogs.find((blog) => blog.id === id);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, getBlogById }}>
      {children}
    </BlogContext.Provider>
  );
};