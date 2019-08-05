import React from "react";

// Graphql kullanımıyla verileri çekebilmek için
// Apollo modüllerini ekliyoruz
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import { Link } from "react-router-dom"

const client = new ApolloClient({
  uri: "https://swapi.graph.cool/"
});

class Film extends React.Component{

  filmsGqlStr = gql`
  query{
    Film(id: "${this.props.match.params.filmId}"){
      id
      title
      releaseDate
      director
      isPublished
    }
  }
  `;

  render() {
    return (
      <div className="wrapper anasayfa">
        <Link className="goback" onClick={() => this.props.history.goBack()}>Geri Git</Link>
        <p>Bir StarWars filmi</p>
        <ApolloProvider client={client}>
          {/* Filmlerin Listelemesi */}
          <div className="section">
            <div className="section-wrapper">
            <Query query={this.filmsGqlStr}>
              {({ loading, error, data }) => {
                if (loading) return <p>Film Yükleniyor...</p>;
                if (error) return <p>Hata :(</p>;  
                return (
                  <div className="box film" key={data.Film.id}>
                    <h2>{data.Film.title}</h2>
                    <p><b>Yayınlanma tarihi:</b> {data.Film.releaseDate}</p>
                    <p><b>Yönetmen:</b> {data.Film.director}</p>
                    <p><b>Yayınlandı Mı:</b> {data.Film.isPublished ? "Film yayınlandı" : "Henüz yayında değil"}</p>
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

export default Film;