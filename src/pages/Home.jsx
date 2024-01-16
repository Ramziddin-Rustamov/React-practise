import { useEffect, useState } from "react"
import { getAllCategories } from "../api"
import Loader from "../components/Loader/Loader";
import CategoryList from "../components/CategoryList";


export default function Home(){

  const [catalog , setCatalog] = useState([]);

  useEffect(()=>{
    getAllCategories().then((data)=>{
      setCatalog(data.categories);
      //  console.log(data);
    })
  },[]);


    return(
        <div>
          {
            !catalog.length ? 
            (<Loader />)   :
            (
              <CategoryList catalog={catalog} /> 
            )
            
          }
        </div>
    )
};