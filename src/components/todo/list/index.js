import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component';
import styleSheet from './style.scss';
import viewHTML from './view.html';

class TodoListView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = styleSheet;
  }

  initializeView(view) {
    view.innerHTML = viewHTML;
  }
}

Appfairy.View.define('todo-list', TodoListView);

class TodoListElement extends Appfairy.Element(HTMLElement) {
  get options() {
    return {
      useMountPoint: false
    };
  }

  get childScopes() {
    return {
      todo: {
        removeTodo: (id) => {
          this.component.removeTodo(id);
        }
      }
    };
  }

  render(el, data) {
    const self = this;

    ReactDOM.render(<TodoList {...data} />, el, function () {
      self.component = this;
    });
  }
}

Appfairy.Element.define('todo-list', TodoListElement);
