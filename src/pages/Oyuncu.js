import React from "react";

// Graphql kullanımıyla verileri çekebilmek için
// Apollo modüllerini ekliyoruz
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import { Link } from "react-router-dom"

const client = new ApolloClient({
  uri: "https://swapi.graph.cool/"
});

class Oyuncu extends React.Component{

  oyuncuGraphqlStr = gql`
  query{
    Person(id: "${this.props.match.params.oyuncuId}"){
      id
      name
      gender
      eyeColor
    }
  }
  `;

  render() {
    console.log( this.props.match );
    return (
      <div className="wrapper anasayfa">
        <Link className="goback" onClick={() => this.props.history.goBack()}>Geri Git</Link>
        <p>Bir StarWars oyuncusu</p>
        <ApolloProvider client={client}>
          {/* Oyunculerin Listelemesi */}
          <div className="section">
            <div className="section-wrapper">
            <Query query={this.oyuncuGraphqlStr}>
              {({ loading, error, data }) => {
                if (loading) return <p>Oyuncu Yükleniyor...</p>;
                if (error) return <p>Hata :(</p>;  
                return (
                  <div className="box person" key={data.Person.id}>
                    <h2>{data.Person.name}</h2>
                    <p><b>Cinsiyet:</b> {data.Person.gender}</p>
                    <p><b>Göz Rengi:</b> {data.Person.eyeColor}</p>
                  </div>
                )
              }}
            </Query>
            </div>
          </div>
        </ApolloProvider>
      </div>
    );
  }

}

export default Oyuncu;