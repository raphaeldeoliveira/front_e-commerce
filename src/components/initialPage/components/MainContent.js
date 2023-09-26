import React from "react";

import CardMainContent from "./CardMainContent";

export default function MainContent() {

    const [dataCards, setDataCards] = React.useState([])

    React.useEffect(() => {
        // faz a requisição no BD
        // verifica se a resposta é um JSON
        // coloca os dados recebidos no hook dataCards
        /*fetch("http://localhost:8080/{contexto}/{recurso}")
            .then(response => response.json())
            .then(data => setDataCards(data))*/
    }, [])

    const loadContent = dataCards.map((data) => {
        <CardMainContent
            id = {dataCards.id} 
            imageCard = {dataCards.imageUrl}
            titleCard  = {dataCards.titleCard}
            buttonTextCard = {dataCards.buttonTextCard}
        />
    })

    return (
        <main className="main-content">
            {/*banner de ofertas*/}
            {/*opções de produtos por categorias em formato de bolinhas
            (se clicar ele muda o grid de produtos listados abaixo)*/}

            <div className="grid-content">
                {loadContent}
                <CardMainContent 
                    id = "1"
                    imageCard = "https://static.netshoes.com.br/bnn/l_netshoes/2023-09-20/5831_trio_1.png"
                    titleCard  = "teste"
                    buttonTextCard = "confira já"
                />
            </div>
            
        </main>
    )
}