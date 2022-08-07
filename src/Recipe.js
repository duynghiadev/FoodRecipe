import React from 'react';
import "./style.css"

function Recipe(props) {
    return (
        <div >


            <div className="flexbox-item" >
                <h1> {props.title}</h1>
                <p>Calories : {props.calo}</p>
                {props.in.map(item => {
                    return (
                        <p>{item.text}</p>
                    )
                })}
                <img src={props.img} />




            </div>
            <br />

            <br />
        </div>
    )
}

export default Recipe;