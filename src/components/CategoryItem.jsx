import { Link } from "react-router-dom";

function CategoryItem(props){
    const {idCategory, strCategory,strCategoryThumb , strCategoryDescription } = props;

    const descriptionLimit = 60;
    const shouldShowReadMore = strCategoryDescription.length > descriptionLimit;


    return (
       <div className="col-12 my-2 col-md-4 ">
        <div className="card" style={{width: "18rem"}} key={idCategory}>
            <img src={strCategoryThumb} className="card-img-top" alt={strCategory} />
            <div className="card-body">
            <h5 className="card-title">
                {strCategory}
            </h5>
            <p className="card-text">
                {shouldShowReadMore
                    ? `${strCategoryDescription.substring(0, descriptionLimit)}...`
                    : strCategoryDescription}
            </p>
            </div>
            <div className="card-actions">
                {/* Link to other pages indide html file */}
                <Link to={`/category/${idCategory}`} className="btn btn-outline-primary py-2 my-1 mx-1">
                    Read 
                </Link>
            </div>
            </div>
       </div>
    )
}
export default CategoryItem;