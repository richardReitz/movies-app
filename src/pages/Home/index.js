import React, { useEffect, useState } from 'react';
import './home.css';
import {Link} from 'react-router-dom';

import api from '../../services/api';

export default function Home(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    async function loadMovies(){
      const response = await api.get('r-api/?api=filmes')
      setMovies(response.data);
    }

    loadMovies();

  }, []);

  return(
    <div className='container'>
      <div className='movie-list'>
        {movies.map((movie)=>{
          return(
            <article key={movie.id}>
              <strong className='title'>{movie.nome}</strong>
              <img src={movie.foto} alt={movie.nome}/>
              <Link to={`/movie/${movie.id}`}>About the movie</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}