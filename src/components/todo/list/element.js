import Appfairy from 'appfairy';
import ReactDOM from 'react-dom';
import styleSheet from './style.scss'
import viewHTML from './view.html';

class TodoListView extends Appfairy.View(HTMLUListElement) {
  initializeStyle(style) {
    style.innerHTML = styleSheet;
  }

  initializeView(view) {
    view.innerHTML = viewHTML;
  }
}

export default Appfairy.View.define('todo-list', TodoListView, {
  extends: 'ul'
});
