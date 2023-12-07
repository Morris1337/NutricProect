const fuckU = document.querySelector("#imtInfoBtn");
const imtInfo = document.getElementById("imtInfo");

fuckU.addEventListener("click", () => {
    imtInfo.classList.toggle("open");
});
