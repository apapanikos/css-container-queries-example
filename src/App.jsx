import "./App.css";
import movies from "./movies.json";

function Card({ image, title, subtitle, description }) {
  return (
    <div className="card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="info">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="page">
      <header>
        <h1 className="hero-title">
          I am a sample project for{" "}
          <a href="https://www.w3schools.com/w3css/w3css_containers.asp">
            CSS Container
          </a>
          <br />
          property
        </h1>
      </header>
      <div className="layout">
        <main className="container">
          <Card {...movies[0]} />
          <Card {...movies[1]} />
          <Card {...movies[2]} />
        </main>
        <article className="container">
          <Card {...movies[3]} />
          <Card {...movies[2]} />
          <Card {...movies[1]} />
        </article>
      </div>
    </div>
  );
}

export default App;
