import React, {useEffect, useState} from 'react';
import {getTrending} from "../../api/apicalls";
import {Helmet} from 'react-helmet';
import not_found from "../searchresult/not_found.png";
import verified_tick from "../verified_tick.png";
import tmdb from "../tmdb.png";
import MenuBar from "../menubar/MenuBar.js"

export function Dashboard(props) {

    const [results, setResults] = useState([]);

    useEffect(() => {
        getTrending().then((response) => {
            setResults(response.data.results.map((movie) => (
                <li id={movie.id} onClick={handleMovieClick}>
                    <img alt="pic"
                         src={movie.poster_path === null ? not_found : ("https://image.tmdb.org/t/p/original" + movie.poster_path)}
                         width="100px" id={movie.id} onClick={handleMovieClick}/>
                    <div className="movie_li_div" id={movie.id} onClick={handleMovieClick}>
                        <span className="movie_title" id={movie.id} onClick={handleMovieClick}>{movie.title}</span>
                        <span className="movie_release_date" id={movie.id}
                              onClick={handleMovieClick}> {movie.release_date === null ? "" : movie.release_date.substring(0, 4)}</span>
                        <br/>
                        <div className="ratings">
                            <span id={movie.id} onClick={handleMovieClick} className="rating">{movie.ratings === -1 ? "-" : movie.ratings}</span>
                            <span id={movie.id} onClick={handleMovieClick} className="verified-rating"><img id="tick" alt="verified"
                                                                                                            src={verified_tick}/>{movie.verified_rating === -1 ? "-" : movie.verified_rating}</span>
                            <span id={movie.id} onClick={handleMovieClick}
                                  className="tmdb-rating"><img id="tmdb" alt="tmdb"
                                                               src={tmdb}/>{movie.vote_average === -1 ? "-" : movie.vote_average}</span>
                        </div>
                    </div>
                </li>
            )));
        });
    }, []);

    function handleMovieClick(event) {
        props.history.push("/movie?" + event.target.id);
    }

    return (
        <div className="dashboard">
            <Helmet>
                <meta charSet="UTF-8"/>
                <title>Dashboard</title>
            </Helmet>
            <div id="body">
                <div className="container" id="container">
                    <MenuBar data={props}/>
                </div>
                <div id="title">
                    Trending now:
                </div>
                <div>
                    <ul id="searchlist">
                        {results.length === 0 ? "No results." : results}
                    </ul>
                </div>
            </div>
        </div>
    );
}