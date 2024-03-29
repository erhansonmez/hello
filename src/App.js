import React from "react";

// Rota oluşturabilmek için sınıfı dahil ediyoruz
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Rotalar için sınıfarı dahil ediyoruz
import Anasayfa from "./pages/Anasayfa";

// Listeleme Sayfaları
import Filmler from "./pages/Filmler";
import Oyuncular from "./pages/Oyuncular";

// Detay Sayfaları
import Film from "./pages/Film";
import Oyuncu from "./pages/Oyuncu";

// Hata Sayfaları
import Error_404 from "./pages/Error_404";

class App extends React.Component{

   render() {
    return (
      <div className="wrapper">
      <Router>
        {/* Rota Linkleri */}
        <div className="nav">
          <Link to="/">Anasayfa</Link>
          <Link to="/filmler">Filmler</Link>
          <Link to="/oyuncular">Karakterler</Link>
        </div>
        {/* Rota Bileşenleri */}
        <Route component={Anasayfa} path="/" exact />
        <Route component={Filmler} path="/filmler" exact />
        <Route component={Oyuncular} path="/oyuncular" exact />
        <Route component={Film} path="/filmler/:filmId" />
        <Route component={Oyuncu} path="/oyuncu/:oyuncuId" />
      </Router>
      </div>
    );
  }
}

export default App;