const images = ["0.jpg", "1.jpg","2.jpg", "3.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];



document.body.style.background = `url(img/${choseImage})  0% 0% / 100% no-repeat`;
