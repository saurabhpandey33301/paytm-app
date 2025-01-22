export const Loginbtn = ({name,onClick})=>{
     return(
        <div className="flex justify-center mt-4">
                <button onClick={onClick}  className=" w-full p-1  text-white rounded-md bg-black  hover:bg-green-400 hover:text-black hover:border-2 hover:border-black">{name}</button>
        </div>
     )
}