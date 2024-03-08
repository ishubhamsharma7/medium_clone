import { ReactElement } from "react";
import { Link } from "react-router-dom"

interface TypeProps {
   type: "signup" | "signin";
   children: ReactElement | React.ReactNode
}


const AuthHeader = ({type,children}:TypeProps) => {

  return (
    <div className='h-screen flex justify-center flex-col'>
      <div className="flex justify-center">
         <div>
            <div className=" px-16">
               <div className=" font-bold text-3xl pb-1">
                     {type== "signup" ? 'Create an account' : 'Login to your account'}
               </div>
               <div className=" text-gray-400 text-sm text-center">
                  {type == 'signup' ? `Already have and account?` : `Don't have an account?`} <Link className="underline pl-1" to={type == 'signup' ? '/signin' : '/signup'}>{type == 'signup' ? 'Signin' : 'Signup'}</Link>
               </div>
            </div>
            <div className="">
               {children}
            </div>
         </div>
      </div>
      
      
    </div>
  )
}





export default AuthHeader