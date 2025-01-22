import axios from "axios";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const SendMoney = ()=>{
    const [searchParms] = useSearchParams();
    const id = searchParms.get("id");
    const name = searchParms.get("name");

    const [amount,setAmount] =  useState(0);

    return(
        <div>
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 p-10 rounded-md shadow-lg border-2 border-green-500">
                 <div className="text-3xl decoration-8 text-center font-bold">Send Money</div>
                 <div className="mt-10 mb-5 flex ">
                 <div className="rounded-full bg-green-400 pt-1 pb-1 ps-3 pe-3 me-2 " >{name[0].toUpperCase()}</div>
                 <div className="pt-1">{name}</div> 

                 </div>
                 <div>
                    <div className="mt-2">
                    <label>
                        Amount in (Rs):
                        <br />
                        <input onChange={(e)=>{
                            setAmount(e.target.value)
                        }} type="text" placeholder="100" className="border p-1 pe-20 mt-1 rounded-md" />
                    </label> <br />
                    </div >
                    <div className="flex justify-center mt-4">
                        <button onClick={()=>{
                            axios.post("http://localhost:3000/api/v1/account/transfer",
                                {
                                    to: id,
                                    amount
                                },{
                                    headers :{
                                        Authorization : "Bearer " + localStorage.getItem("token")
                                    }
                                }
                            )
                        }} className=" w-full p-1  text-white rounded-md bg-black  hover:bg-green-400 hover:text-black hover:border-2 hover:border-black">Initate tranfer</button>
                    </div>
                 </div>
            </div>
        </div>
         
        </div>        
    )
}