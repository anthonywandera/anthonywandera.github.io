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

const ApiData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(projectData);
  }, 5000);
});

function App() {
  const dispatchFn = useDispatch();

  useEffect(() => {
    async function getApiData() {
      dispatchFn(productsActions.setProducts(await ApiData));
    }

    getApiData();
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
    </>
  );
}

export default App;
