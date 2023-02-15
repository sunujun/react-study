import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
};

const Article = () => {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Article />
    </div>
  );
};

export default App;
