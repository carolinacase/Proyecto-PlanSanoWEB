import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Plan Sano</h1>
      <nav className="nav">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#recipes">Recetas</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
