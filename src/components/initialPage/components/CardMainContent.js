import React from "react";

export default function CardMainContent(props) {

    // o id vai servir para definir a rota no /:id. Assim cada item vai levar a uma pagina

    // quando um desses cards é clicado a pagina de busca será ativa com algum filtro especifico que o 
    // elasticSearch pega e faz a filtragem correta com base nos itens disponiveis, etc.

    return (
        <div className="card-main-content">

            <img src={props.imageCard}/>
            <h2>{props.titleCard}</h2>
            <button>{props.buttonTextCard}</button>

        </div>
    )
}