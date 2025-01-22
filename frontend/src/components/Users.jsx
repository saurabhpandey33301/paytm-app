import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"



export const UsersComponent = ()=>{
    const [filter,setFilter] = useState("")
    const [users,setUsers] = useState([])
    
    useEffect(()=>{
       axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
       .then(response =>{
           setUsers(response.data.user)
       })
    },[filter])

    return(
       <>
          <div>
            <div className="text-3xl decoration-8 bg-gray-300 ps-2 mb-4 ">Users</div>
            <div className="flex justify-center mt-2">
                <input onChange={(e)=>{
                    setFilter(e.target.value)
                }} className=" rounded-xl p-2  ms-1 me-1 w-full border-2 border-gray-300 focus:border-green-400 focus:outline-none" type="text" placeholder="Search user.." /></div>
          </div>
           <div className="ps-3">
           {users.map(user => <User user={user} />)}
           </div>
       </>
    )
}

function User ({user}) {
    const navigate = useNavigate()
    return (
        <div className="grid  grid-cols-12 mt-8 ">
        < div className="col-span-10 flex ">
               <div className="rounded-full bg-gray-400 pt-1 pb-1 ps-3 pe-3 me-2 ms-2" >{user.firstName[0].toUpperCase() }</div>
              <div className="decoration-8 text-2xl">{user.firstName} {user.lastName}</div>
        </div>
        <div className="col-span-2 ">
            <button onClick={(e)=>{
                navigate("/send?id="+ user._id + "&name="+ user.firstName )
            }} className="rounded-md p-1 text-white bg-black ps-2 pe-2 hover:bg-green-400 hover:text-black " >Send Money</button>
        </div>
    </div>
    )
}