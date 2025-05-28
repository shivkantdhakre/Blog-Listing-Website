import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import { ChevronRight } from 'lucide-react';

const BlogCard = ({ blog }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
            <Link to={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </h2>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {formatDate(blog.date)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {blog.summary}
        </p>
        
        <Link 
          to={`/blog/${blog.id}`}
          className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
        >
          Read more <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;