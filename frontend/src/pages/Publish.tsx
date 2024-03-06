import { useState } from "react";
import Appbar from "../components/Appbar"
import TextEditor from "../components/TextEditor"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


const Publish = () => {
   const navigate = useNavigate()
   
   const [title,setTitle] = useState('')
   const [content, setContent] = useState(``);

   const editorInputChange = async () => {

      await axios.post(`${BACKEND_URL}/api/v1/blog`,{
         title,
         content
      }, {
         headers:{
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
         }
      })
      navigate('/blogs')
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
               />
            </div>
            <div>
               <label className="block mb-2 text-sm font-bold text-gray-900">Description</label>
               <TextEditor setContent={setContent} content={content} />
            </div>
            <div className="flex justify-end">
               <button type="button" 
                  className=" text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm py-2.5 text-center me-4 mt-2 w-56"
                  onClick={editorInputChange}
                  >
                     Publish
               </button>
            </div>
         </div>
      </div>
   </>
  )
}

export default Publish