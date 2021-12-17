import { connect } from "react-redux";
import { getTodosByCurrentVisibilityFilter } from "../../redux/selectors/selectors";
import { updateTodoAction, toggleTodoAction, deleteTodoAction } from "./../../redux/actions/todoActions";
import Todo from "./Todo";

const TodoList = ({ todos, updateTodoAction, deleteTodoAction, toggleTodoAction }) => {
    const updateTodo = (id, newValue) => {
        updateTodoAction(id, newValue);
    }

    return (
        <div>
            {todos && todos.length ?
                todos.map((todo, index) => {
                    return <Todo key={`todo-${todo.id}`} todo={todo} updateTodo={updateTodo}
                        deleteTodo={deleteTodoAction}
                        toggleTodo={toggleTodoAction}
                    />;
                })
                : "Nothing here!"
            }
        </div>)
};

export default connect(state => ({ todos: getTodosByCurrentVisibilityFilter(state) }),
    { updateTodoAction, deleteTodoAction, toggleTodoAction }
)(TodoList);