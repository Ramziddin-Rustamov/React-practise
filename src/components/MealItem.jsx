import { Link } from "react-router-dom";

export default function MealItem({ strMeal, strMealThumb, idMeal }) {
    return (
        <div className="col-12 my-2 col-md-4 ">
            <div className="card" style={{ width: "18rem" }} key={strMeal}>
                <img src={strMealThumb} className="card-img-top" alt={strMeal} />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">Additional meal information here...</p>
                </div>
                <div className="card-actions">
                    <Link to={`/product/recipe/${idMeal}`} className="btn btn-outline-primary py-2 my-1 mx-1">
                        Read Recipe
                    </Link>
                </div>
            </div>
        </div>
    );
}
