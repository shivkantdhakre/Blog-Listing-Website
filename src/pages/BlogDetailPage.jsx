import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import { formatDate } from '../utils/formatDate';
import { ArrowLeft } from 'lucide-react';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogById } = useBlogContext();
  
  const blog = id ? getBlogById(id) : undefined;
  
  useEffect(() => {
    if (!blog) {
      navigate('/');
    }
  }, [blog, navigate]);
  
  if (!blog) {
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to blogs
      </button>
      
      <article className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <p className="text-sm text-gray-500">Published on {formatDate(blog.date)}</p>
        </header>
        
        <div className="prose prose-blue max-w-none">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;