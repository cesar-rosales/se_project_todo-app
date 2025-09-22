class Todo {
  constructor(data, selector) {
    this._data = data;
    this._config = {
      nameSelector: ".todo__name",
      checkboxSelector: ".todo__completed",
      labelSelector: ".todo__label",
      dateSelector: ".todo__date",
      deleteBtnSelector: ".todo__delete-btn",
    };
    this._todoTemplate = document.querySelector(selector);
  }
  setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
    this.todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });
  }
  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(
      this._config.checkboxSelector
    );
    this._todoLabel = this._todoElement.querySelector(this._config.labelSelector);
    this._todoCheckboxEl.checked = Boolean(this._data.completed);
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._todoTemplate.content
      .querySelector(".todo")
      .cloneNode(true);
    this.todoNameEl = this._todoElement.querySelector(this._config.nameSelector);
    this.todoDate = this._todoElement.querySelector(this._config.dateSelector);
    this.todoDeleteBtn = this._todoElement.querySelector(
      this._config.deleteBtnSelector
    );

    // Use seperate method to implement dates
    this.todoNameEl.textContent = this._data.name;
    this.todoDate.textContent = this._data.date
      ? new Date(this._data.date).toLocaleDateString()
      : "";

  
    this._generateCheckboxEl();
    this.setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
