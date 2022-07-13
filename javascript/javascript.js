
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

//défilement des images

// const prevButtonDuck = document.getElementById(button-pictures-next)
// const nextButtonDuck = document.getElementById(button-pictures-prev)

// function navRight() {
//     prevButtonDuck.addEventListener("click" , function(){

//     })
    
// }

//Accordéons
const avantageList = document.getElementById("avantage");
const caractList = document.getElementById("caract")

function closeAccordeons() {
    avantageList.addEventListener("click", function () {
        document.getElementById("product-advantages").style.display = 'none';
        avantage.classList.toggle("closed")
    })
    caractList.addEventListener("click", function () {
        document.getElementById("product-car").style.display = 'none';
        caract.classList.toggle("closed")
    })    
    
}
   

closeAccordeons()



