import { useParams  } from "react-router-dom";
import { getFilterCategory } from "../api";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import MealList from "../components/MealList";

export default function Movie(){
  const [meals, setMales] = useState([]);
  const { name } = useParams();
  useEffect(()=>{
      getFilterCategory(name)
      .then(data=>{ setMales(data.meals)});
  },[name]);


    return(
        <div>
          {!meals.length ? <Loader/> : <MealList meals={meals}/>}
        </div>
    )
};