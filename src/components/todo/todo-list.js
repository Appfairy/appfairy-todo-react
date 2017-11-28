import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  state = {
    todos: []
  }

  constructor(props) {
    super(props);

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
        <todo-input ref={ref => this.addInput = ref} />

        <todos>
          {this.state.todos.map((todo, index) => (
            <af-li key={index} scope="todo" data-index={index} />
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
  render(container, data, callback) {
    ReactDOM.render(<TodoList {...data} />, container, callback);
  }
});

export default TodoList;
