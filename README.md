# ALX Listing App

## 📌 Project Overview
The **ALX Listing App** is a simplified Airbnb clone focused on creating a property listing page.  
The goal of this project is to practice building reusable components with **Next.js**, **TypeScript**, and **TailwindCSS**, while following clean coding practices and a scalable folder structure.  

This milestone sets up the **foundation** for the project, ensuring we have a maintainable codebase for future feature development.

---

## 🗂 Project Structure

alx-listing-app/
│── components/ # Reusable UI components

│ └── common/ # Shared components like Card and Button

│── constants/ # Store app-wide constants (API URLs, static text, etc.)

│── interfaces/ # TypeScript interfaces for props and types

│── pages/ # Next.js Pages Router (entry points for routes)

│── public/assets/ # Images, SVGs, and static assets

│── styles/ # Global styles (Tailwind setup)

│── README.md # Project documentation

│── tailwind.config.js # TailwindCSS configuration

│── tsconfig.json # TypeScript configuration



### 🔹 Directories Explained
- **`components/`** → Contains reusable UI building blocks (e.g., Card, Button).
- **`interfaces/`** → Holds TypeScript interfaces (`CardProps`, `ButtonProps`, etc.) to enforce type safety.
- **`constants/`** → Stores constants such as API URLs, UI labels, or placeholder data.
- **`public/assets/`** → Contains static files like images and icons that can be served directly.

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd alx-listing-app
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open in browser
Visit http://localhost:3000 to view the app.

🎯 Milestone Objective
The objective of this milestone is to scaffold the Airbnb clone project by:

Creating a basic Next.js app with TypeScript, ESLint, and TailwindCSS.

Setting up a clean and maintainable folder structure.

Preparing reusable Card and Button components.

Defining interfaces and constants for consistency.

Organizing assets for easy access.

This foundation ensures the project is ready for building the property listing page and future features.
