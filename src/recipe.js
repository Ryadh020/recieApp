import React from "react";
import './App.css'

const showIngridients =(ev)=> {
    ev.target.parentElement.firstChild.style.visibility = "visible";
}

const hideReciepe =(ev)=> {
    ev.target.parentElement.firstChild.style.visibility = "hidden";
  }

const Recipe = (props)=> {
    return (
        <div className="recipe">
            <div className="recipeTitle">{props.title}</div>
            <div className="recipeCalories">{props.calories.toFixed(2)} Kcal</div>
            <div  className="recipeimage"  style={{backgroundImage: `url(${props.imageLink})`}}>
                <ul className="ingridients">
                    {props.ingridients.map(ingredient=> (
                        <li className="ingridient">{ingredient.text}</li>
                    ))}
                </ul>
                <input type="button" onFocus={showIngridients} onBlur={hideReciepe} className="recipe-button"></input>
            </div>
        </div>
    )
}

export default Recipe;