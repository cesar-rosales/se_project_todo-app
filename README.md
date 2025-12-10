# Simple ToDO app

Small, keyboard-friendly Todo app built with vanilla JavaScript and ES modules. Add tasks with dates, mark them complete, and remove them—powered by two focused classes: `Todo` (UI item) and `FormValidator` (client-side validation).

## Features

- Add new todos via popup form (title + optional date)
- Mark complete / incomplete
- Delete individual todos
- Live completion counter ("Showing X out of Y completed")
- Client-side validation (inline errors, disabled submit)
- Todos rendered dynamically using a Section class
- Reusable popup system with close-on-overlay + Escape key
- Clean modular structure using ES modules and single-responsability classes

## New Architecture

This sprint introduced a full refactor of the Todo app into modular, loosely-coupled components:

- **Section**  
  Renders lists of items and inserts new todos into the DOM.
- **Popup**  
  Base popup class that handles opening, closing, Escape key events, and overlay clicks.
- **PopupWithForm**  
  Extends Popup and handles form submission + input collection.
- **TodoCounter**  
  Tracks total todos and total completed; updates UI live on add, toggle, and delete.

These components interact only through public methods, keeping the architecture clean and scalable.

## How it works

### Todo

Responsible for rendering one todo item (name,date,checkbox,delete button) and attaching item specific event listeners (toggle + delete)

### Section

Takes an array of todos and a renderer function.
Controls rendering on page load and inserting new items.

### Popup & PopupWithForm

Reusable modal components.
Popup handles open/close logic; PopupWithForm adds form submission handling.

### TodoCounter

Listens to item events (add, toggle, delete) and updates the counter text:
"Showing X out of Y completed".

### FormValidator

Handles inline validation, error messages, and submit button state for the popup form.

## App Flow

1. Section renders all initial todos.
2. TodoCounter calculates starting tot
3. User opens popup → PopupWithForm handles input + validation.
4. On submit → new Todo instance → Section inserts it → TodoCounter updates totals.
5. Checkbox toggle → Todo triggers callback → TodoCounter updates completed count.
6. Delete → Todo triggers callback → Section removes item → TodoCounter updates totals.

## Technology

- HTML5, CSS3
- Vanilla JavaScript (ES Modules)
- Form validation using HTML5 constraints + custom UI states
- (Optional) UUID for unique IDs if you add persistence
- Object-oriented architecture with reusable components
- Popup system implemented with inheritance (Popup → PopupWithForm)

## Project Structure

/src  
 /components  
 - Todo.js  
 - Section.js  
 - Popup.js  
 - PopupWithForm.js  
 - TodoCounter.js  
 - FormValidator.js  
 /utils  
 - constants.js  
 /pages  
 - index.js  
 /templates  
 - todo-template (inside index.html)

## Deployment

This project is deployed on GitHub Pages:

**Live Demo:** https://cesar-rosales.github.io/se_project_todo-app/
