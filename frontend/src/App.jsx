import React from 'react'
import BlogList from './components/BlogList'
import AddBlog from './components/AddBlog'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <nav className='bg-gray-800 shadow-lg'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <ul className='flex space-x-6 py-4'>
              <li>
                <Link to='/' className='text-white hover:text-gray-300'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/blogs' className='text-white hover:text-gray-300'>
                  All Blogs
                </Link>
              </li>
              <li>
                <Link to='/addblog' className='text-white hover:text-gray-300'>
                  Add Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<BlogList />} />
          <Route path='/addblog' element={<AddBlog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
