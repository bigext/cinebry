// import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const MovieList = ({ apiPath, title }) => {
    const { data: movies } = useFetch(apiPath);


    useEffect(() => {
        document.title = `${title} / Cinebry`;
    });

    // useEffect(() => {
    //     async function fetchMovies() {
    //         const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c424222e373522be4e2b3b4821362791&language=en-US&page=1");
    //         const data = await response.json();
    //         setMovies(data.results);
    //     }
    //     fetchMovies();
    // }, [])

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </main>
    )
}
