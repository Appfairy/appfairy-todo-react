import React from 'react';
import ReactDOM from 'react-dom';
import TodoListElement from './element';

class TodoList extends React.Component {
  get addInput() {
    return this._addInput.target;
  }

  set addInput(ref) {
    return this._addInput = ref;
  }

  state = {
    todos: []
  }

  constructor(props) {
    super(props);

    this._currId = 0;

    this.afScopes = {
      todo: {
        removeTodo: this.removeTodo.bind(this),
      }
    };
  }

  render() {
    return (
      <af_view-todo-list>
        <add-btn onClick={onAddBtnClick.bind(this)} />
        <todo-input onKeyDown={onTodoInputKeyDown.bind(this)}
                    ref={ref => this._addInput = ref} />

        <todos>
          {this.state.todos.map(({ id, value }) => (
            <af-li key={id} scope="todo" data-id={id} data-value={value} />
          ))}
        </todos>
      </af_view-todo-list>
    );
  }

  submitTodoInput() {
    const value = this.addInput.value;

    if (!value) return;

    this.addInput.value = '';
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

TodoListElement.implement({
  get options() {
    return {
      events: {
        stopPropagation: true,
      }
    };
  },

  render(container, data, callback) {
    ReactDOM.render(<TodoList {...data} />, container, function () {
      callback(this);
    });
  }
});

export default TodoList;
