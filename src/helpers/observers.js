const header = document.querySelector("#floating-button");
const sectionOne = document. querySelector(".hero");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
  entries.forEach(entry => {
    console.log(entry.target);
  })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne)