import React from "react";

// Graphql kullanımıyla verileri çekebilmek için
// Apollo modüllerini ekliyoruz
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import { Link } from "react-router-dom"

const client = new ApolloClient({
  uri: "https://swapi.graph.cool/"
});

class Oyuncular extends React.Component{

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
      <div className="wrapper oyuncular">
        <ApolloProvider client={client}>
          {/* Oyuncuların Listelemesi */}
          <div className="section">
            <h2>Karakterler</h2>
            <p>StarWars film karakterlerinin tamamı</p>
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

export default Oyuncular;