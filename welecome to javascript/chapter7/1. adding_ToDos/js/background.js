const images = [
	"hani_caricature.jpeg",
	"hani_japan.jpeg",
	"hani.jpeg",
	"juni_caricature.jpeg"
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

//console.log(choosenImage); 브라우저 콘솔에 잘 나오는지  확인

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`; 

//console.log(bgImage);

document.body.appendChild(bgImage);