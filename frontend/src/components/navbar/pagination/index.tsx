import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import "./styles.css";

function Pagination() {
  return (
    <div className="rymovie-pagination-container">
      <div className="rymovie-pagination-box">
        <button className="rymovie-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="rymovie-pagination-button" disabled={false}>
          <Arrow className="rymovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
