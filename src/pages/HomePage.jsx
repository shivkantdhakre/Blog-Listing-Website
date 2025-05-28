import React from 'react';
import { useBlogContext } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const HomePage = () => {
  const { blogs } = useBlogContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Latest Posts</h1>
        <Link 
          to="/add" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          New Post
        </Link>
      </div>
      
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No blogs found. Create your first blog post!</p>
          <Link 
            to="/add" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;