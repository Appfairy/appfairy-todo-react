import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './component';
import styleSheet from './style.scss'
import viewHTML from './view.html';

class TodoItemView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = styleSheet;
  }

  initializeView(view) {
    view.innerHTML = viewHTML;
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
