import React from "react";
import { connect } from "react-redux";
import { addTodo } from "./../../redux/actions/todoActions";
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = (event) => {
        this.setState({ input: event.target.value });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    }
    render() {
        return (
            <div>
                <input
                    onChange={this.updateInput}
                    value={this.state.input}></input>
                <button onClick={this.handleAddTodo}>Add todo</button>
            </div>
        );
    }
}

export default connect(null, { addTodo })(AddTodo); // will bind addTodo action with this component as its props