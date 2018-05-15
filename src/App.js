import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state={
    title : this.props.title,
    image : this.props.image,
    description : this.props.description,
    pelicula:[]
  }

componentWillMount(){
  fetch('https://api.themoviedb.org/3/genre/28/movies?api_key=86ce2b6f3a7348ed983ffde1e0e524f1&language=es&include_adult=false&sort_by=created_at.asc')
  .then(r=>r.json())
  .then(pelicula=>{
    this.setState({pelicula:pelicula.results})
  })
}

  render() {
    return (
      <div className="App">
         <a href="#" onClick>Action</a>
         <a href="#" onClick>Comedy</a>
         <a href="#" onClick>Drama</a>
         <div className="movies">
         {this.state.pelicula.map(m=><h2>{m.original_title + m.overview}</h2>)}
         {this.state.pelicula.map(m=> <img src='https://image.tmdb.org/t/p/w500+{m.poster_path}'> </img>)}
         </div>
      </div>
    );
  }
}

export default App;
