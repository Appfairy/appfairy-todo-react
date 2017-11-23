import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  state = {
    checked: false,
    todo: ''
  }

  render() {
    return (
      <af_view-todo-item>
        <check-box onClick={this.toggleCheck.bind(this)}>
          {this.state.checked && <check />}
        </check-box>

        <todo>{this.state.todo}</todo>

        <rm-btn af-click="removeItem(index)" />
      </af_view-todo-item>
    );
  }

  toggleCheck() {
    this.setState({
      checked: this.state.checked,
    });
  }
}

Appfairy.Component.define('todo-item', (container, data) => {
  return ReactDOM.render(<TodoItem {...data} />, container);
});

export default TodoItem;
