import React from "react";

import Filmler from "./Filmler";
import Oyuncular from "./Oyuncular";

class Anasayfa extends React.Component{

  render() {
    return (
      <div className="wrapper anasayfa">

        <p>Starwars filmlerinin tamamı</p>

        {/* Filmleri Listele */}
        <Filmler />
        
        {/* Oyuncuları Listele */}
        <Oyuncular />

      </div>
    );
  }

}

export default Anasayfa;