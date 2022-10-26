import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import{ getProducts } from "../api/products"

const Appcontainer =() =>{

  const[productos, setProductos] = useState([])
  const [loading, setLoading]= useState(true) 

  useEffect(()=>{
    getProducts("listaDeProdcutos")
    .then((items))
  })
  return(
    <div className="prodcuts">
      {loading ? <Loader /> : null}

    </div>
  )
}

export default Appcontainer