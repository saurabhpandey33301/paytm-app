import { Link, Navigate, useNavigate } from "react-router-dom";
import { Inputbox } from "../components/Inputbox";
import { Loginbtn } from "../components/Loginbtn";
import { Footer } from "../components/footer";
import { useState } from "react";
import axios from "axios";

export const SignUp = ()=>{
    const [firstName,SetFirstName] = useState("")
    const [lastName,SetLastName] = useState("")
    const [email,SetEmail] = useState("")
    const [pass,SetPass] = useState("")
    const navigate = useNavigate();

    return(
        <div>
          
        <div className="flex items-center justify-center h-screen">
        {/* email is {pass} */}
            <div className="bg-gray-200 p-10 rounded-md shadow-lg border-2 border-green-500">
                 <div className="text-3xl decoration-8 text-center font-bold">SignUp</div>
                 <div className="mt-1 mb-5 text-center">Regester here !</div>
                 <div>
                    <Inputbox onChange={e=>{
                         SetFirstName(e.target.value)
                    }} placeholder={"saurabh"} label={"First Name"} />
                    <Inputbox onChange={e=>{
                        SetLastName(e.target.value)
                    }} placeholder={"Pandey"} label={"Last Name"} />
                    <Inputbox onChange={e=>{
                        SetEmail(e.target.value)
                    }} placeholder={"spandey3301@gmail.com"} label={"Email"} />
                    <Inputbox  onChange={e=>{
                        SetPass(e.target.value)
                    }} placeholder={"123456"} label={"Pass"} />
                    <Loginbtn onClick={ async()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username : email,
                            firstName : firstName,
                            lastName : lastName,
                            password : pass,
                        });
                        localStorage.setItem("token", response.data.token)
                        if(response){
                            navigate("/dashboard")
                        }
                    }} name={"SignUp"}/>
                 </div>
                 <Footer mssg={"Already have an account?"} liinked={"Login here"} to={"/signin"} />
            </div>
        </div>
         
        </div>        
    )
}