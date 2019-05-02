import React from 'react';

const MovieSearchForm = ({movieTitle, handleSubmit, handleChange}) => (
    <form onSubmit={handleSubmit}>
        <input type='text' value={movieTitle} onChange={handleChange}/>
        <button type='submit'>Search</button>
    </form>
);

export default MovieSearchForm;