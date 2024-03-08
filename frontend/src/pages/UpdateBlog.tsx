import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import Appbar from "../components/Appbar";
import TextEditor from "../components/TextEditor";
import BlogDescriptionSkeleton from "../components/BlogDescriptionSkeleton";


const UpdateBlog = () => {

   const navigate = useNavigate();

   const {id} = useParams();
  
   // console.log("-->",blog)

   const {blog,loading} = useBlog({id:id || ""});
   const [title,setTitle] = useState('');
   const [content, setContent] = useState('');

   if(loading){
      <div>
         <Appbar/>
         <BlogDescriptionSkeleton/>
      </div>
   }

   useEffect(()=>{
      setTitle(blog?.title!)
      setContent(blog?.content!)
   },[blog])


   
   const updateInputChange = async () => {

      // await axios.post(`${BACKEND_URL}/api/v1/blog`,{
      //    title,
      //    content
      // }, {withCredentials:true})
      // navigate('/blogs')
   }
   
  return (
   <>
      <Appbar/>
      <div className="flex justify-center">
         <div className="max-w-screen-lg">
            <div className="my-4">
               <label className="block mb-2 text-sm font-bold text-gray-900">Title</label>
               <input type="text" 
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                     maxLength={100}
                     placeholder="Title"
                     onChange={(e)=>setTitle(e.target.value)}
                     value={title}
               />
            </div>
            <div>
               <label className="block mb-2 text-sm font-bold text-gray-900">Description</label>
               <TextEditor setContent={setContent} content={content!} />
            </div>
            <div className="flex justify-end">
               <button type="button" 
                  className=" text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm py-2.5 text-center me-4 mt-2 w-56"
                  onClick={updateInputChange}
                  >
                     Publish
               </button>
            </div>
         </div>
      </div>
   </>
  )
}


export default UpdateBlog