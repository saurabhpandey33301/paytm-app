
import { useState } from "react";
import { Inputbox } from "../components/Inputbox";
import { Loginbtn } from "../components/Loginbtn";
import { Footer } from "../components/footer";
import axios from "axios"
export const SignIn = ()=>{
    const [Email,SetEmail] = useState("")
    const [Pass,SetPass] = useState("")
    return(
        <div>
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 p-10 rounded-md shadow-lg border-2 border-green-500">
                 <div className="text-3xl decoration-8 text-center font-bold">SignIn</div>
                 <div className="mt-1 mb-5 text-center">Enter your credentials here !</div>
                 <div>
                    <Inputbox onChange={e=>{
                        SetEmail(e.target.value)
                    }} placeholder={"spandey3301@gmail.com"} label={"Email"}  />
                    <Inputbox onChange={e=>{
                        SetPass(e.target.value)
                    }} placeholder={"123456"} label={"Pass"} />
                    <Loginbtn  name={"SignIn"} />
                 </div>
                 <Footer mssg={"Don't have an account?"} liinked={"Register here"} to={"/signup"}/>
            </div>
        </div>
         
        </div>        
    )
}