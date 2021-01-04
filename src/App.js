import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./components/them.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Filter from "./components/FilterComp";
// import Theme from "./components/ThemeComp";


function App() {
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [healthArray, setHealthArray] = useState([]);
  const [theme, setTheme] = useState(false);



  const APP_ID = "f02fd65d";
  const APP_KEY = "ebcf666cd63ce1b44e5f56b6a5e2495f";

  const getRecipes = async () => {
    setLoading(true);
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(res);
    setRecipes(res.data.hits);
    setLoading(false);
  };

  const addFilter = (filter) => {
    setHealthArray([...healthArray, filter]);
  }

  useEffect(() => {
    // getRecipes();
  }, []);

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  
  return (

    <div className={theme ? "App darkMode" : "App"}>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <Filter
        addFilter={addFilter}  
      />

      {/* theme */}
      <div className="nav">
        <label className="switch">
        <input 
        type="checkbox" 
        onChange={() => setTheme(!theme)}
        />
        <span className="slider round"></span>
        </label>
      </div>


      {/* filter position */}
      <div className="filterItemPosition">
      {healthArray.map(item => {
        return <div ><p className="HealthLabelsDiv">{item}</p></div>       
      })}
      </div>

      <div className="container">
        <Recipes recipes={recipes} healthArray={healthArray} />
        
        <div className="spin">
          {isLoading ? <ReactBootStrap.Spinner animation="border" /> : <div />}
        </div>
      </div>
    </div>
    );
  }
  
  export default App;
  
  