import "./styles.css";
import MovieStars from "components/moviestars";

type Props = {
  score: number;
  count: number;
};

function MovieScore({ score, count }: Props) {
  return (
    <div className="rymovie-score-container">
      <p className="rymovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars score={score} />
      <p className="rymovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
