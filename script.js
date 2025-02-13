const highhonor = [
  {image : "smaw.webp", name : "jhon du"},
  {image : "stem.webp", name : "ronnie"},
  {image : "abm.webp", name : "hubert"}
];

console.log(highhonor[2].image);
console.log(highhonor.length);

let elementimage = document.querySelector(".images");

elementimage.innerHTML = `
    <img src="${highhonor[2].image}" alt="">
    <div>${highhonor[2].name}</div>`;

for(let i = 0; i != highhonor.length ; i++){
  console.log(highhonor[i].name);
}
let b = 0;
b += 5;
console.log(b += 2);















const highHonor = {
  1 : { 
    name : "OPIS",
    picture : "https://i.ibb.co/127vTMN/compressed-01-OPIS.jpg"
  },
  2 : {
    name : "TILAR",
    picture : "https://i.ibb.co/GdbwCbb/compressed-02-TILAR.jpg"
  },
  3 : {
    name : "ARGATE",
    picture : "https://i.ibb.co/yPksWsg/compressed-03-ARGATE.jpg"
  },
  4 : {
    name : "ANDON",
    picture : "https://i.ibb.co/kD59W6d/compressed-04-ANDON.jpg"
  },
  5 : { 
    name : "AZUCENAS",
    picture : "https://i.ibb.co/2Ssnk58/compressed-05-AZUCENAS.jpg"
  }
}
