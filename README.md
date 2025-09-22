# FocusList

Small, keyboard-friendly Todo app built with vanilla JavaScript and ES modules. Add tasks with dates, mark them complete, and remove them—powered by two focused classes: `Todo` (UI item) and `FormValidator` (client-side validation).

## Features
- Create todos (title + optional date)
- Mark complete / unmark
- Delete
- Live client-side validation (inline errors, disabled submit when invalid)
- Keyboard-friendly focus states
- ES Modules with single-responsibility classes

## How it works
- **Todo**: renders a todo card and attaches its own event listeners.  
  _Single responsibility: display + behavior of one todo item._
- **FormValidator**: manages input validity, error messages, and submit button state for one form.  
  _Single responsibility: validation UI + logic._

**Submit flow**
1. User submits → new `Todo` is created and inserted.
2. `validator.resetValidation()` clears inputs, clears errors, and disables submit (per spec).

## Technology
- HTML5, CSS3
- Vanilla JavaScript (ES Modules)
- Form validation using HTML5 constraints + custom UI states
- (Optional) UUID for unique IDs if you add persistence

## Deployment
This project is deployed on GitHub Pages:

**Live Demo:** https://cesar-rosales.github.io/todo-app-project/
