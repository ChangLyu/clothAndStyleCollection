import { connect } from "react-redux"
import { toggleTodo } from "./../../redux/actions/todoActions";
import cx from "classnames";
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';
const Todo = ({ todo, toggleTodo }) => {
    return (
        <div className="todo-item" onClick={() => toggleTodo(todo.id)}>
            {todo && todo.completed ? <GrCheckboxSelected /> : <GrCheckbox />}
            {" "}
            <span className={cx(
                "todo-item_text",
                todo && todo.completed && "todo-item_text-completed"
            )}>
                {todo.content}
            </span>
        </div>
    );
}


export default connect(null, { toggleTodo })(Todo);