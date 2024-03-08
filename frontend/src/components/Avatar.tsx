import { Dropdown } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

interface AvatarProps {
  name:string;
  size?:string
}

const Avatar = ({name}:AvatarProps) => {

  
  return (

  <div className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
  </div>


  )
}


export const LogoutAvatar = ({name}:AvatarProps) => {

  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("token")
    navigate('/signin')
  }

  return (
    <Dropdown
      label={
        <div className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>}

      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-medium font-semibold">{name}</span>
        {/* <span className="block truncate text-sm font-medium">name@flowbite.com</span> */}
      </Dropdown.Header>
      <Link to={'/user/blogs'}>
        <Dropdown.Item> My Blogs</Dropdown.Item>
      </Link>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default Avatar