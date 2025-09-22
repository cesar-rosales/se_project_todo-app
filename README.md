# FocusList app

Small, keyboard-friendly Todo app built with vanilla JavaScript and ES modules. Add tasks with dates, mark them complete, and remove them—powered by two focused classes: Todo (UI item) and FormValidator (client-side validation).

## Features

-Create todos (title + optional date)
-Mark complete or unmark
-Delete
-Live client-side validation (errors + disabled submit)
-Keyboard-friendly focus states
-ES Modules with single-responsibility classes\

## How it works
-Todo: renders a todo card and attaches its own event listeners. Single responsibility: display + behavior of one todo item.
-FormValidator: manages input validity, error messages, and submit button state for one form. Single responsibility: validation UI + logic.

Submit:
-User submits → new Todo is created and inserted.
-validator.resetValidation() clears inputs, clears errors, and disables submit (per spec).

## Technology

-HTML5, CSS3
-Vanilla JavaScript (ES Modules)
-Form validation using HTML5 constraints + custom UI states
-UUID for unique ids if you add persistence/advanced features

## Deployment

This project is deployed on GitHub Pages:

Live Demo:
