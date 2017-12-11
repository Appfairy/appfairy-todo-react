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
        <span af-plug="check-box" onClick={this.toggleCheck.bind(this)}>
          {this.state.checked && <span af-plug="check" />}
        </span>

        <span af-plug="todo" style={todoStyle}>{this.state.value}</span>

        <span af-plug="rm-btn" onClick={this.props.removeTodo.bind(this, this.props.id)} />
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
