# After School Hub

An interactive after-school educational course booking web application built with **Vue.js**, **HTML5**, and **CSS3**. The application allows students and parents to browse after-school lessons, filter and sort courses dynamically, track remaining inventory in real time, manage a shopping cart, and submit validated checkout orders.

---

## Table of Contents

- [Features](#features)
  - [1. Lesson Catalogue](#1-lesson-catalogue)
  - [2. Multi-Attribute Sorting](#2-multi-attribute-sorting)
  - [3. Dynamic Filtering](#3-dynamic-filtering)
  - [4. Shopping Cart Management](#4-shopping-cart-management)
  - [5. Checkout & Validation](#5-checkout--validation)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Attribution & Credits](#attribution--credits)

---

## Features

### 1. Lesson Catalogue

- **Reactive Rendering:** Lessons are dynamically rendered using Vue's `v-for` directive from `assets/products.js`.
- **Lesson Information:** Each lesson displays:
  - Subject and title
  - Location
  - Price (GBP £)
  - Spaces remaining (live calculation: `availableInventory - cartCount`)
  - Instructor name, difficulty level, and topics covered
  - Course icon / image and star rating
- **Inventory Tracking:**
  - Real-time stock status badge: *"Only X left"* when fewer than 5 spaces remain, or *"All Out"* when 0 spaces remain.
  - The **"Add to Cart"** button automatically disables when no spaces remain.

### 2. Multi-Attribute Sorting

- Users can sort lessons by any of the following attributes:
  - **Title**
  - **Price**
  - **Spaces (Availability)**
  - **Subject**
  - **Location**
  - **Instructor**
- Sorting direction can be toggled between:
  - **Ascending** (A–Z / Low to High)
  - **Descending** (Z–A / High to Low)

### 3. Dynamic Filtering

- Interactive dropdown filters for **Subject**, **Location**, and **Instructor**.
- Filter options are reactively extracted from the lesson catalogue (`uniqueSubjects`, `uniqueLocations`, `uniqueInstructors`).
- Live lesson count display showing matches found.
- One-click **"Clear Filters"** button when filters are active.

### 4. Shopping Cart Management

- **Cart Button:** Header cart toggle button is disabled when the cart is empty; displays a live badge of total items added.
- **Cart View:** Dedicated shopping cart screen displaying:
  - Grouped lesson items with image, title, location, and unit price.
  - Interactive quantity controls (`+` / `-`) to add or remove individual spaces.
  - Line subtotal for each lesson and aggregate total price calculation.
  - Complete removal button to clear all spaces of a specific lesson.
  - Removing lessons instantly restores available spaces back to the catalogue.
  - Friendly empty-state display when the cart contains no items.

### 5. Checkout & Validation

- **Integrated Checkout:** Accessible directly from the shopping cart.
- **Strict Client-side Validation (Regular Expressions):**
  - **Full Name:** Letters and spaces only (`/^[A-Za-z\s]+$/`).
  - **Phone Number:** Numbers only (`/^[0-9]+$/`).
  - Real-time visual feedback indicators (green checkmark for valid inputs, red alert for invalid inputs).
- **Order Placement:** The **"Place Order"** button remains strictly disabled until valid name and phone values are supplied and the cart is not empty.
- **Live Order Preview:** Displays an immediate summary of ordered items, total cost, and entered customer details.
- **Confirmation:** Submitting the order displays an alert confirmation and resets the cart and form state.

---

## Technology Stack

- **Front-End Framework:** [Vue.js 2 (v2.7.8)](https://vuejs.org/) (CDN)
- **Markup & Structure:** HTML5
- **Styling:** CSS3 (Custom CSS featuring CSS Grid, Flexbox, and sticky positioning)
- **Icons:** [Font Awesome 5](https://fontawesome.com/) & [Icons8](https://icons8.com/)
- **Data Source:** Vanilla JavaScript (`products.js`)

---

## Project Structure

```text
CST3144-CW1/
├── assets/
│   ├── app.js             # Vue.js application instance, data state, methods & computed properties
│   ├── products.js        # Lesson data array (topics, instructor, price, inventory, location, etc.)
│   └── style.css          # Custom stylesheet for catalogue layout, cart, checkout, and responsive design
├── index.html             # Main single-page application entry point
├── package.json           # Project manifest
└── readme.md              # Project documentation
```

---

## Getting Started

### Prerequisites

No build step or package installation is required to run the client-side application. A modern web browser (Google Chrome, Firefox, Safari, or Microsoft Edge) is all that is needed.

### Running the Application

1. **Directly via Browser:**
   - Double-click `index.html` or right-click and choose **Open with** -> your preferred web browser.

2. **Using a Local Development Server (Recommended):**
   - **VS Code Live Server:** Right-click `index.html` in VS Code and select **"Open with Live Server"**.
   - **Node.js `serve` / `http-server`:**
     ```bash
     npx serve .
     ```
   - **Python:**
     ```bash
     python -m http.server 8000
     ```
   - Navigate to `http://localhost:8000` (or the port indicated) in your web browser.

---

## Attribution & Credits

- Coursework coursework specification: Middlesex University Dubai — CST3144 Full Stack Development.
- Course subject icons: [Icons8](https://icons8.com/).
- UI icons and glyphs: [Font Awesome](https://fontawesome.com/).
