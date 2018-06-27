import '~/common/todo/list';

import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';

const hash = prop => new Appfairy.Reference(prop);

class TodoList extends React.Component {
  get todoInput() {
    return this._todoInput;
  }

  set todoInput(ref) {
    this._todoInput = ref && ref.target;
  }

  state = {
    todos: []
  }

  constructor(props) {
    super(props);

    this.currId = 0;
  }

  render() {
    return (
      <af-todo-list-view>
        <span af-plug="add-btn" onClick={onAddBtnClick.bind(this)} />
        <span af-plug="todo-input"
              onKeyDown={onTodoInputKeyDown.bind(this)}
              ref={ref => this.todoInput = ref} />

        <ul af-plug="todos">
          {this.state.todos.map(todo => (
            <li key={todo.id}
                data-todo={hash(todo)}
                data-remove-todo={hash(this.removeTodo.bind(this))} />
          ))}
        </ul>
      </af-todo-list-view>
    );
  }

  submitTodoInput() {
    const value = this.todoInput.value;

    if (!value) return;

    this.todoInput.value = '';
    this.addTodo(value);
  }

  addTodo(todo) {
    this.state.todos.push({
      id: this.currId++,
      value: todo,
    });

    this.forceUpdate();
  }

  removeTodo(id) {
    const todo = this.state.todos.find(todo => todo.id == id);

    if (!todo) return;

    const index = this.state.todos.indexOf(todo);
    this.state.todos.splice(index, 1);

    this.forceUpdate();
  }
}

function onAddBtnClick() {
  this.submitTodoInput();
}

function onTodoInputKeyDown(e) {
  if (e.key != 'Enter') {
    return;
  }

  this.submitTodoInput();
}

class TodoListElement extends Appfairy.Element(HTMLElement) {
  render(el, data) {
    ReactDOM.render(<TodoList {...data} />, el);
  }
}

Appfairy.Element.define('todo-list', TodoListElement);
