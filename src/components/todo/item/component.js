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
    const todoStyle = {
      textDecoration: this.state.checked && 'line-through'
    };

    return (
      <af_view-todo-item>
        <check-box onClick={this.toggleCheck.bind(this)}>
          {this.state.checked && <check />}
        </check-box>

        <todo style={todoStyle}>{this.state.todo}</todo>

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
  get options() {
    return {
      dependent: true,
      events: {
        stopPropagation: true,
      }
    };
  },

  render(container, data, callback) {
    ReactDOM.render(<TodoItem {...data} />, container, function () {
      callback(this);
    });
  }
});

export default TodoItem;
