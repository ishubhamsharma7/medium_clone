import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import BlogDescription from "../components/BlogDescription"

export const Blog = () => {

    const {id} = useParams()

    const {blog,loading} = useBlog({id:id || ""})

    if(loading)return <div>Loading</div>
    return (
        <div>
            <BlogDescription blog={blog}/>
        </div>
    )
}