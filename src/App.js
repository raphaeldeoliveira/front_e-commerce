import React from "react";

import ClientDashboard from "./components/clientDashboard/ClientDashboard";
import CreateAccount from "./components/createAccount/CreateAccount";
import InitialPage from "./components/initialPage/InitialPage";
import LoggerAccount from "./components/loggerAccount/LoggerAccount";
import ProductPage from "./components/productPage/ProductPage";
import SearchPage from "./components/searchPage/SearchPage";

import "./styles.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  function loadDataInPage(respondeApi) {

  }

  React.useEffect(() => {
    // faz a requisição a API para carregar os dados iniciais

    // chama o metodo loadDataInPage para carregar os dados com base na response da API
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />}/>
          <Route path="/dashboard" element={<ClientDashboard />}/>
          <Route path="/auth/createAccount" element={<CreateAccount />}/>
          <Route path="/auth/loginAccount" element={<LoggerAccount />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="/list-products/:id" element={<SearchPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
