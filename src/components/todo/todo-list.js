import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todo-item';

class TodoList extends React.Component {
  state = {
    todos: []
  }

  render() {
    return (
      <af_view-todo-list>
        <add-btn onClick={this.addTodo.bind(this)} />
        <add-input ref={ref => this.addInput = ref} />

        <todos>
          {this.state.todos.map((todo, index) => (
            <af-li key={index} index={index} />
          ))}
        </todos>
      </af_view-todo-list>
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

Appfairy.Component.define('todo-list', (container, data) => {
  return ReactDOM.render(<TodoList {...data} />, container);
});

export default TodoList;
