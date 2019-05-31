import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],

      // Stretch challenge 

      films: [],
      homeworld:[],
      species:[],
      starships:[],
      vehicles:[],
    };

  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');

    // Stretch challenge 
    this.getFilms('https://swapi.co/api/films/')
    this.getHomeWorld('https://swapi.co/api/planets/')
    this.getSpecies('https://swapi.co/api/species/')
    this.getStarShips('https://swapi.co/api/starships/')
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

// Stretch challenge

  getFilms = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ films: data.results })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  getHomeWorld = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data.results })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  getSpecies = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ species: data.results })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  getStarShips = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starships: data.results })
      })
      .catch(err => {
        throw new Error(err);
      });
  }


  render() {
    
    const {starwarsChars, films, homeworld, species, starships} = this.state;
    
    // Stretch Challange
    console.log(starwarsChars, films, homeworld, species, starships)

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='list-container'>{starwarsChars.map(char =>
          <ul className='list'>
            <li className='name'><h1>{char.name}</h1></li>
            <li>Birth Day: {char.birth_year}</li>
            <li>Gender: {char.gender}</li>
            <li>Mass: {char.mass}</li>
            <li>Height: {char.height}</li>
            <li>Eye color: {char.eye_color}</li>
            <li>Skin Color: {char.skin_color}</li>
            <li>Hair Color: {char.hair_color}</li>
            <li>Created: {char.created}</li>
            <li>Edited: {char.edited}</li>
          </ul>
        )}</div>
      </div>
    );
  }
}

export default App;
