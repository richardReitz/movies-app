import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './favorites.css';

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{

    const myList = localStorage.getItem('movies');
    setMovies(JSON.parse(myList) || []);
  }, []);

  function handleDel(id){
    let filterList = movies.filter((item)=>{
      return (item.id !== id);
    })
    setMovies(filterList);
    localStorage.setItem('movies', JSON.stringify(filterList));
  }

  return (
    <div className='favorites-movies'>
        <h1>My Movies</h1>
        {movies.length === 0 && <span>You don't have saved movies...</span>}
        <ul className='favorites-list'>
          {movies.map((item)=>{
            return(
              <li className='movie' claskey={item.id}>
                <span>{item.nome}</span>
                <div className='btn-view'>
                  <Link className='details' to={`/movie/${item.id}`}>See details</Link>
                  <button className='button-del' onClick={() => handleDel(item.id)}>Delete</button>
                </div>
              </li>
            )
          })}
        </ul>
    </div>
  );
}