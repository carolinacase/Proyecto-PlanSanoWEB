import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h2>¿Qué vamos a cocinar hoy?</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="¿Qué ingredientes hay en casa?"
        />
        <button>Empecemos</button>
      </div>
    </section>
  );
}

export default Hero;
