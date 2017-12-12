import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';
import animations from './animations.scss';
import { css, html } from '~/common/todo/list';
import TodoList from './component';

class TodoListView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = css + animations;
  }

  initializeView(view) {
    view.innerHTML = html;
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
