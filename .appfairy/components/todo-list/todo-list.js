import Appfairy from 'appfairy';

class TodoList extends Appfairy.View(HTMLElement) {
  initializeShadowRoot(shadow) {
    const style = document.createElement('style');
    style.innerHTML = `.todo-list > *:nth-child(1) { background-color: rgb(50, 165, 255); position: absolute; transform-origin: calc(50% + 0px) calc(0% + 0px) 0px; border-style: solid; border-width: 0px; border-radius: 0px; left: calc(50% + 0px); top: calc(0% + 0px); width: calc(0% + 700px); height: calc(0% + 150px); transform: translate(calc(0.000322% + -350px), calc(-9.57913e-16% + 0px)) rotate(0rad); overflow: hidden; } .todo-list > *:nth-child(1) > *:nth-child(1) { background-color: rgba(255, 255, 255, 0); position: absolute; transform-origin: calc(0% + 0px) calc(0% + 0px) 0px; border-style: solid; border-width: 0px; border-radius: 0px; overflow: hidden; left: calc(0% + 15px); top: calc(0% + 15.2541px); color: rgb(255, 255, 255); font-family: Arial; text-align: start; font-size: 30pt; white-space: nowrap; line-height: calc(100% + 0pt); font-weight: bold; transform: translate(calc(0% + 0px), calc(0% + 0px)) rotate(0rad); } .todo-list > *:nth-child(1) > *:nth-child(2) { background-color: rgba(255, 255, 255, 0); position: absolute; transform-origin: calc(100% + 0px) calc(0% + 0px) 0px; border-style: solid; border-width: 0px; border-radius: 0px; overflow: hidden; left: calc(100% + -15px); top: calc(0% + 15px); color: rgb(255, 255, 255); font-family: Arial; text-align: center; font-size: 30pt; white-space: nowrap; line-height: calc(100% + 0pt); font-weight: bold; transform: translate(calc(-100% + 0px), calc(-1.80147e-14% + 0px)) rotate(0rad); } .todo-list > *:nth-child(1) > *:nth-child(3) { background-color: rgba(255, 255, 255, 0); position: absolute; transform-origin: calc(50% + 0px) calc(100% + 0px) 0px; border-style: solid; border-width: 0px 0px 2px; border-radius: 0px; left: calc(50% + 0px); top: calc(100% + -10px); width: calc(100% + -20px); height: calc(0% + 50px); border-color: rgb(192, 192, 192) rgb(192, 192, 192) rgb(255, 255, 255); transform: translate(calc(-51.4705% + 10px), calc(0.0131491% + -50px)) rotate(0rad); overflow: hidden; } .todo-list > *:nth-child(2) { background-color: rgb(255, 255, 255); position: absolute; transform-origin: calc(50% + 0px) calc(0% + 0px) 0px; border-style: solid; border-width: 0px; border-radius: 0px; overflow: auto; left: calc(50% + 0px); top: calc(0% + 150px); width: calc(0% + 700px); height: calc(100% + -150px); padding: 0px; transform: translate(calc(0.000210929% + -350px), calc(0% + 0px)) rotate(0rad); } .todo-list > *:nth-child(2) > *:nth-child(2) { list-style: none; white-space: nowrap; margin: 0px; padding: 0px; width: 100%; height: 100%; }`;

    const view = document.createElement('div');
    view.className = 'todo-list';
    view.innerHTML = `<div _id="af-jaafuiv3" _type="div"><div _id="af-jaafzt2a" _type="text"><span class="_container"><div>New todo</div></span></div><div _id="af-jaag1iyx" _type="text" _ref="add-btn"><span class="_container"><div>➕</div></span></div><div _id="af-jaag47lh" _type="input" _ref="todo-input"><style class="_style">._input { background-color: rgba(255, 255, 255, 0); position: absolute; transform-origin: calc(0% + 0px) calc(50% + 0px) 0px; border-style: solid; border-width: 0px; border-radius: 0px; overflow: hidden; left: calc(0% + 0px); top: calc(50% + 0px); color: rgb(0, 0, 0); font-family: Arial; text-align: start; font-size: 30pt; white-space: nowrap; line-height: calc(100% + 0pt); transform: translate(calc(-6.47825e-16% + 0px), calc(-50% + 0px)) rotate(0rad); display: none; width: 100%; height: 100%; } ._input::placeholder { background-color: rgba(255, 255, 255, 0); position: absolute; transform-origin: calc(0% + 0px) calc(50% + 0px) 0px; border-style: solid; border-width: 0px; border-radius: 0px; overflow: hidden; left: calc(0% + 0px); top: calc(50% + 0px); color: rgb(192, 192, 192); font-family: Arial; text-align: start; font-size: 30pt; white-space: nowrap; line-height: calc(100% + 0pt); }</style><input class="_input" value="


" placeholder="Type here..."></input></div></div><div _id="af-jaagmacc" _type="ul" _ref="todos" _component="todo-item"><style class="_item-style">._items-container:first-of-type > ._item { position: relative; height: 70px; width: 100%; margin: 0px; display: block; }</style><ul class="_items-container"><af-todo-item class="_item"></af-todo-item><af-todo-item class="_item"></af-todo-item><af-todo-item class="_item"></af-todo-item></ul></div>`;

    Object.assign(view.style, {
      position: 'relative',
      width: '100%',
      height: '100%',
    });

    shadow.appendChild(style);
    shadow.appendChild(view);
  }
}

export default Appfairy.View.define(TodoList);
