import React from "react";

import { Link } from "react-router-dom";

class Film extends React.Component{

  render() {
    return (
      <div className="box film" key={this.props.Film.id}>
        <h3><Link to={"/filmler/"+this.props.Film.id}>{this.props.Film.title}</Link></h3>
        <p><b>Yayınlanma tarihi:</b> {this.props.Film.releaseDate}</p>
        <p><b>Yönetmen:</b> {this.props.Film.director}</p>
      </div>
    )
  }

}

export default Film;