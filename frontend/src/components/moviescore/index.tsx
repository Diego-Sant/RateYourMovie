import MovieStars from "components/moviestars";
import "./styles.css";

function MovieScore() {
  const score = 3.5;
  const count = 13;

  return (
    <div className="rymovie-score-container">
      <p className="rymovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="rymovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
