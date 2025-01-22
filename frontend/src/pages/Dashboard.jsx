import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"

import { UsersComponent } from "../components/Users"


export const Dashboard = ()=>{
    return(
       <div>
            <Appbar/>
            <hr />
            <Balance/>
            <UsersComponent />
        </div>
    )     
         
}