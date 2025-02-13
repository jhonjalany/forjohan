const list_of_adviser = [
  {img: "https://cachedimage.jhondumanhog.workers.dev/KYH9hryK/male.webp", name: "adviser's name", section: "section name"},
  {img: "https://cachedimage.jhondumanhog.workers.dev/nz93FjH3/female.webp", name: "adviser's name", section: "section name"},
  {img: "https://cachedimage.jhondumanhog.workers.dev/KYH9hryK/male.webp", name: "adviser's name", section: "section name"},
  {img: "https://cachedimage.jhondumanhog.workers.dev/nz93FjH3/female.webp", name: "adviser's name", section: "section name"},
  {img: "https://cachedimage.jhondumanhog.workers.dev/KYH9hryK/male.webp", name: "adviser's name", section: "section name"},
  {img: "https://cachedimage.jhondumanhog.workers.dev/nz93FjH3/female.webp", name: "adviser's name", section: "section name"},
];


let elementadvicer = document.querySelector(".display_adviser");
let rendered_image = "";

for(let i = 0; i != list_of_adviser.length; i++){
  rendered_image += `
    <div class="adviser_div">
      <img class="adviser_image" src="${list_of_adviser[i].img}" alt="">
      <h1 class="adviser_name">${list_of_adviser[i].name}</h1>
      <h1 class="section_name">${list_of_adviser[i].section}</h1>
    </div>
  `;
} 

elementadvicer.innerHTML = rendered_image;
