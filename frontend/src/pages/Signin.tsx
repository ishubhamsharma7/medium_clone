import { SigninType } from "@imshubham_s7/common-medium"
import AuthHeader from "../components/Auth"
import LabelledInput from "../components/LabelledInput"
import Quote from "../components/Quote"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Signin = () => {

    const navigate = useNavigate()

    const [userSigninInput,setUserSigninInput] = useState<SigninType>({
        password:"",
        email: ""
     })

    const submitRequestHandler = async () => {

        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,userSigninInput)
            const jwt = res.data.jwtToken;
            
            localStorage.setItem('token',jwt);
            navigate('/blogs')
            
        } catch (error) {
            // aleart user that request has been failed
        }
    }
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                <AuthHeader type="signin" > 

                    <div>           
                        <LabelledInput label="Email" placeholder="email" onChange={(e)=>setUserSigninInput(c=> ({...c,email:e.target.value}) )}/>
                        <LabelledInput label="Password" type={"password"} placeholder="password" onChange={(e)=>setUserSigninInput(c=> ({...c,password:e.target.value}) )}/>

                        <button type="button" 
                            className="text-white w-full mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            onClick={submitRequestHandler}
                            >
                            SignIn 
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