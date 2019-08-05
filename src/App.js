import React from "react";

// Rota oluşturabilmek için sınıfı dahil ediyoruz
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Rotalar için sınıfarı dahil ediyoruz
import Anasayfa from "./pages/Anasayfa";
import Filmler from "./pages/Filmler";
import Oyuncular from "./pages/Oyuncular";
import Film from "./pages/Film";
import Oyuncu from "./pages/Oyuncu";

class App extends React.Component{

  render() {
    return (
      <Router>
        <div className="menu">
          <h1>Menüler</h1>
          {/* Rota Bileşenleri */}
          <Route component={Anasayfa} path="/" exact />
          <Route component={Filmler} path="/filmler" exact />
          <Route component={Oyuncular} path="/oyuncular" exact />
          <Route component={Film} path="/filmler/:filmId" />
          <Route component={Oyuncu} path="/oyuncular/:oyuncuId" />
          {/* Rota Linkleri */}
          <div className="nav">
            <Link to="/">Anasayfa</Link>
            <Link to="/filmler">Filmler</Link>
            <Link to="/oyuncular">Oyuncular</Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;