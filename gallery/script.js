
const modalC = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

const fotos = ["img/1.png", "img/2.png", "img/3.png", "img/4.png","img/5.png", "img/6.png"];

const createIMGselector = img =>{
    const selector = document.createElement("DIV");
    selector.setAttribute("data-img", img);
    selector.setAttribute("id", img);
    selector.classList.add("img-selector");
    selector.addEventListener("click", ()=>{
        initSelectors();
        document.getElementById("foto").setAttribute("src", img);
        document.getElementById(img).add("active");
    })
    return selector;
}

const initSelectors = () => {
    const fragment = document.createDocumentFragment();
    for (i=0; i<fotos; i++){
        let selector = createIMGselector(fotos[i]);
        fragment.appendChild(selector);
    }
    document.querySelector(".img-selectors").innerHTML = "";
    document.querySelector(".img-selectors").appendChild(fragment);
}

initSelectors();

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

