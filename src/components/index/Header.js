import React from "react";

export default function Header() {

    const [showCarrinhoList, setShowCarrinhoList] = React.useState(false);

    function mouseEntrouCarrinho() {
        setShowCarrinhoList(true);
    }

    function mouseSaiuCarrinho() {
        setShowCarrinhoList(false);
    }

    return (
        <header>
            <div>**Logo do e-commerce**</div>

            <div className="search-bar">
                <input type="text" placeholder="O que você está procurando"/>
                <div className="lupa-image">
                    <span>&#128269;</span>
                </div>
            </div>

            <div>favoritos</div>

            <div>entrar</div>

            <div className="div-carrinho" onMouseLeave={mouseSaiuCarrinho}>
                <div 
                    onMouseEnter={mouseEntrouCarrinho}
                    
                    className="title"
                >carrinho</div>
                <div 
                    className="balao-carrinho"
                    style={{ display: showCarrinhoList ? "block" : "none" }}
                ></div>
            </div>

        </header>
    )

}