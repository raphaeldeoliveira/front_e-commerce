import React from "react";

export default function FormCreateAccount() {


    return (
        <div className="form-login">
            <form>
                <h3>Crie sua conta</h3>
                <input type="text" placeholder="Email"></input>
                <div>
                    Ja tem uma conta? 
                    <a href="">Login</a>
                </div>
                <div>
                    <hr/>
                    <span> OU </span>
                    <hr/>
                </div>

                <button>Continuar com Google</button>
                <button>Continuar com Facebook</button>
                
            </form>
        </div>
    )

}