import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = {};

    if (nextProps.value !== this.state.value) {
      nextState.value = nextProps.value;
    }

    this.setState(nextState);
  }

  render() {
    const todoStyle = {
      textDecoration: this.state.checked && 'line-through'
    };

    return (
      <af-todo-item-view>
        <span af-name="check-box" onClick={this.toggleCheck.bind(this)}>
          {this.state.checked && <span af-name="check" />}
        </span>

        <span af-name="todo" style={todoStyle}>{this.state.value}</span>

        <span af-name="rm-btn" onClick={this.props.removeTodo.bind(this, this.props.id)} />
      </af-todo-item-view>
    );
  }

  toggleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }
}

export default TodoItem;
