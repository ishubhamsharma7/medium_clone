import { Link, useNavigate } from "react-router-dom"
import LabelledInput from "../components/LabelledInput"
import { useState } from "react"
import axios, { AxiosError } from "axios"
import { BACKEND_URL } from "../config"
import { ResetPasswordType } from "@imshubham_s7/common-medium"


const ResetPassword = () => {

   const [password,setPassword] = useState<ResetPasswordType>({
      email:"",
      newPassword:"",
      confirmPassword:""
   });
   const [error,setError] = useState("");
   const [isLoading,setIsLoading] = useState(false);

   const navigate = useNavigate()

   const resetPasswordHandler = async() => {
      setIsLoading(true)
      
      if(password.newPassword !== password.confirmPassword){ 
         setError("Password must be same")
         setIsLoading(false)
         return
      }

      try {
         console.log("-->",password)
         await axios.post(`${BACKEND_URL}/api/v1/user/reset-password`,password)
         setIsLoading(false)
         navigate('/signin')
         
      } catch (error) {
         if(error instanceof AxiosError){
            let errorMessage = error.response?.data.message
            setError(errorMessage)
            setIsLoading(false)
        }
      }
      
   }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
         <div>
            <div className=" px-16">
               <div className=" font-bold text-3xl pb-1">
                    Forgot Password
               </div>
               <div className=" text-gray-400 text-sm text-center">
                  Have and account? <Link className="underline pl-1" to= '/signin' > Signin</Link>
               </div>
            </div>
            <div className="">
               
               <div>           
                  <LabelledInput 
                     label="Email" 
                     placeholder="email" 
                     onChange={(e)=>{
                        setPassword(c=> ({...c,email:e.target.value}))
                        setError("")
                     }}
                  />

                  <LabelledInput
                     label="New Password" 
                     type={"password"} 
                     placeholder="new password" 
                     onChange={(e)=>{
                        setPassword(c=>({...c,newPassword:e.target.value}))
                        setError("")
                     }}
                  />
                        
                  <LabelledInput 
                     label="Confirm Password" 
                     type={"password"} 
                     placeholder="confirm password" 
                     onChange={(e)=>{
                        setPassword(c=>({...c,confirmPassword:e.target.value}))
                        setError("")
                     }}
                  />

                  <button type="button" 
                     className="text-white w-full mt-5 bg-gray-800 enabled:hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:opacity-25"
                     onClick={resetPasswordHandler}
                     disabled={isLoading}
                  >
                     Reset Password
                  </button>
               </div>
               <div className="flex justify-center mt-3 h-10">
                  {
                     error && 
                     <div className=" text-red-500 ">
                        {error}
                     </div>
                  }
               </div>

            </div>
         </div>
      </div>
    </div>
  )
}

export default ResetPassword