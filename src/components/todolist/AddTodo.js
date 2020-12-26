import React from "react";
import { connect } from "react-redux";
import { addTodo } from "./../../redux/actions/todoActions";
import { Button, Input } from 'antd';
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = (event) => {
        this.setState({ input: event.target.value });
    };

    handleAddTodo = () => {
        if (this.state.input) {
            this.props.addTodo(this.state.input);
            this.setState({ input: "" });
        }
    }
    render() {
        return (
            <div className="todo-container">
                <Input
                    onChange={this.updateInput}
                    onPressEnter={this.handleAddTodo}
                    value={this.state.input}></Input>
                <Button onClick={this.handleAddTodo}> Add New</Button>
            </div>
        );
    }
}

export default connect(null, { addTodo })(AddTodo); // will bind addTodo action with this component as its props