//Page de Florine//

const patronusSupr = document.getElementById("patronus-supr");
const patronusQuantity = document.getElementById("patronus-quantity");
const patronusAdd = document.getElementById("patronus-add");
const hatSupr = document.getElementById("hat-supr");
const hatQuantity = document.getElementById("hat-quantity");
const hatAdd = document.getElementById("hat-add");
const beansSupr = document.getElementById("beans-supr");
const beansQuantity = document.getElementById("beans-quantity");
const beansAdd = document.getElementById("beans-add");
const wandSupr = document.getElementById("wand-supr");
const wandQuantity = document.getElementById("wand-quantity");
const wandAdd = document.getElementById("wand-add");
const potionSupr = document.getElementById("potion-supr");
const potionQuantity = document.getElementById("potion-quantity");
const potionAdd = document.getElementById("potion-add");
const broomSupr = document.getElementById("broom-supr");
const broomQuantity = document.getElementById("broom-quantity");
const broomAdd = document.getElementById("broom-add");
const cartItems = document.getElementById("store-cart-items");
const clearCart = document.getElementById("clear-cart");
const cartContainer = document.getElementById("store-cart-title");
const sectionContainer = document.getElementById("cart-section-container");

let cart = [];

//fonction pour faire apparaître ou disparaître le panier et les quantités demandées selon le nombre d'articles présents dans le panier, se déclenche avec les events add//
function displayCart(cartlist) {
  cartItems.innerHTML = "";
  if (cart.length > 0) {
    clearCart.style.display = "flex";
    cartContainer.style.display = "flex";
  } else {
    clearCart.style.display = "none";
    cartContainer.style.display = "none";
  }
  cartlist.forEach((product) => {
    let card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
          <p>${product.name} : ${product.quantity}</p>
        `;

    cartItems.appendChild(card);
  });
}

//calcule le nombre d'articles présents dans le panier//
function totalCart() {
  return cart.reduce((total, item) => total + parseInt(item.quantity), 0);
}

//event qui se produit quand on clique sur le +, fait apparaître le nom et la quantité d'articles associé au patronus, les 5 events suivants sont chacun associés à un article//
patronusAdd.addEventListener("click", (event) => {
  const getValue = parseInt(patronusQuantity.value);
  let product = cart.find(item => item.name === "Patronus");

  let totalQuantity = totalCart() - (product ? product.quantity : 0);

  if (totalQuantity + getValue > 15) {
    alert("Vous ne pouvez pas ajouter plus de 15 articles au total dans votre panier.");
    patronusQuantity.value = "0";
  } else {
    if (product) {
      product.quantity = getValue;
    } else if (getValue > 0) {
      cart.push({
        name: "Patronus",
        quantity: getValue,
      });
    }
    displayCart(cart);
  }
});

hatAdd.addEventListener("click", (event) => {
  const getValue = parseInt(hatQuantity.value);
  let product = cart.find(item => item.name === "hat");

  let totalQuantity = totalCart() - (product ? product.quantity : 0);

  if (totalQuantity + getValue > 15) {
    alert("Vous ne pouvez pas ajouter plus de 15 articles au total dans votre panier.");
    hatQuantity.value = "0";
  } else {
    if (product) {
      product.quantity = getValue;
    } else if (getValue > 0) {
      cart.push({
        name: "hat",
        quantity: getValue,
      });
    }
    displayCart(cart);
  }
});

potionAdd.addEventListener("click", (event) => {
  const getValue = parseInt(potionQuantity.value);
  let product = cart.find(item => item.name === "potion");

  let totalQuantity = totalCart() - (product ? product.quantity : 0);

  if (totalQuantity + getValue > 15) {
    alert("Vous ne pouvez pas ajouter plus de 15 articles au total dans votre panier.");
    potionQuantity.value = "0";
  } else {
    if (product) {
      product.quantity = getValue;
    } else if (getValue > 0) {
      cart.push({
        name: "potion",
        quantity: getValue,
      });
    }
    displayCart(cart);
  }
});

broomAdd.addEventListener("click", (event) => {
  const getValue = parseInt(broomQuantity.value);
  let product = cart.find(item => item.name === "broom");

  let totalQuantity = totalCart() - (product ? product.quantity : 0);

  if (totalQuantity + getValue > 15) {
    alert("Vous ne pouvez pas ajouter plus de 15 articles au total dans votre panier.");
    broomQuantity.value = "0";
  } else {
    if (product) {
      product.quantity = getValue;
    } else if (getValue > 0) {
      cart.push({
        name: "broom",
        quantity: getValue,
      });
    }
    displayCart(cart);
  }
});

beansAdd.addEventListener("click", (event) => {
  const getValue = parseInt(beansQuantity.value);
  let product = cart.find(item => item.name === "beans");

  let totalQuantity = totalCart() - (product ? product.quantity : 0);

  if (totalQuantity + getValue > 15) {
    alert("Vous ne pouvez pas ajouter plus de 15 articles au total dans votre panier.");
    beansQuantity.value = "0";
  } else {
    if (product) {
      product.quantity = getValue;
    } else if (getValue > 0) {
      cart.push({
        name: "beans",
        quantity: getValue,
      });
    }
    displayCart(cart);
  }
});

wandAdd.addEventListener("click", (event) => {
  const getValue = parseInt(wandQuantity.value);
  let product = cart.find(item => item.name === "wand");

  let totalQuantity = totalCart() - (product ? product.quantity : 0);

  if (totalQuantity + getValue > 15) {
    alert("Vous ne pouvez pas ajouter plus de 15 articles au total dans votre panier.");
    wandQuantity.value = "0";
  } else {
    if (product) {
      product.quantity = getValue;
    } else if (getValue > 0) {
      cart.push({
        name: "wand",
        quantity: getValue,
      });
    }
    displayCart(cart);
  }
});

//Event qui se déclenche lorsqu'on clique sur "vider le panier", déclenche une boîte de dialogue pour confirmer, supprime tous les éléments du panier et remet les valeurs à 0 dans les formulaires//
clearCart.addEventListener("click", (event) => {
  if (window.confirm("Voulez-vous vider votre panier ?")) {
    cart = [];
    displayCart(cart);
    patronusQuantity.value = "0";
    beansQuantity.value = "0";
    wandQuantity.value = "0";
    broomQuantity.value = "0";
    hatQuantity.value = "0";
    potionQuantity.value = "0";
  }
});

//event qui se produit quand on clique sur la corbeille, fait disparaître le nom et la quantité d'articles associé au patronus et remet la valeur du formulaire patronus à 0, déclenche aussi une boîte de dialogue pour confirmer, les 5 events suivants sont chacun associés à un article//
patronusSupr.addEventListener("click", (event) => {
  if (window.confirm("Voulez-vous retirer cet article de votre panier ?")) {
    patronusQuantity.value = "0";
    cart = cart.filter((item) => item.name != "Patronus");
    displayCart(cart);
  }
});

hatSupr.addEventListener("click", (event) => {
  if (window.confirm("Voulez-vous retirer cet article de votre panier ?")) {
    hatQuantity.value = "0";
    cart = cart.filter((item) => item.name != "hat");
    displayCart(cart);
  }
});

potionSupr.addEventListener("click", (event) => {
  if (window.confirm("Voulez-vous retirer cet article de votre panier ?")) {
    potionQuantity.value = "0";
    cart = cart.filter((item) => item.name != "potion");
    displayCart(cart);
  }
});

beansSupr.addEventListener("click", (event) => {
  if (window.confirm("Voulez-vous retirer cet article de votre panier ?")) {
    beansQuantity.value = "0";
    cart = cart.filter((item) => item.name != "beans");
    displayCart(cart);
  }
});

broomSupr.addEventListener("click", (event) => {
  if (window.confirm("Voulez-vous retirer cet article de votre panier ?")) {
    broomQuantity.value = "0";
    cart = cart.filter((item) => item.name != "broom");
    displayCart(cart);
  }
});

wandSupr.addEventListener("click", (event) => {
  if (window.confirm("Voulez-vous retirer cet article de votre panier ?")) {
    wandQuantity.value = "0";
    cart = cart.filter((item) => item.name != "wand");
    displayCart(cart);
  }
});
