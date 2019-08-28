import React from "react";
import './App.css'

/*
window.addEventListener("click", ()=> {
    document.querySelector(".ingridients").style.visibility = "hidden";
})
*/

const showIngridients =(ev)=> {
    document.querySelector("ul").style.visibility = "hidden";
    ev.target.firstChild.style.visibility = "visible";
}
/*
const hideReciepe =(ev)=> {
    ev.target.firstChild.style.visibility = "hidden";
  }
*/
const Recipe = (props)=> {
    return (
        <div className="recipe">
            <div className="recipeTitle">{props.title}</div>
            <div className="recipeCalories">{props.calories.toFixed(2)} Kcal</div>
            <div onClick={showIngridients} className="recipeimage"  style={{backgroundImage: `url(${props.imageLink})`}}>
                <ul className="ingridients">
                    {props.ingridients.map(ingredient=> (
                        <li className="ingridient">{ingredient.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Recipe;