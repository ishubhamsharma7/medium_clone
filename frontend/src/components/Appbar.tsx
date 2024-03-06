import { Link } from "react-router-dom"
import Avatar from "./Avatar"


const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-3">
      <Link to={'/blogs'} className="flex justify-center flex-col">
          Medium
      </Link>
      <div>
         <Avatar name="Shubham" size={8}/>
      </div>      
    </div>
  )
}

export default Appbar