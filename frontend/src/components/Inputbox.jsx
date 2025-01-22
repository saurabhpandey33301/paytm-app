export const Inputbox = ({label,placeholder,onChange})=>{
    return (
        <div className="mt-2">
        <label>
            {label}:
            <br />
            <input onChange={onChange} type="text" placeholder ={placeholder}  className="border p-1 pe-20 rounded-md" />
        </label> <br />
        </div >
    )
}