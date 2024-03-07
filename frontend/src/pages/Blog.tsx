import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import BlogDescription from "../components/BlogDescription"
import Appbar from "../components/Appbar"
import BlogDescriptionSkeleton from "../components/BlogDescriptionSkeleton"

export const Blog = () => {

    const {id} = useParams()

    const {blog,loading} = useBlog({id:id || ""})

    if(loading)return( 
        <div>
            <Appbar/>
            <BlogDescriptionSkeleton/>
        </div>
    )
    return (
        <div>
            <BlogDescription blog={blog!}/>
        </div>
    )
}