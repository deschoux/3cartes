// ANIMATION MOVEMENT LAYERS
const cards = document.querySelectorAll(".card");

// ITEMS
const titles = document.querySelectorAll(".title");
const sneakers = document.querySelectorAll(".imgBox img");

// MOVING ANIMATION EVENT
cards.forEach((card, index) => {
  const title = titles[index];
  const sneaker = sneakers[index];

  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; // Réduire la sensibilité
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20; // Réduire la sensibilité
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    // Synchroniser le mouvement du title et de la sneaker avec la carte
    title.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(150px)`;
    sneaker.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(200px)`;
  });

  // ANIMATE IN
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    title.style.transition = "none";
    sneaker.style.transition = "none";
    // POPOUT
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px)";
  });

  // ANIMATE OUT
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    title.style.transition = "all 0.5s ease";
    sneaker.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Reset du title et de la sneaker
    title.style.transform = "translateZ(0px) rotateY(0deg) rotateX(0deg)";
    sneaker.style.transform = "translateZ(0px) rotateY(0deg) rotateX(0deg)";
  });
});
