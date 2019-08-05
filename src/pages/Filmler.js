import React from "react";

// Graphql kullanımıyla verileri çekebilmek için
// Apollo modüllerini ekliyoruz
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import { Link } from "react-router-dom"

const client = new ApolloClient({
  uri: "https://swapi.graph.cool/"
});

class Filmler extends React.Component{

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

  render() {
    return (
      <div className="wrapper filmler">
        <p>StarWars filmlerinin tamamı</p>
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
        </ApolloProvider>
      </div>
    );
  }

}

export default Filmler;