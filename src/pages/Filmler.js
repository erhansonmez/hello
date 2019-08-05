import React from "react";

// Graphql kullanımıyla verileri çekebilmek için
// Apollo modüllerini ekliyoruz
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import Film from "./components/Film";

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
        <ApolloProvider client={client}>
          {/* Filmlerin Listelemesi */}
          <div className="section">
            <h2>Filmler</h2>
            <p>StarWars filmlerinin tamamı</p>
            <div className="section-wrapper">
            <Query query={this.allFilmsGqlStr}>
              {({ loading, error, data }) => {
                if (loading) return <p>Filmler Yükleniyor...</p>;
                if (error) return <p>Hata :(</p>;  
                return data.allFilms.map((data) => (
                  <Film Film={data} />
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