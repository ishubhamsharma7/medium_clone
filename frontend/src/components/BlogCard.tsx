import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps{
   title:string;
   content:string;
   createdDate:string;
   authorName:string;
   id:string
}

const BlogCard = ({title,content,createdDate,authorName,id}:BlogCardProps) => {

   const slicedBlogContent = content.slice(0,200)
  return (
   <Link to={`/blog/${id}`}>
    <div className="border-b py-4 border-slate-200 w-screen max-w-screen-lg cursor-pointer">
      <div className="flex">
         <div className="flex flex-col justify-center">
            <Avatar name={authorName} size={'8'}/>
         </div>
         <div className=" font-light px-2 flex flex-col justify-center">
            {authorName} .
         </div> 
         <div className="text-slate-500 font-thin text-sm flex flex-col justify-center">
            {new Date(createdDate).toDateString() }
         </div>
      </div>
      <div className="font-semibold text-2xl pt-2">
         {title}
      </div>
      <div className=" font-normal pt-1 text-sm" dangerouslySetInnerHTML={{__html: slicedBlogContent + '...'}}>
        
      </div>
      <div className="text-slate-500 text-xs font-extralight pt-2">
         { `${Math.ceil(content.length/100)} minutes read` }
      </div>
      
    </div>
   </Link>
  )
}

export default BlogCard