const BACKGROUND_IMAGE = "background_image"

const images =["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

const chosnImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
console.log(bgImage);
console.dir(bgImage);

bgImage.src=`img/${chosnImage}`;

bgImage.className = BACKGROUND_IMAGE;


document.body.appendChild(bgImage);

