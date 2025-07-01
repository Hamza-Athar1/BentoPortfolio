# Ameer Hamza Portfolio

A modern, responsive portfolio website built with **React** and **Vite**. Showcases projects, services, achievements, and skills of Ameer Hamza Athar.

## Features

- Responsive design with custom layouts for large, medium, and small screens
- Animated marquees for skills, services, and highlights
- Project gallery with images and external links
- Downloadable resume
- Sections for services, workflow, achievements, and timeline
- Social and contact links
- Built with Tailwind CSS for rapid styling

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)

## Project Structure

```
├── public/
│   ├── AMEER_HAMZA_RESUME.pdf
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   │   ├── AC.png
│   │   ├── Aiaura.png
│   │   ├── ReactMini.png
│   │   └── react.svg
│   ├── components/
│   │   ├── BentoGridLg.jsx
│   │   ├── BentoGridMd.jsx
│   │   ├── BentogridXs.jsx
│   │   ├── Carousel.jsx
│   │   ├── Navbar.jsx
│   │   └── ServiceCarousel.jsx
│   ├── componentStyles/
│   │   └── Carousel.css
│   └── pages/
│       ├── Services.jsx
│       └── Works.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Building for Production

```sh
npm run build
# or
yarn build
```

The output will be in the `dist/` directory.

## Customization

- **Resume:** Replace `public/AMEER_HAMZA_RESUME.pdf` with your own resume file.
- **Images:** Update images in `src/assets/` as needed.
- **Content:** Edit the components in `src/components/` and pages in `src/pages/` to update your information, projects, and services.

## License

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio.

---

**Made with ❤️ by Ameer Hamza Athar**
