import React, { Component } from 'react';
import PageTitle from '../components/common/PageTitle';
import MovieSearchForm from '../components/movie/MovieSearchForm';
import {getMovieByTitle} from '../Api'
import MovieDetails from '../components/movie/MovieDetails';

class MovieContainer extends Component {
    
    state = {
        movie: null,
        movieTitle: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        const title = this.state.movieTitle;

        getMovieByTitle(title, response => {
            this.setState({ movie: response })
        })        
    }

    handleChange = event => {
        this.setState({
            movieTitle: event.target.value
        })
    }

    render() {
        const { movie, movieTitle } = this.state;
        return (
            <div>
                <PageTitle title='Movie Search App' />
                <MovieSearchForm 
                        movieTitle={movieTitle}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    />
                }
                {movie &&
                    <MovieDetails movie={movie}/>
                }
            </div>
        );
    }
}

export default MovieContainer;