import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bookmark } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold text-blue-600 transition-transform hover:scale-105"
        >
          <Bookmark className="h-6 w-6" />
          <span>BlogSpot</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/add" 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  location.pathname === '/add' ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Add Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;