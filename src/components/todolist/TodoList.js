import { connect } from "react-redux";
import { getTodos } from "../../redux/selectors/selectors";

const TodoList = ({ todos }) => {
    return (<ul>
        {todos && todos.length ?
            todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            : "No Todos, yay!"
        }
    </ul>)
};

// const mapStateToProps = state => {
//     const { byIds, allIds } = state.todos || {};
//     const todos =
//         allIds && allIds.length ? allIds.map(id => { byIds ? { ...byIds[id], id } : null }) : null; // {content, completed, id}
//     return { todos };
// }
export default connect(state => ({ todos: getTodos(state) }))(TodoList);