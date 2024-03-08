import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton"
import { userUserBlog } from "../hooks"


const MyBlog = () => {

  const {userBlog,loading} = userUserBlog()

  console.log("--",userBlog)

  if(loading)return( 
    <div>
      <Appbar/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
    </div>
  )
  
  return (
    <div>
      <Appbar/>
      <div className="flex justify-center mt-5">
        <div className=" ">
          {
            userBlog.map((blog)=>(
              <div key={blog.id}>
                <BlogCard key={blog.id} 
                  id={blog.id} 
                  authorName={blog.author.name[0].toUpperCase() + blog.author.name.slice(1)} 
                  createdDate={new Date(blog?.createdDate).toDateString() } 
                  title={blog.title} content={blog.content} 
                  update={true}
                />
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}


export default MyBlog