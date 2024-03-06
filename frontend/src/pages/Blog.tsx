import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import BlogDescription from "../components/BlogDescription"
import Appbar from "../components/Appbar"
import Spinner from "../components/Spinner"

export const Blog = () => {

    const {id} = useParams()

    const {blog,loading} = useBlog({id:id || ""})

    if(loading)return( 
        <div>
            <Appbar/>
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner/>
                </div>
            </div>
        </div>
    )
    return (
        <div>
            <BlogDescription blog={blog!}/>
        </div>
    )
}