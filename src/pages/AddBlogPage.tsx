import React from 'react';
import BlogForm from '../components/BlogForm';

const AddBlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Blog</h1>
      <BlogForm />
    </div>
  );
};

export default AddBlogPage;