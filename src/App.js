import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }); // movies(state): movies(axios).data.data.movies -> es6 문법
  } // YTS API
  componentDidMount() {
    this.getMovies();
  } // render 함수 호출 후 componentDidMount 함수 호출(Component Life Cycle)
  // axios는 마치 fetch 위에 있는 작은 layer
  // javascript에게 getMovie function에 시간이 조금 필요하다고 알려주어야 한다.
  // -> async와 await을 이용해서 느린 axios를 기다리도록 한다.

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>{isLoading ? "Loading..." : movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      ))}
      </div>
    );
  }
}
// object을 풀어줄 때 map 함수를 사용하고, jsx에서는 props를 통해 값을 전달한다.
// key props는 표현되지는 않지만 필수 props이다.
// npm i axios

export default App;