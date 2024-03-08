import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

interface AuthorName {
   name:string
}
export interface Blog{
   id:string
   title:string;
   content:string;
   createdDate: string;
   author: AuthorName
}

export const useBlogs = () => {
   const [loading,setLoading] = useState(true)

   const [blogs,setBlogs] = useState<Blog[]>([])


   
   useEffect(()=>{
      const fetchBlogs = async ()=>{
         try {
            const blogs= await axios.get(`${BACKEND_URL}/api/v1/blog/bulk/posts`,{withCredentials:true})
            setBlogs(blogs.data)
            setLoading(false)
         } catch (error) {
            setLoading(false)
         }
      }
      fetchBlogs()
   },[])

   return {blogs,loading}
}

export const useBlog = ({id}:{id:string}) => {
   const [loading,setLoading] = useState(true)

   const [blog,setBlog] = useState<Blog>()
   
   useEffect(()=>{
      const fetchBlogs = async ()=>{
         try {
            const blogs= await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{withCredentials:true})
            setBlog(blogs.data)
            setLoading(false)
         } catch (error) {
            setLoading(false)
         }
      }
      fetchBlogs()
   },[])

   return {blog,loading}
}


export const userUserBlog = ()=>{
   const [loading,setLoading] = useState(true)

   const [userBlog,setUserBlog] = useState<Blog[]>([])

   useEffect(()=>{
      const fetchUserBlogs = async()=>{
         try {
            const userBlogs = await axios.get(`${BACKEND_URL}/api/v1/blog/user/blogs`,{withCredentials:true})
            setUserBlog(userBlogs.data.posts)
            setLoading(false)
         } catch (error) {
            setLoading(false)
         }
      }
      fetchUserBlogs()
   },[])

   return {userBlog,loading}
}