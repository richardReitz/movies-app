import {useEffect, useState} from 'react';
import './info.css';

import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';


export default function Movie() {
    const {id} = useParams();
    const [movies, setMovies] = useState([]);
    const history = useHistory();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadMovies(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                history.replace('/');
                return;
            }

            setMovies(response.data);
            setLoading(false);
        }

        loadMovies();

    }, [history, id]);

    function saveMovie(){
        const movieList = localStorage.getItem('movies');

        let savedMovies = JSON.parse(movieList) || [];

        const hasMovie = savedMovies.some((movieSaved) => movieSaved.id === movies.id);

        if(hasMovie){
            alert('This movie is already saved in favorites!')
            return;
        }

        savedMovies.push(movies);
        localStorage.setItem('movies', JSON.stringify(savedMovies));
        alert('Successfully saved movie!')
    }

    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
            );
    }
    return (
        <div className='info-movie'>
            <h1 className='info-title'>{movies.nome}</h1>
            <img className="image" src={movies.foto}/>
            <h3 className='sinopse-title'>Synopsis</h3>
            <p className='sinopse'>{movies.sinopse}</p>
            <div className='buttons'>
                <button className='button' onClick={saveMovie}>Save</button>
                <button className='button'>
                    <a target='blank' href={`https://www.youtube.com/results?search_query=${movies.nome} trailer`}>Trailer</a>
                </button>
            </div>
        </div>
        );
}