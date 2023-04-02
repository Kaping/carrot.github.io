const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

const FIXED_CLASSNAME = "fixed";


bgImage.src = `img/${chosenImage}`;
bgImage.classList.add(FLEX_CLASSNAME);
document.body.appendChild(bgImage);