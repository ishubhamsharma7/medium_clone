import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"


const Blogs = () => {

  const {blogs,loading} = useBlogs()

  if(loading)return <div>Loading</div>
  
  return (
    <div>
      <Appbar/>
      <div className="flex justify-center mt-5">
        <div className=" ">
          {
            blogs.map((blog)=>(
              <div key={blog.id}>
                <BlogCard key={blog.id} id={blog.id} authorName={blog.author.name[0].toUpperCase() + blog.author.name.slice(1)} createdDate={new Date(blog?.createdDate).toDateString() } title={blog.title} content={blog.content} />
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs