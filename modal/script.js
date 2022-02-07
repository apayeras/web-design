
const modalC = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");


document.querySelector(".open-modal").addEventListener("click", ()=>{
    modalC.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
});

document.querySelector(".close-modal").addEventListener("click", ()=> {
    modal.style.animation = "desaparecer 0.3s forwards";
    setTimeout(()=>{
        modalC.style.display = "none";
    }, 300)

})