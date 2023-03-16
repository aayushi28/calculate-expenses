import React from "react";
import Card from "../UI/Card";
import './Entertainment.css';
const Entertainment = (props)=>{
    return(
        <li>
            <Card className="entertainment">
                <h1>Number guessing game</h1>
                <p>We have selected a random number between 1 and 100. See if you can guess 
                    it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
                <label>Enter a guess:</label>         
                <input value="Submit guess" type="number"></input>
                <button>Submit</button>   
            </Card>
        </li>
    );
}
export default Entertainment;