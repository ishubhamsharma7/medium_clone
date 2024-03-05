import { useState } from "react"
import AuthHeader from "../components/Auth"
import LabelledInput from "../components/LabelledInput"
import Quote from "../components/Quote"
import { SignupType } from "@imshubham_s7/common-medium"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = () => {

    const navigate = useNavigate()
    
    const [userSignupInput,setUserSignupInput] = useState<SignupType>({
        name:"",
        password:"",
        email: ""
    })

    const submitRequestHandler = async () => {


        try {
            await axios.post(`${BACKEND_URL}/api/v1/user/signup`,userSignupInput)
            navigate('/signin')
            
        } catch (error) {
            // aleart user that request has been failed
        }
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <AuthHeader type="signup" > 

                        <div>
                            <LabelledInput label="Name" placeholder="name" onChange={(e)=>setUserSignupInput(c=> ({...c,name:e.target.value}) )}/>             
                            <LabelledInput label="Email" placeholder="email" onChange={(e)=>setUserSignupInput(c=> ({...c,email:e.target.value}) )}/>
                            <LabelledInput label="Password" type={"password"} placeholder="password" onChange={(e)=>setUserSignupInput(c=> ({...c,password:e.target.value}) )}/>

                            <button type="button" 
                                className="text-white w-full mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                onClick={submitRequestHandler}
                                >
                                Signup 
                            </button>
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