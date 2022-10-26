const Button = (prop) =>{
    return(
        <button className="bg-indigo-600 text-white py-2px-6 
        rounded md:ml-8 hover:bg-indigo-400 duration-500"> 
            {prop.children}
        </button>
    )
}

export default Button