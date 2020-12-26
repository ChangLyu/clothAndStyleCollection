import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';
import { Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

const Todo = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {

    const handleChange = (e) => {
        if (e.target.value) {
            updateTodo(todo.id, e.target.value);
        } else {
            deleteTodo(todo.id);
        }
    }
    return (
        <div className="todo-item" >
            <span className="todo-checkbox" onClick={() => toggleTodo(todo.id)}>
                {todo && todo.completed ? <GrCheckboxSelected /> : <GrCheckbox />}
            </span>
            <Input bordered={false} onPressEnter={handleChange} onBlur={handleChange} defaultValue={todo.content} />
            <DeleteOutlined onClick={() => deleteTodo(todo.id)} />
        </div>
    );
}


export default Todo;