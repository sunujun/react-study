import './App.css';
import { Provider } from 'react-redux';
import { TodoList } from './todoList/TodoList';
import store from './todoList/store';

const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
};

export default App;
