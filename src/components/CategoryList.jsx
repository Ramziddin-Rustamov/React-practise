import CategoryItem from "./CategoryItem";

function CategoryList({catalog = []}){
    return (
        <div className="row">
            {catalog.map((el)=>(
                <CategoryItem key={el.idCategory}  {...el} />
            ))}
        </div>
    )
}
export default CategoryList;