const highhonors = [
  {img: "ABM/compressed_07 BUTIN.jpg", name: "BUTIN"},
  {img: "ABM/compressed_08 BALAGA.jpg", name: "BALAGA"},
  {img: "HUMSS/compressed_02 ORIBE.jpg", name: "ORIBE"},
  {img: "HUMSS/compressed_03 ORIBE.jpg", name: "ORIBE"},
  {img: "HUMSS/compressed_04 ECIL.jpg", name: "ECIL"},
  {img: "STEM/compressed_02 PENSONA.jpg", name: "PENSONA"},
  {img: "STEM/compressed_03 CAIN.jpg", name: "CAIN"},
  {img: "TCL-COOKERY/compressed_01 REALINO.jpg", name: "REALINO"},
  {img: "TCL-COOKERY/compressed_02 NUEVAS.jpg", name: "NUEVAS"}
];

const honors = [
  {img: "ABM/compressed_13 RISOS.jpg", name: "RISOS"},
  {img: "ABM/compressed_14 ALZAGA.jpg", name: "ALZAGA"},
  {img: "ABM/compressed_15 MORANO.jpg", name: "MORANO"},
  {img: "HUMSS/compressed_08 ELMIDO.jpg", name: "ELMIDO"},
  {img: "HUMSS/compressed_09 CANALES.jpg", name: "CANALES"},
  {img: "HUMSS/compressed_10 CAPENA.jpg", name: "CAPENA"},
  {img: "STEM/compressed_07 ZAMORA.jpg", name: "ZAMORA"},
  {img: "STEM/compressed_08 CALICDAN.jpg", name: "CALICDAN"},
  {img: "TCL-COOKERY/compressed_04 CINCO.jpg", name: "CINCO"},
  {img: "TCL-COOKERY/compressed_05 SUAN.jpg", name: "SUAN"},
  {img: "TCL-COOKERY/compressed_06 DISU.jpg", name: "DISU"}
];

let elementhigh_honor = document.querySelector(".high_honor");
let elementhonor = document.querySelector(".honor");

 let rendered_image = "";

 for(let i = 0; i != highhonors.length; i++){
  rendered_image += `
    <div class="student_div">
    <img class= "student_image" src="${highhonors[i].img}" loading="lazy" alt="refresh this website" onclick="openImage('${highhonors[i].img}')">
    <h1 class= "student_name">${highhonors[i].name}</h1>
    </div>
  `
 };
elementhigh_honor.innerHTML = rendered_image;


 rendered_image = "";

 for(let i = 0; i != honors.length; i++){
  rendered_image += `
  <div class="student_div">
    <img class="student_image" src="${honors[i].img}" loading="lazy" alt="Refresh this website" onclick="openImage('${honors[i].img}')">
    <h1 class="student_name">${honors[i].name}</h1>
    </div>
  `
 };
 elementhonor.innerHTML = rendered_image;

 
// Function to open image modal
function openImage(src) {
  const modal = document.getElementById("imageModal");
  const expandedImg = document.getElementById("expandedImg");

  expandedImg.src = src;
  modal.style.display = "flex"; // Show modal
}

// Function to close image modal
function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

// Ensure modal is hidden on page load (Failsafe)
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("imageModal").style.display = "none";
});
