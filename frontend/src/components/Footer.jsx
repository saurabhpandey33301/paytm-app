import { Link } from "react-router-dom";

export const Footer = ({mssg,liinked , to})=>{
    return(
        <div className="mt-3 ">
                    
        {mssg} {" "}
        <Link to={to} className="underline text-blue-600 hover:text-blue-800">
            {liinked}
        </Link>
        
     </div>
    )
}