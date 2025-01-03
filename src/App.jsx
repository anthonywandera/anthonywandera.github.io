import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";

import { projectData } from "./dummy-api.js";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "./store/products.jsx";
import Footer from "./components/Footer/Footer.jsx";

const ApiData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(projectData);
  }, 5000);
});

// ############################
function handleObserve(e) {
  const entry = e[0];

  if (entry.isIntersecting) {
    entry.target.classList.add("displayed");
    observer.unobserve(entry.target);
  }
}

const observer = new IntersectionObserver(handleObserve, {
  root: null,
  threshold: "0.2",
});

// ############################
function App() {
  const dispatchFn = useDispatch();

  useEffect(() => {
    async function getApiData() {
      dispatchFn(productsActions.setProducts(await ApiData));
    }

    getApiData();

    // add observer
    document.querySelectorAll("section").forEach((sect) => {
      observer.observe(sect);
    });

    observer.observe(document.querySelector(".stats"));
  }, [dispatchFn]);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
