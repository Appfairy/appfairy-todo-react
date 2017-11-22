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
      <af_raw-todo-item>
        <check-box onClick={this.toggleCheck.bind(this)}>
          {this.state.checked && <check />}
        </check-box>

        <todo>{this.state.todo}</todo>

        <rm-btn af_submit-click="removeItem(key)" />
      </af_raw-todo-item>
    );
  }

  toggleCheck() {
    this.setState({
      checked: this.state.checked,
    });
  }
}

Appfairy.Controller.define('todo-item', (ctrl, data) => {
  ReactDOM.render(<TodoItem />, ctrl, data);
});

export default TodoItem;
