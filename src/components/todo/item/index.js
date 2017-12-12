import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';
import { css, html } from '~/common/todo/item';
import TodoItem from './component';

class TodoItemView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = css;
  }

  initializeView(view) {
    view.innerHTML = html;
  }
}

Appfairy.View.define('todo-item', TodoItemView);

class TodoItemElement extends Appfairy.Element(HTMLElement) {
  get options() {
    return {
      dependent: true,
      useMountPoint: false,
    };
  }

  render(el, data) {
    ReactDOM.render(<TodoItem {...data} />, el);
  }
}

Appfairy.Element.define('todo-item', TodoItemElement);
