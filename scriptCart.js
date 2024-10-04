let priceBaguettes = 149.99;
let priceBalai = 299.99;
let pricePatronus = 99.99;

let quantiteBaguettes = parseInt(document.getElementsById("baguetteQuantity"));
let quantiteBalai = parseInt(document.getElementById("balaiQuantity"));
let quantitePatronus = parseInt(document.getElementById("patronusQuantity"));

let totalPriceBaguettes = priceBaguettes * quantiteBaguettes;
let totalPriceBalai = priceBalai * quantiteBalai;
let totalPricePatronus = pricePatronus * quantitePatronus;

quantiteBaguettes.addEventListener("submit", (event) => {
    event.preventDefault();
})

function calculerPrixTotal(prixTotal) {
    prixTotal = totalPriceBaguettes + totalPriceBalai + totalPricePatronus + "€";
    return (prixTotal);
}

document.querySelector('totalBaguettes').innerHTML = quantiteBaguettes;

function changecouleur(couleur) {
    if (prixTotal <= 250) {
        document.getElementById('prixTotal').style.color = 'red';
    } else {
        if (prixTotal > 250 && prixTotal <= 750) {
            document.getElementById('prixTotal').style.color = 'orange';
        } else {
            document.getElementById('prixTotal').style.color = 'green';
        }
    }
}

