import { useParams , useHistory } from "react-router-dom";
import { detailsById } from "../api";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";


export default function Recipe(){
    const { productId } = useParams(); 
    const [productRecipe , setproductRecipe ] = useState([]);

    useEffect(()=>{
        detailsById(productId).then(data=>{
            setproductRecipe(data.meals[0]);
        });

    },[])

   
    const goBack = () => {
        console.log("hi from arrow");
    }

    return (
        <>
            <button className="btn btn-primary my-3" onClick={goBack}>
                Go back 
            </button>
            {!productRecipe.idMeal
             ? <Loader /> :
             (
              <div className="row">
                <div className="col-12">
                <div class="card" >
                <img src={productRecipe.strMealThumb} class="card-img-top img-fluid img-thumbnail" alt={productRecipe.strMeal} />
               
                <div class="card-body">
                <div className="card-title text-primary py-3 my-4">
                    {productRecipe.strMeal}
                </div>
                <h5>Category : { productRecipe.strCategory}</h5>
                   <p class="card-text">
                    {/* {productRecipe.strInstructions.length > 200  ? productRecipe.strInstructions.substring(0 , 200) + "  Read more.." : productRecipe.strInstructions } */}
                    {productRecipe.strInstructions}
                    </p>
                </div>
              </div>
                <div className=" mx-auto py-1 my-2 card">
                    <div className="card-body">
                        <div className="card-titl">
                            Sorce for YouTube 
                        </div>
                    </div>
                    {productRecipe.strYoutube ? (
                        <iframe height="300"
                            title="YouTube Video"
                            src={`https://www.youtube.com/embed/${productRecipe.strYoutube.slice(-11)}`}
                            allowFullScreen
                        />
                    ) : null}
                </div>

                </div>
              </div>
             )
            }
        </>
    )
}