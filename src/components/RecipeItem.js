import React from "react";
import style from '../App.css';




const RecipeItem = (props) => {
    const {name, image, calories, totalWeight, cautions, dietLabels, healthLabels, url, healthArray} = props;
  return(

    <div className="card-deck col-lg-4 col-md-6 mt-5">
      <div className="card h-100 py-2 text-start">
        <img src={image} className="card-img-top w-100 mx-auto" alt="..." />
        
        <div className="card-body">
          {/* name */}
          <h5 className="card-title">{name}</h5>

          {/* cautions */}
          <p className="card-text font-weight-bold text_red" style={{ margin: "0px 0px 0px 0px" }}>Cautions:</p>         
            <div className="itemPisition">
             {cautions.map((label) => ( 
                 <p 
                  style={{ margin: "0px 0px 0px 5px", color: healthArray.includes(label) ? "red" : "black" }} 
                  className="card-text" 
                 > 
                  {label} 
                 </p> 
               ))} 
            </div>    
          {/* calories */}
          <p className="card-text font-weight-bold" style={{ margin: "15px 0px 0px 0px" }}>{calories.toFixed()} Kkal</p>
          {/* TotalWeight */}
          <p className="card-text font-weight-bold" style={{ margin: "15px 0px 0px 0px" }}>TotalWeight: </p>
          <p className="card-text " style={{ margin: "0px 0px 0px 5px" }}>{totalWeight.toFixed()} gm</p>
          {/* DietLabels */}
          <p className="card-text font-weight-bold " style={{ margin: "15px 0px 0px 0px" }}>DietLabels: </p>
          <div className="itemPisition">   
          {dietLabels.map((label) => ( 
              <p 
                style={{ margin: "0px 0px 0px 5px", marginBottom: 0, color: healthArray.includes(label) ? "green" : "black" }} 
                className="card-text " 
              > 
                {label} 
              </p> 
            ))}
            </div>      
          {/*healthLabels  */}
           <p className="card-text font-weight-bold " style={{ margin: "15px 0px 0px 0px" }}>HealthLabels:</p> 

           <div className="itemPisition">
            {healthLabels.map((label) => ( 
              <p 
               style={{ margin: "0px 0px 0px 5px",  color: healthArray.join(" row").includes(label) ? "lightgreen" : "black" }} 
               className="card-text" 
              > 
                {label} 
              </p> 
            ))}          
            </div>
        </div>

        <div className="card-footer bg-transparent d-flex btn-group ">
        <a href={url} className="btn btn-outline-success btn-md ">Get Recipe</a>
        <a href="https://www.facebook.com/max.brenzey/" className="btn btn-outline-success btn-md ">Page Author</a>
        </div>
      </div>
    </div>
  );
};




export default RecipeItem;