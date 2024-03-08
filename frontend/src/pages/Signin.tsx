import { SigninType } from "@imshubham_s7/common-medium"
import AuthHeader from "../components/Auth"
import LabelledInput from "../components/LabelledInput"
import Quote from "../components/Quote"
import { useState } from "react"
import axios,{AxiosError} from "axios"
import { BACKEND_URL, ERROR_MESSAGE } from "../config"
import { Link, useNavigate } from "react-router-dom"

export const Signin = () => {

    const navigate = useNavigate()

    const [userSigninInput,setUserSigninInput] = useState<SigninType>({
        password:"",
        email: ""
    })
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState("")

    const submitRequestHandler = async () => {
        setIsLoading(true)
        try {

            await axios.post(`${BACKEND_URL}/api/v1/user/signin`,userSigninInput,{withCredentials:true})
            setIsLoading(false)
            navigate('/blog')
            
        } catch (error) {
            setIsLoading(false)
            if(error instanceof AxiosError){
                let errorMessage = error.response?.data.error
                if(errorMessage  == ERROR_MESSAGE.INVALID_INPUT){
                    setError("Please enter correct details")
                }else if(errorMessage == ERROR_MESSAGE.INCORRECT_PASSWORD){
                    setError("Enter correct password")
                }else if( errorMessage = ERROR_MESSAGE.USER_NOT_EXISTS){
                    setError("User doesn't exists")
                }
            }
            
        }
    }
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                <AuthHeader type="signin" > 

                    <div>           
                        <LabelledInput 
                            label="Email" 
                            placeholder="email" 
                            onChange={(e)=>{
                                setUserSigninInput(c=> ({...c,email:e.target.value}))
                                setError("")
                            }}
                        />
                        
                        <LabelledInput 
                            label="Password" 
                            type={"password"} 
                            placeholder="password" 
                            onChange={(e)=>{
                                setUserSigninInput(c=> ({...c,password:e.target.value}))
                                setError("")
                            }}
                        />

                        <div className="flex justify-end pt-2">
                            <Link className="text-gray-400 text-sm text-center underline cursor-pointer" to={"/reset-password"}>
                                    Forgot Password?
                            </Link>
                        </div>

                        <button type="button" 
                            className="text-white w-full mt-5 bg-gray-800 enabled:hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:opacity-25"
                            onClick={submitRequestHandler}
                            disabled={isLoading}
                            >
                           Sign In
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
                </AuthHeader>
                </div>

                <div className="hidden lg:block">
                    <Quote/>
                </div>
            </div>
        </div>
    )
}