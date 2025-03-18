export const scrollToSection = (id) => {
  const section = document.querySelector(id);
  window.scrollTo({
    top: section.offsetTop - 100,
    behavior: "smooth",
  });
};
