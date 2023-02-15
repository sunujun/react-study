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

const App = () => {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState<number | null>(null);
    const topics = [
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' },
    ];
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
        </div>
    );
};

export default App;
