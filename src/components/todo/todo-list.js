import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  state = {
    todos: []
  }

  constructor(props) {
    super(props);

    debugger;

    Appfairy.Component.define(this);

    this.afChildScopes = {
      todo: {
        removeTodo: this.removeTodo.bind(this)
      }
    };
  }

  render() {
    return (
      <af_view-todo-list>
        <add-btn onClick={onAddBtnClick.bind(this)} />
        <add-input ref={ref => this.addInput = ref} />

        <todos>
          {this.state.todos.map((todo, index) => (
            <af-li key={index} index={index} af-scope="todo" />
          ))}
        </todos>
      </af_view-todo-list>
    );
  }

  addTodo(todo) {
    this.state.todos.push(todo);

    this.forceUpdate();
  }

  removeTodo(index) {
    this.state.todos.splice(index, 1);

    this.forceUpdate();
  }
}

function onAddBtnClick() {
  this.addTodo(this.addInput.value);
}

Appfairy.Element.get('todo-list').extend({
  render(container, data) {
    ReactDOM.render(<TodoList {...data} />, container);
  }
});

export default TodoList;
