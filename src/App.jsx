import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AddBlogPage from './pages/AddBlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddBlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BlogProvider>
    </Router>
  );
}

export default App;