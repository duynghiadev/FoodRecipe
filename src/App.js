import { useEffect, useState, useRef } from "react";
import Recipe from "./Recipe";
import "./style.css"
function App() {
  const APP_ID = "35e9fd9c";
  const APP_KEY = "d1cd5968bf1deccfbdecd30917305bc3	";



  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");





  async function getRecipe() {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(res => res.json()).then(data => {
      setRecipe(data.hits);
      console.log(data.hits)

    })

  }


  useEffect(() => {
    getRecipe()
  }, [query])


  function searchRecipe(e) {
    setSearch(e.target.value);

  }

  function getSearch(e) {
    e.preventDefault();
    setQuery(search);

  }
  return (
    <div className="wrapper">
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-input" type="text" value={search} onChange={searchRecipe} />
        <button className="search-button" type="submit" >Search</button>
        <br/>
        <br/>
        <br/>


      </form>
      <div className="flexbox-container" >

        {recipe.map((rec, index) => {
          return (
            <Recipe key={index} title={rec.recipe.label} calo={rec.recipe.calories} img={rec.recipe.image}
              in={rec.recipe.ingredients}

            />
          )
        })}
      </div>
    </div>
  );



}

export default App;
