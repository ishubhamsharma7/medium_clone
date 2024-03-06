import { Link } from "react-router-dom"
import {LogoutAvatar} from "./Avatar"


const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-3">
      <Link to={'/blogs'} className="flex justify-center flex-col">
          Medium
      </Link>

      <div className="flex">
          <Link to={'/publish'} className="flex flex-col justify-center" >
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-4 py-1.5 text-center me-2  mr-4 ">New</button>
          </Link>
          <div className="flex flex-col justify-center">
            <LogoutAvatar name="Shubham" size={'8'}/>
          </div>
      </div>      
    </div>
  )
}

export default Appbar