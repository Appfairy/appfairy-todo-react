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

        <rm-btn onClick={this.afScope.removeItem(this.props.index)} />
      </af_view-todo-item>
    );
  }

  toggleCheck() {
    this.setState({
      checked: this.state.checked,
    });
  }
}

Appfairy.Element.get('todo-item').extend({
  render(container, data, callback) {
    ReactDOM.render(<TodoItem {...data} />, container, callback);
  }
});

export default TodoItem;
