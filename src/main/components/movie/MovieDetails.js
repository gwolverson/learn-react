import React from 'react';
import SubTitle from '../common/SubTitle';

const MovieDetails = ({movie}) => (
    <div>
        <SubTitle subTitle={`Movie Details for: ${movie.Title}`}/>
        <ul>
            <li>Title: {movie.Title}</li>
            <li>Year: {movie.Year}</li>
            <li>Rating: {movie.Rated}</li>
            <li>Runtime: {movie.Runtime}</li>
        </ul>
    </div>
)

export default MovieDetails;