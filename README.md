# Simple ToDo App

A clean, keyboard-friendly ToDo application built with **vanilla JavaScript**, ES modules, and modular class-based architecture. Users can create tasks with optional dates, mark them complete, delete them, and have their data persist across page reloads using `localStorage`.

This project focuses on **state management, DOM manipulation, validation, and persistence** without using a framework.

---

## 🚀 Live Demo

👉 https://cesar-rosales.github.io/se_project_todo-app/

## 💻 Repository

👉 https://github.com/cesar-rosales/se_project_todo-app

---

## ✨ Features

- Add new todos via popup form (title + optional date)
- Client-side form validation
- Mark todos complete / incomplete
- Delete individual todos
- Persistent data using `localStorage`
- Dynamic completed/total counter
- Responsive, minimal UI

---

## 🧠 Architecture & Concepts

- **ES6 Classes**

  - `Todo` — handles individual todo rendering and interactions
  - `Section` — manages rendering lists of items
  - `PopupWithForm` — reusable popup form logic
  - `FormValidator` — centralized form validation
  - `TodoCounter` — tracks completed vs total items

- **State Management**

  - In-memory state synced with `localStorage`
  - State updates on add, toggle, and delete

- **Accessibility & UX**
  - Keyboard-friendly form
  - Semantic HTML
  - Clear visual feedback for interactions

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (BEM methodology)
- Vanilla JavaScript (ES Modules)
- LocalStorage API

---

## 🔮 Possible Improvements

- Edit existing todos
- Filter by completed / active
- Backend API integration
- React refactor

---

## 📌 Author

**Cesar Rosales**  
Front-End Developer
