import styles from './MoviesCard.module.css'

export function MovieCard({ movie }){
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path

  return  <li className={styles.moviecard}>
  <img width={230}
  height={345}
  className={styles.movieimage}
  src={imageUrl}/>
  {movie.title}
  </li>
}
