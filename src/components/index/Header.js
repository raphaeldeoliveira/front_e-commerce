import React from "react";

export default function Header() {



    return (
        <header>
            <div>**Logo do e-commerce**</div>

            <div className="search-bar">
                <input type="text" placeholder="O que você está procurando"/>
                <div className="lupa-image">&#128269;</div>
            </div>

            <div>favoritos</div>

            <div>entrar</div>

            <div>carrinho</div>

        </header>
    )

}