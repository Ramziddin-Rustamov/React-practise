import MealItem from "./MealItem"

export default function MealList({meals}){
    return (
        <div className="row">
            {meals.map((meal)=>(
                <MealItem key={meal.idMeal } { ...meal}  />
            ))}
        </div>
    )
}