import React, {useState, useEffect} from 'react';
import './App.css';
import { async } from 'q';

const App = (props)=> {

  const APP_ID = "e3ea06da";
  const APP_KEY = "53eeddda5479700759825359fc8e524d	";
  const [recipe, setRecipes] = useState([]);

  // get the data from the API :
  const getReciepies = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q={eggs}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    setRecipes(data.hits);
  }

  useEffect(()=> {
    //getReciepies();
  },[]);


  return (
    <main className="App-header">
      <div className="header" >Search for a reciepe {props.default}</div>
      <form className="searchBar">
          <input type="text" className="searchText"></input>
          <input type="submit" value="search" className="searchSubmit"></input>
      </form>
    </main>
  );
}

export default App;
