import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';

const BlogForm = () => {
  const navigate = useNavigate();
  const { addBlog } = useBlogContext();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [formErrors, setFormErrors] = useState({
    title: '',
    content: ''
  });

  const validate = () => {
    let isValid = true;
    const errors = { title: '', content: '' };
    
    if (!title.trim()) {
      errors.title = 'Title is required';
      isValid = false;
    }
    
    if (!content.trim()) {
      errors.content = 'Content is required';
      isValid = false;
    } else if (content.trim().length < 50) {
      errors.content = 'Content should be at least 50 characters';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      const today = new Date().toISOString().split('T')[0];
      
      addBlog({
        title,
        content,
        date: today
      });
      
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="mb-6">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-4 py-2 rounded-md border ${
            formErrors.title ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
          placeholder="Enter blog title"
        />
        {formErrors.title && (
          <p className="mt-1 text-sm text-red-500">{formErrors.title}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className={`w-full px-4 py-2 rounded-md border ${
            formErrors.content ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
          placeholder="Write your blog content here..."
        />
        {formErrors.content && (
          <p className="mt-1 text-sm text-red-500">{formErrors.content}</p>
        )}
      </div>
      
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md mr-2 hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default BlogForm;