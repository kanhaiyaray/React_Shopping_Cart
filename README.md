# 🛒 React Shopping Cart 2026

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript"/>
  <img src="https://img.shields.io/badge/Architecture-Scalable-success"/>
  <img src="https://img.shields.io/badge/State-Managed-orange"/>
</p>

<p align="center">
  <b>🚀 Production-Ready Shopping Cart built with React</b><br/>
  <i>Focused on scalable architecture, optimized state management & real-world cart logic</i>
</p>

---

## 🧠 System Design Overview

This project is structured using **component-driven architecture** and **centralized state management**, ensuring scalability and maintainability.

### 🔁 Data Flow

```
Products Data → ProductList → ProductCard → Cart Actions → Global State → Cart UI
```

---

## 🧩 Core Components (Exact Structure)

```
src/
│
├── components/
│   ├── Header.js          # Navbar & cart indicator
│   ├── ProductList.js     # Renders all products
│   ├── ProductCard.js     # Individual product UI
│   ├── Cart.js            # Cart container
│   ├── CartItem.js        # Single cart item
│
├── context/
│   └── CartContext.js     # Global cart state
│
├── data/
│   └── products.js        # Static product data / API
│
├── App.js                 # Root component
└── index.js               # Entry point
```

---

## ⚙️ Core Features

### 🛍️ Product Management

* Dynamic rendering using `.map()`
* Reusable product card components

### 🛒 Cart System

* Add to cart
* Remove from cart
* Update quantity
* Real-time total calculation

### ⚡ Performance

* Efficient re-renders using React state
* Minimal prop drilling via Context API

---

## 🧠 Cart Logic (Real Explanation)

### ➕ Add to Cart Algorithm

```javascript
const addToCart = (product) => {
  const exist = cartItems.find(item => item.id === product.id);

  if (exist) {
    setCartItems(cartItems.map(item =>
      item.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item
    ));
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};
```

### ❌ Remove from Cart

```javascript
const removeFromCart = (product) => {
  const exist = cartItems.find(item => item.id === product.id);

  if (exist.qty === 1) {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  } else {
    setCartItems(cartItems.map(item =>
      item.id === product.id
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  }
};
```

### 💰 Total Price Calculation

```javascript
const totalPrice = cartItems.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);
```

---

## 🏗️ Architectural Decisions

### ✅ Why Context API?

* Avoids prop drilling
* Centralized state
* Scales better than local state

### ✅ Why Component Separation?

* Improves reusability
* Easier debugging
* Clean codebase

### ✅ Why Functional Components?

* Hooks simplify lifecycle logic
* Better readability

---

## 🛠️ Tech Stack

| Layer   | Technology             |
| ------- | ---------------------- |
| UI      | ⚛️ React.js            |
| Logic   | 🧠 JavaScript (ES6+)   |
| State   | 🔄 Context API + Hooks |
| Styling | 🎨 CSS                 |
| Tooling | 📦 npm                 |

---

## ⚙️ Setup Instructions

```bash
npm install
npm start
```

---

## 📈 Performance Considerations

* Avoid unnecessary re-renders using state updates carefully
* Use key props in lists for efficient DOM diffing
* Keep components small & focused

---

## 🔮 Future Enhancements (System Design Level)

* 🔐 Authentication (JWT)
* 💳 Payment Gateway Integration
* 🌐 Backend (Node.js + Express + MongoDB)
* 🧠 Global State via Redux Toolkit
* ⚡ Lazy Loading & Code Splitting

---

## 🤝 Contributing

```bash
git checkout -b feature/advanced-feature
git commit -m "Added new feature"
git push origin feature/advanced-feature
```

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Kanhaiya**

---

## 💡 Why This Project Stands Out

✔ Demonstrates real-world eCommerce logic
✔ Clean scalable architecture
✔ Strong React fundamentals
✔ Recruiter-friendly code structure

