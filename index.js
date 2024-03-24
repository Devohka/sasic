const noBtn = document.querySelector(".haha-no");
const yesBtn = document.querySelector(".haha-yes");
const pageEl = document.querySelector(".haha-page");


yesBtn.addEventListener("click", () => {
    alert("я знаю))))");
});

noBtn.addEventListener("click", () => {
    noBtn.style.display = "none";
    pageEl.style.display = "block";
});