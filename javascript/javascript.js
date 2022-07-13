// galerie des photos
const changeButtonPrev = document.getElementById("button-pictures-prev");
const changeButtonNext = document.getElementById("button-pictures-next");
const pictArray = ["img/canard-jaune-1-l.png","img/canard-jaune-2-l.png","img/canard-jaune-3-l.png","img/canard-jaune-4-l.png","img/canard-jaune-5-l.png"];
const mainImage =document.getElementById("pictures-img")
const littlePict = document.querySelectorAll("#thumbs .thumbs-img");
let i = 0; 

function changeImageNext() {
    mainImage.setAttribute("src", pictArray[i]);
    i = (i + 1) % pictArray.length;
}
function changeImagePrev() {
    mainImage.setAttribute("src", pictArray[i]);
    i = (i + 1) % pictArray.length;
}

changeButtonNext.addEventListener("click", function () {
    changeImageNext()
})

changeButtonPrev.addEventListener("click", function () {
    changeImagePrev()
})

//galerie photos version desktop

littlePict.forEach(function(pic){
    pic.addEventListener("mouseover", function(event) {
    mainImage.setAttribute("src", this.getAttribute("target"));
    })
})




// Ajout de quantités au panier

const addCartButton = document.getElementById("add-cta");
let valueCart = document.getElementById("cart-nb");
function DisableButton() {
    addCartButton.disabled = 'true';
}


addCartButton.addEventListener("click", function () {
    let nbrArticles = document.getElementById("add-qty").value;
    valueCart.innerHTML = nbrArticles
    if (nbrArticles > 99) {
        document.getElementById("cart-nb").innerHTML = "99+";
    }
    addCartButton.style.backgroundColor = '#3c3c3c';
    addCartButton.innerText = "Déjà au panier";
    DisableButton()
})

//Accordéons
const avantageList = document.getElementById("avantage");
const caractList = document.getElementById("caract")

function openCloseAccordeons() {
    localStorage.getItem("myKey");
    avantageList.addEventListener("click", function () {
       if(document.getElementById("product-advantages").style.display == 'none')document.getElementById("product-advantages").style.display = 'block';
       else{
        document.getElementById("product-advantages").style.display = 'none'
       }
        avantage.classList.toggle("closed")
    })
    caractList.addEventListener("click", function () {
       if(document.getElementById("product-car").style.display == 'none')document.getElementById("product-car").style.display = 'block';
       else{
        document.getElementById("product-car").style.display = 'none'
       } 
        caract.classList.toggle("closed")
    })    
    
}
openCloseAccordeons()
localStorage.setItem("myKey", "myValue");



