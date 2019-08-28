import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from "./recipe";
import { async } from 'q';

const App = (props)=> {

  const APP_ID = "e3ea06da";
  const APP_KEY = "53eeddda5479700759825359fc8e524d	";
    // Propreties:
    // 1. the recipes data:
  const [recipe, setRecipes] = useState([]);
  const [serchValue, setSearchValue] = useState('eg:chiken');
  const [query, setQuery] = useState('chiken');

  // get the data from the API :
  const getReciepies = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    
    setRecipes(data.hits);
  }

  // clear input value 
  const clearInput =() => {
    setSearchValue("");
  }

  // fille the input
  const FillInput =()=> {
    setSearchValue("eg:chiken");
  }

  // get data input when typing :
  const getValue = e => {
    setSearchValue(e.target.value)
  }

  // set the puted query to the API request :
  const getSearch = e => {
    e.preventDefault();
    setQuery(serchValue);
    clearInput();
  }

  // run when the page first load and the query changing :
  useEffect(()=> {
    getReciepies();
  },[query]);


  return (
    <div>
      <header className="Search-bar-container">
        <form className="searchBar" onSubmit={getSearch}>
          <input type="text" className="searchText" value={serchValue} onChange={getValue} onFocus={clearInput} onBlur={FillInput}></input>
          <input type="submit" value="O" className="searchSubmit"></input>
        </form>
      </header>
      <main className="recipes">
          {recipe.map(recipe=> (
            <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                imageLink={recipe.recipe.image}
                ingridients={recipe.recipe.ingredients}
                />
          ))}
      </main>
    </div>
  );
}

export default App;
