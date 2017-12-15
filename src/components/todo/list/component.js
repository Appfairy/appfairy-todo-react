import React from 'react';

class TodoList extends React.Component {
  get todoInput() {
    return this._todoInput.target;
  }

  set todoInput(ref) {
    return this._todoInput = ref;
  }

  state = {
    todos: []
  }

  constructor(props) {
    super(props);

    this._currId = 0;
  }

  render() {
    return (
      <af-todo-list-view>
        <span af-plug="add-btn" onClick={onAddBtnClick.bind(this)} />
        <span af-plug="todo-input"
              onKeyDown={onTodoInputKeyDown.bind(this)}
              ref={ref => this.todoInput = ref} />

        <ul af-plug="todos">
          {this.state.todos.map(({ id, value }) => (
            <li key={id} af-scope="todo" data-id={id} data-value={value} />
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
      id: this._currId++,
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

export default TodoList;
