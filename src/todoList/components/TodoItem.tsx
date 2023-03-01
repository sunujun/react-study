import { IoMdCheckmark, IoIosRemoveCircle } from 'react-icons/io';
import { TodoList } from '../hooks/useTodoList';
import { ITEM_WIDTH } from './utils';

export const TodoItem = ({
    item: todo,
    toggleTodo,
    removeTodo,
}: {
    item: TodoList;
    toggleTodo: (todoId: number) => void;
    removeTodo: (todoId: number) => void;
}) => {
    const isSuccess = todo.isSuccess;
    const onPress = () => {
        toggleTodo(todo.id);
    };
    const onPressRemove = () => {
        removeTodo(todo.id);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div
                onClick={onPress}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: `${ITEM_WIDTH}px`,
                    borderBottom: '1px solid #A6A6A6',
                    cursor: 'pointer',
                    paddingBottom: '4px',
                    marginBottom: '4px',
                }}>
                <div style={{ marginRight: '5px', width: '20px', height: '20px' }}>
                    <IoMdCheckmark size="20px" color={isSuccess ? '#595959' : '#BFBFBF'} />
                </div>
                <div
                    style={{
                        fontSize: '20px',
                        color: '#595959',
                        wordBreak: 'break-all',
                        textDecoration: isSuccess ? 'line-through' : 'none',
                    }}>
                    {todo.content}
                </div>
            </div>
            <div
                style={{ marginLeft: '5px', width: '20px', height: '20px', cursor: 'pointer' }}
                onClick={onPressRemove}>
                <IoIosRemoveCircle size="20px" color="#fa5252" />
            </div>
        </div>
    );
};
