# INXCODE Company Portfolio Website

A modern, responsive company portfolio website built with **React (Vite)** and **Tailwind CSS**.  
This website showcases the company’s services, team members, portfolio/projects, and provides ways for clients to get in touch. It uses **modern UI design principles** such as **glassmorphism**, hover animations, and responsive layouts.

---

## 🚀 Features
- **Hero Section** – Engaging introduction with CTA buttons  
- **About Section** – Company overview and mission  
- **Services Section** – Modern service cards with icons & hover effects  
- **Projects/Portfolio** – Showcase of past projects with images and details  
- **Our Team Section** – Team members with image, role, email, and description  
- **Contact Form** – Functional form for inquiries  
- **Footer** – Social media links, contact info, and branding  

---

## 🛠️ Tech Stack
- **React (Vite)** – Frontend framework for fast builds  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **React Icons / Feather Icons** – Modern icons  
- **Glassmorphism UI** – Modern, elegant design style  

---

## 📂 Folder Structure
inxcode
├── public
├── src/
│ ├── assets/ # Images (team, projects,)
│ ├── components/ # Reusable components (Navbar, Footer, etc.)
│ ├── pages/ # Page components (Home, About, Services, Contact, etc.)
│ ├── data/ # JSON files (services, projects, team members)
│ ├── App.jsx # Main app component
│ ├── main.jsx # Entry point
│ └── index.css # Tailwind base styles
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md



---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/inxcode-portfolio.git
   cd inxcode-portfolio
2. Install dependencies
npm install


3. Run the development server
npm run dev


4. Build for production
npm run build2


🎨 Design Decisions

Glassmorphism Cards: Used for services, projects, and team sections to give a futuristic look

Responsive Layout: Built with Tailwind’s grid & flex utilities for all screen sizes

Hover Animations: Subtle scaling & color changes for interactivity

Consistent Branding: Blue + Sky gradient accents for modern professional feel

Reusable JSON Data: Services, projects, and team members are stored in JSON for easy editing