import dashboard from "../assets/dashboardImg.png";
import weather from "../assets/weatherappImg.png";
import storeImg from "../assets/storeImg.png";
import foodAppImg from "../assets/foodimg.png";

export const project = [
  {
    title: "Responsive Admin Dashboard",
    description:
      "A fully responsive admin dashboard built with modern UI principles. It includes key features like analytics display, user management, and dynamic routing. The interface supports both light and dark themes, allowing users to toggle modes globally.",
    image: dashboard,
    link: "https://tailwind-res-dashboard-with-darkmode.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A sleek weather app that provides real-time weather data and a 5-day forecast, utilizing the OpenWeatherMap API.",
    image: weather,
    link: "https://weather-app-nu-wheat-78.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website built with React, Tailwind CSS, and Redux Toolkit for state management. The site features a clean, responsive design and offers smooth product browsing.",
    image: storeImg,
    link: "https://kaida-store.vercel.app/",
  },
  {
    title: "Food Ordering App",
    description:
      "A modern food ordering platform built with Next.js and TailwindCSS, featuring Zustand for smooth state management and persistent cart functionality.",
    image: foodAppImg, 
    // link: "https://your-food-app.vercel.app/", 
    link: "https://food-app-delta-lake.vercel.app/",
  },
];
