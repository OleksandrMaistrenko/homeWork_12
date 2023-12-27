const imagelist = document.getElementById("image_list");

let arrImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

arrImages = arrImages.sort(() => Math.random() - 0.5);

const randomImage = arrImages[Math.floor(Math.random() * arrImages.length)];

const img = document.createElement("img");
img.src = "Image/" + randomImage;
imagelist.append(img);
