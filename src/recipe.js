import React from "react";
import './App.css'

const Recipe = (props)=> {
    return (
        <div className="recipe">
            <div className="recipeTitle">{props.title}</div>
            <div className="recipeCalories">{props.calories}</div>
            <img src={props.imageLink} className="recipeimage" alt="pic"></img>
        </div>
    )
}

export default Recipe;