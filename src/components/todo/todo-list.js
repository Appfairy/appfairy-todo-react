import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  state = {
    todos: []
  }

  render() {
    return (
      <af_raw-todo-list {ref => ref.bind(this)}>
        <add-btn onClick={this.addTodo.bind(this)} />
        <add-input ref={ref => this.addInput = ref} />

        {this.state.todos.map((todo, index) => (
          <af-todo-item key={index} />
        ))}
      </af_raw-todo-list>
    );
  }

  addTodo() {
    const todo = this.addInput.value;

    this.state.todos.push(todo);

    this.forceUpdate();
  }

  removeTodo(index) {
    this.state.todos.splice(index, 1);

    this.forceUpdate();
  }
}

Appfairy.Controller.define('todo-list', (ctrl, data) => {
  ReactDOM.render(<TodoList />, ctrl, data);
});

export default TodoList;
