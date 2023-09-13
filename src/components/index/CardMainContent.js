import React from "react";

export default function CardMainContent(props) {


    return (
        <div className="card-main-content">

            <img src={props.imageCard}/>
            <h2>{props.titleCard}</h2>
            <button>{props.buttonTextCard}</button>

        </div>
    )
}