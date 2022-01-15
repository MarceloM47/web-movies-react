import { MovieCard } from './MovieCard.jsx'
import movies from './Movies.json'
import styles from './MoviesGrid.module.css'

export function MoviesGrid(){
  return <ul className={styles.moviesgrid}>
            {movies.map((movie) =>
                 <MovieCard key={movie.id} movie={movie} />
            )}
         </ul>
}
