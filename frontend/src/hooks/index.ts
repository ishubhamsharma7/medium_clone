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
            const blogs= await axios.get(`${BACKEND_URL}/api/v1/blog/bulk/posts`,{
               headers:{
                  "Authorization" : `Bearer ${localStorage.getItem("token")}`
               }
            })
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
            const blogs= await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
               headers:{
                  "Authorization" : `Bearer ${localStorage.getItem("token")}`
               }
            })
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