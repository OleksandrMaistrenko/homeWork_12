const imagelist = document.getElementById("image_list");

let arrImages = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
];

arrImages = arrImages.sort(() => Math.random() - 0.5);

for (let key of arrImages) {
  let img = document.createElement("img");
  img.src = "image/" + key;
  imagelist.append(img);
}
