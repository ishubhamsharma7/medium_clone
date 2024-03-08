import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import  Blogs  from './pages/Blogs'
import Publish from './pages/Publish'
import ResetPassword from './pages/ResetPassword'
import MyBlog from './pages/MyBlog'
import UpdateBlog from './pages/UpdateBlog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate to="/signin"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/user/blogs' element={<MyBlog/>}/>
          <Route path="/publish" element={<Publish />} />
          <Route path="/blog/update/:id" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
