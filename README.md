# React Task Manager with Theme Context

A simple task management web application built with React to practice modern UI styling, component-based architecture, and global state management using React Context.

This project focuses on building clean layouts, reusable components, and dynamic theme customization using `useContext`.

---

## Features

- Add and delete tasks
- Responsive card-based layout
- Dynamic theme switching
- Global theme management using Context API
- Modern UI styling with CSS
- Clean component structure

---

## Technologies Used

- React
- JavaScript (ES6+)
- CSS Modules
- Flexbox
- React Context API
- useContext Hook
- Responsive Design

---

## Theme Management (Context API)

This project uses a `ThemeContext` to manage the application's color theme globally.

Instead of passing theme props through multiple components, the app uses:

- `createContext`
- `useContext`
- Context Provider

This allows any component to access and update the theme easily.

### Example usage

```javascript
const { theme, setTheme } = useContext(ThemeContext);