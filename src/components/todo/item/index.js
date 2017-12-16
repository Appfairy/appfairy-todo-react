import '~/common/todo/item';

import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './component';

class TodoItemElement extends Appfairy.Element(HTMLElement) {
  get options() {
    return {
      dependent: true
    };
  }

  render(el, data) {
    ReactDOM.render(<TodoItem {...data} />, el);
  }
}

Appfairy.Element.define('todo-item', TodoItemElement);
