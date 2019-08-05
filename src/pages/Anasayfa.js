import React from "react";

// Graphql kullanımıyla verileri çekebilmek için
// Apollo modüllerini ekliyoruz
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import { Link } from "react-router-dom"

const client = new ApolloClient({
  uri: "https://swapi.graph.cool/"
});

class Anasayfa extends React.Component{

  allFilmsGqlStr = gql`
  query{
    allFilms(orderBy: releaseDate_DESC){
      id
      title
      releaseDate
      director
    }
  }
  `;

  allPersonsGqlStr = gql`
  query{
    allPersons(orderBy: name_ASC){
      id
      name
      gender
      eyeColor
    }
  }
  `;

  render() {
    return (
      <div className="wrapper anasayfa">
        <p>Starwars filmlerinin tamamı</p>
        <ApolloProvider client={client}>
          {/* Filmlerin Listelemesi */}
          <div className="section">
            <h2>Filmler</h2>
            <div className="section-wrapper">
            <Query query={this.allFilmsGqlStr}>
              {({ loading, error, data }) => {
                if (loading) return <p>Filmler Yükleniyor...</p>;
                if (error) return <p>Hata :(</p>;  
                return data.allFilms.map(({ id, title, releaseDate, director }) => (
                  <div className="box film" key={id}>
                    <h3><Link to={"/filmler/"+id}>{title}</Link></h3>
                    <p><b>Yayınlanma tarihi:</b> {releaseDate}</p>
                    <p><b>Yönetmen:</b> {director}</p>
                  </div>
                ));
              }}
            </Query>
            </div>
          </div>
          {/* END # Filmlerin Listelemesi */}

          {/* Oyuncuların Listelemesi */}
          <div className="section">
            <h2>Karakterler</h2>
            <div className="section-wrapper">
            <Query query={this.allPersonsGqlStr}>
              {({ loading, error, data }) => {
                if (loading) return <p>Filmler Yükleniyor...</p>;
                if (error) return <p>Hata :(</p>;  
                return data.allPersons.map(({ id, name, gender, eyeColor, skinColor }) => (
                  <div className="box oyuncu" key={id}>
                    <h3><Link to={"/oyuncu/"+id}>{name}</Link></h3>
                    <p><b>Cinsiyet:</b> {gender}</p>
                    <p><b>Göz Rengi:</b> {eyeColor}</p>
                  </div>
                ));
              }}
            </Query>
            </div>
          </div>
          {/* END # Oyuncuların Listelemesi */}
        </ApolloProvider>
      </div>
    );
  }
}

export default Anasayfa;