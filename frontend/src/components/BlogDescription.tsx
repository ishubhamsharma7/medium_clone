import { Blog } from "../hooks"
import Appbar from "./Appbar"
import Avatar from "./Avatar"


const BlogDescription = ({blog}:{blog:Blog }) => {
  return (
   <div>
      <Appbar/>
      <div className="flex justify-center">
         <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-xl">
            <div className=" col-span-8 ">
               <div className="text-4xl font-extrabold">
                  {blog.title}
               </div>
               <div className="text-slate-400 pt-3">
                  {new Date(blog?.createdDate).toDateString() }
               </div>
               <div className="pt-3" dangerouslySetInnerHTML={{__html: blog.content}}>
                  
               </div>
            </div>
            <div className=" col-span-4 pl-6">
               <div className="text-slate-600 text-lg">
                  Author
               </div>
               <div className="flex w-full pt-3" >
                  <div className="flex justify-center flex-col pr-4">
                     <Avatar name={ blog.author.name[0].toUpperCase()} size={'8'}/>
                  </div>
                  <div>
                     <div className=" font-extrabold text-xl ">
                        { blog.author.name[0].toUpperCase() + blog.author.name.slice(1) }
                     </div>
                     <div className="text-slate-400 pt-3">
                        Random catchphrase of author so that space can be taken up and design's can be made thanks
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>
  )
}

export default BlogDescription