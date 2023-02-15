import "./App.css";

const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <h1>
        <a href="/">{title}</a>
      </h1>
    </header>
  );
};

const Nav = ({
  topics,
}: {
  topics: {
    id: number;
    title: string;
    body: string;
  }[];
}) => {
  const lis = [];
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read/" + t.id}>{t.title}</a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
};

const Article = ({ title, body }: { title: string; body: string }) => {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
};

const App = () => {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  return (
    <div>
      <Header title="WEB" />
      <Nav topics={topics} />
      <Article title="Welcome" body="Hello, WEB" />
    </div>
  );
};

export default App;
