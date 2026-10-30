# React Children

A React component demo that composes a reusable button and a toggleable sports menu using React's `children` prop.

---

##  Features

- **Compound Menu** – Compose a menu from separate button, dropdown, and menu item components.
- **Reusable Button** – Apply size and visual style variants through component props.
- **Toggleable Dropdown** – Show or hide the sports menu with its button.
- **Dynamic Menu Items** – Render sports options from an array with `map()` and stable keys.
- **Conditional Styling** – Combine optional button classes with `classnames`.
- **Clean Layout** – Style the menu and button components with CSS and the Inter web font.

---

##  Tech Stack

- React 18
- JavaScript (JSX)
- Vite 6
- `@vitejs/plugin-react` (JSX transform + Fast Refresh)
- `classnames` for conditional button styles
- React `children`, `Children.map()`, and `cloneElement()`
- CSS

---

##  Getting Started

Requires Node.js 18 or newer.

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open Browser

Visit http://localhost:5173

---

##  Build for Production

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

---

##  Project Structure

```text
.
├── Button/
│   └── Button.jsx         # Reusable button with style variants
├── Menu/
│   ├── Menu.jsx           # Menu state and child prop composition
│   ├── MenuButton.jsx     # Menu toggle button
│   ├── MenuDropdown.jsx   # Conditionally rendered menu
│   └── MenuItem.jsx       # Sports menu item
├── index.html             # HTML entry point and page metadata
├── index.jsx              # React entry point and example menu
├── package.json           # Scripts and dependencies
├── package-lock.json      # Locked dependency versions
├── style.css              # Component and page styles
└── vite.config.js         # Vite and React plugin configuration
```

---

##  What I Learned

- Composing React components with the `children` prop
- Sharing menu state through props and `cloneElement()`
- Rendering lists with `map()` and stable keys
- Separating reusable UI components into focused modules
- Applying conditional classes with `classnames`

---

##   Author

Leung

##   License

No license is currently specified for this project.
