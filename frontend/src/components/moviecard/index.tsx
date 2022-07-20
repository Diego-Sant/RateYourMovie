import MovieScore from "components/moviescore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  return (
    <div>
      <img
        className="rymovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="rymovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />

        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary rymovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}
export default MovieCard;
