import Testimonial from "./Testimonial";
import { testimonialsData } from "../../dummy-api";
import { useState } from "react";
import { left_svg, right_svg } from "../../assets/Icons";

export default function Testimonials() {
  const [curPage, setCurPage] = useState(1);
  const testimonialsPreview = testimonialsData.slice(curPage, curPage + 3);

  function handleClickPrev() {
    setCurPage((prevState) => {
      if (prevState === 1) return prevState;
      return prevState - 1;
    });
  }

  function handleClickNext() {
    setCurPage((prevState) => {
      if (prevState === testimonialsData.length - 1) return prevState;
      return prevState + 1;
    });
  }

  return (
    <section className="section-testimonials" id="testimonials">
      <h2>What they say about me</h2>
      <h3>Testimonials</h3>
      <main className="testimonials">
        <button className="navBtn navBtnLeft" onClick={handleClickPrev}>
          {left_svg}
        </button>
        <button className="navBtn navBtnRight" onClick={handleClickNext}>
          {right_svg}
        </button>
        {testimonialsPreview.map((testimonial, i) => {
          const style = {
            transform: `translate(${i * 0.5}rem,${i * 0.5}rem)`,
            zIndex: `-${i}`,
          };
          return (
            <Testimonial
              key={Math.random()}
              {...testimonial}
              render={i === 0}
              style={style}
            />
          );
        })}
      </main>
    </section>
  );
}
