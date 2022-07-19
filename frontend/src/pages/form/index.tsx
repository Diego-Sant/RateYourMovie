import "./styles.css";

function Form() {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 3.5,
  };

  return (
    <div className="rymovie-form-container">
      <img
        className="rymovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="rymovie-card-bottom-container">
        <h3>"The Witcher"</h3>
        <form className="rymovie-form">
          <div className="form-group rymovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group rymovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </select>
          </div>
          <div className="rymovie-form-btn-container">
            <button type="submit" className="btn btn-primary rymovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <button className="btn btn-primary rymovie-btn mt-3">Cancelar</button>
      </div>
    </div>
  );
}

export default Form;
