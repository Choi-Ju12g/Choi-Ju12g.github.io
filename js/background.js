const images = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bg = document.querySelector("#bg");
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bg.appendChild(bgImage);