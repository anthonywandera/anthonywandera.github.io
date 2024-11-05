const featureCardsEl = document.querySelector(".feature-cards");
const obsOpts = {
  root: null,
  threshold: "0.2",
};
function obsAction(entries) {
  const ent = entries[0];
  if (ent.isIntersecting) featureCardsEl.classList.remove("section-hidden");
}
const observer = new IntersectionObserver(obsAction, obsOpts);
observer.observe(featureCardsEl);
