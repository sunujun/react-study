import { useState } from 'react';
import './App.css';

const Header = ({ title, onChangeMode }: { title: string; onChangeMode: () => void }) => {
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={event => {
                        event.preventDefault();
                        onChangeMode();
                    }}>
                    {title}
                </a>
            </h1>
        </header>
    );
};

const Nav = ({
    topics,
    onChangeMode,
}: {
    topics: {
        id: number;
        title: string;
        body: string;
    }[];
    onChangeMode: (id: number) => void;
}) => {
    const lis = [];
    for (let i = 0; i < topics.length; i++) {
        let t = topics[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id.toString()}
                    href={'/read/' + t.id}
                    onClick={event => {
                        event.preventDefault();
                        onChangeMode(parseInt((event.target as HTMLAnchorElement).id));
                    }}>
                    {t.title}
                </a>
            </li>,
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

const Create = ({ onCreate }: { onCreate: (title: string, body: string) => void }) => {
    return (
        <article>
            <h2>Create</h2>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    const title = (event.currentTarget.title as unknown as HTMLInputElement).value;
                    const body = (event.currentTarget.body as unknown as HTMLInputElement).value;
                    onCreate(title, body);
                }}>
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="body" placeholder="body" />
                </p>
                <p>
                    <input type="submit" value="Create" />
                </p>
            </form>
        </article>
    );
};

const App = () => {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState<number | null>(null);
    const [topics, setTopics] = useState([
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' },
    ]);
    let content = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, WEB" />;
    } else if (mode === 'READ') {
        let title = '';
        let body = '';
        // for (let i = 0; i < topics.length; i++) {
        //     if (topics[i].id === id) {
        //         title = topics[i].title;
        //         body = topics[i].body;
        //         break;
        //     }
        // }
        for (const topic of topics) {
            if (topic.id === id) {
                title = topic.title;
                body = topic.body;
                break;
            }
        }
        content = <Article title={title} body={body} />;
    } else if (mode === 'CREATE') {
        content = (
            <Create
                onCreate={(_title, _body) => {
                    const lastId = topics.length === 0 ? 0 : topics[topics.length - 1].id;
                    const newTopic = { id: lastId + 1, title: _title, body: _body };
                    setTopics(prev => [...prev, newTopic]);
                    setMode('READ');
                    setId(lastId + 1);
                }}
            />
        );
    }

    return (
        <div>
            <Header
                title="WEB"
                onChangeMode={() => {
                    setMode('WELCOME');
                }}
            />
            <Nav
                topics={topics}
                onChangeMode={_id => {
                    setMode('READ');
                    setId(_id);
                }}
            />
            {content}
            <a
                href="/create"
                onClick={event => {
                    event.preventDefault();
                    setMode('CREATE');
                }}>
                Create
            </a>
        </div>
    );
};

export default App;
