import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

let todoSection;

function renderTodoItem(item) {
  const todo = new Todo(item, "#todo-template", {
    handleToggle: (isComplete) => {
      todoCounter.updateCompleted(isComplete);
    },
    handleDelete: (wasComplete) => {
      todoCounter.updateTotal(false);
      if (wasComplete) {
        todoCounter.updateCompleted(false);
      }
    },
  });

  return todo.getView();
}

todoSection = new Section({
  items: initialTodos,
  renderer: renderTodoItem,
  containerSelector: ".todos__list",
});

const addTodoPopupInstance = new PopupWithForm(
  "#add-todo-popup",
  (formData) => {
    const name = formData.name;
    const dateInput = formData.date;

    const date = dateInput ? new Date(dateInput) : null;
    if (date) {
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    }

    const id = uuidv4();

    const newTodo = { name, date, id, completed: false };

    const todoElement = renderTodoItem(newTodo);
    todoSection.addItem(todoElement);
    todoCounter.updateTotal(true);

    newTodoValidator.resetValidation();
    addTodoPopupInstance.close();
  }
);

addTodoPopupInstance.setEventListeners();

addTodoButton.addEventListener("click", () => {
  addTodoPopupInstance.open();
});

todoSection.renderItems();

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
