import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoItemElement from './element';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      todo: props.todo,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = {};

    if (nextProps.todo !== this.state.todo) {
      nextState.todo = nextProps.todo;
    }

    this.setState(nextState);
  }

  render() {
    return (
      <af_view-todo-item>
        <check-box onClick={this.toggleCheck.bind(this)}>
          {this.state.checked && <check />}
        </check-box>

        <todo>{this.state.todo}</todo>

        <rm-btn onClick={this.props.removeTodo.bind(this, this.props.index)} />
      </af_view-todo-item>
    );
  }

  toggleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }
}

TodoItemElement.implement({
  render(container, data, callback) {
    ReactDOM.render(<TodoItem {...data} />, container, function () {
      callback(this);
    });
  }
});

export default TodoItem;
