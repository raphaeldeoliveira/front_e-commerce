import React from "react";

import './styles.scss'
import Header from "./components/index/Header"
import SubHeader from "./components/index/SubHeader";
import MainContent from "./components/index/MainContent";

function App() {
  
  function loadDataInPage(respondeApi) {

  }

  React.useEffect(() => {
    // faz a requisição a API para carregar os dados iniciais

    // chama o metodo loadDataInPage para carregar os dados com base na response da API
  }, [])
  
  return (
    <div className="App">
      <Header />
      <SubHeader />

      <MainContent />
    </div>
  );
}

export default App;
