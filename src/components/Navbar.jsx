import { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  let links =[
    {name:"Movies",link:"/"},
    {name:"Clothes",link:"/"},
    {name:"Accesories",link:"/"},
    {name:"Others",link:"/"},
    {name:"Walpapaers",link:"/"}
  ]
  let [open, setOpen] = useState(false)

  return(
    <div  className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-slate-300 py-4  md:px10 px-7">
        <div className="cursor-pointer flex items-center">
          <span className="shadow-md rounded-lg mr-1 pt-2">
          <img src="https://enez76gwp29.exactdn.com/wp-content/uploads/2020/04/Ghibli_logo.png?strip=all&amp;lossy=1&amp;ssl=1" alt="logo" />
          </span>
        </div>
        <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <ul className="md:flex md: items-center md:pb-0 pb-12 absolute md:static bg-slate-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
            transition-all duration-500 ease-in">
          {
            links.map((nlink)=>(
              <li key={nlink.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a href={nlink.link} className="text-gray-800 hover:text-gray-400 duration-500" >{nlink.name}</a>
              </li>
            ))
          }
          {/* <Button>
            Shop
          </Button> */}
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </Button>       
        </ul>
      </div>
    </div>
  )
}

export default Navbar