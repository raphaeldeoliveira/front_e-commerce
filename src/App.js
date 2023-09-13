import React from "react";

import Header from "./components/Header"

function App() {
  
  React.useEffect(() => {
    // faz a requisição a API para carregar os dados iniciais
  }, [])
  
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
