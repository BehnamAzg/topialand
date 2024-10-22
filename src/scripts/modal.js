// prevent dialogs to close whrn cliked inside
const preventClosing = document.querySelectorAll(".preventClosing").forEach((i) => {
  i.addEventListener("click", (event) => event.stopPropagation());
});

function preventClosingDialog(event) {
  event.stopPropagation();
}

// Open Currency Modal
const currencyDialog = document.getElementById("currencyDialog");
document.querySelectorAll(".currencyBtn").forEach((i) => {
  i.addEventListener("click", () => {
    currencyDialog.showModal();
  });
});
currencyDialog.addEventListener("click", () => {
  currencyDialog.close();
});

// Open hamburger Modal
const hamburgerDialog = document.getElementById("hamburgerDialog");
document.getElementById("hamburgerBtn").addEventListener("click", () => {
  hamburgerDialog.showModal();
});
hamburgerDialog.addEventListener("click", () => {
  hamburgerDialog.close();
});

// Open Profile Modal
const profileDialog = document.getElementById("profileDialog");
document.querySelectorAll(".profileBtn").forEach((i) => {
  i.addEventListener("click", () => {
    profileDialog.showModal();
  });
});
profileDialog.addEventListener("click", () => {
  profileDialog.close();
});

// Open Sign up Modal
const signUpDialog = document.getElementById("signUpDialog");
document.querySelectorAll(".signUpBtn").forEach((i) => {
  i.addEventListener("click", () => {
    signUpDialog.showModal();
  });
});
signUpDialog.addEventListener("click", () => {
  signUpDialog.close();
});

// Open Contact Information Modal
const contactDialog = document.getElementById("contactDialog");
document.getElementById("contactBtn").addEventListener("click", () => {
  contactDialog.showModal();
});
contactDialog.addEventListener("click", () => {
  contactDialog.close();
});

// Open Privacy Policy Modal
const privacyDialog = document.getElementById("privacyDialog");
document.getElementById("privacyBtn").addEventListener("click", () => {
  privacyDialog.showModal();
});
privacyDialog.addEventListener("click", () => {
  privacyDialog.close();
});

// Open Terms Of Service Modal
const termsOfServiceDialog = document.getElementById("termsOfServiceDialog");
document.getElementById("termsOfServiceBtn").addEventListener("click", () => {
  termsOfServiceDialog.showModal();
});
termsOfServiceDialog.addEventListener("click", () => {
  termsOfServiceDialog.close();
});

// Open Shipping policy Modal
const shippingPolicyDialog = document.getElementById("shippingPolicyDialog");
document.querySelectorAll(".shippingPolicyBtn").forEach((i) => {
  i.addEventListener("click", () => {
    shippingPolicyDialog.showModal();
  });
});
shippingPolicyDialog.addEventListener("click", () => {
  shippingPolicyDialog.close();
});

// Open Cart Modal
const cartDialog = document.getElementById("cartDialog");
document.getElementById("cartBtn").addEventListener("click", () => {
  cartDialog.showModal();
});
cartDialog.addEventListener("click", () => {
  cartDialog.close();
});

// Open Product Modal
const productDialog = document.getElementById("productDialog");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const productName = card.dataset.productName;
    const productCategorie = card.dataset.productCategorie;
    const productPrice = card.dataset.productPrice;
    const productSaleprice = card.dataset.productSaleprice;
    const productStatus = card.dataset.productStatus;
    const productImage0 = card.dataset.productImage0;
    const productImage1 = card.dataset.productImage1;
    const productImage2 = card.dataset.productImage2;

    productDialog.innerHTML = `
      <div class="p-4 preventClosing" onclick="preventClosingDialog(event)">
        <!-- close button -->
        <form method="dialog" class="flex justify-end absolute right-4">
          <button
            class="p-2 rounded-full bg-red-100 hover:bg-red-200 w-fit h-fit closeModal focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000000" viewBox="0 0 256 256">
              <path
                d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
            </svg>
          </button>
        </form>
        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- left column -->
          <div class="col-span-1">
            <!-- Main Image -->
            <div class="aspect-[4/5] w-full bg-red-200 rounded-xl flex justify-center items-end">
              <img id="expandedImg" src="./images/${productImage0}" alt="" />
            </div>
            <!-- sub images container -->
            <div class="flex h-auto space-x-2 mt-3">
              <!-- Left Arrow Btn -->
              <button
                onclick="slideBtn(-1);"
                class="rounded-xl flex justify-center items-center hover:bg-orange-100 disabled:text-orange-200 disabled:hover:bg-none text-orange-300 hover:text-orange-500 focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256">
                  <path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"></path>
                </svg>
              </button>
              <!-- Images -->
              <div class="grid grid-cols-3 w-full gap-2">
                <button
                  onclick="expnadImage(this, 0);"
                  class="subImgsBtn aspect-square bg-red-200 w-full rounded-xl ring-red-300 hover:ring-4 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-300 flex justify-center items-end pt-2 ring-2 select-none">
                  <img class="object-contain w-full h-full" src="./images/${productImage0}" alt="" />
                </button>
                <button
                  onclick="expnadImage(this, 1);"
                  class="subImgsBtn aspect-square bg-red-200 w-full rounded-xl ring-red-300 hover:ring-4 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-300 flex justify-center items-end pt-2 select-none">
                  <img class="object-contain w-full h-full" src="./images/${productImage1}" alt="" />
                </button>
                <button
                  onclick="expnadImage(this, 2);"
                  class="subImgsBtn aspect-square bg-red-200 w-full rounded-xl ring-red-300 hover:ring-4 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-300 flex justify-center items-end pt-2 select-none">
                  <img class="object-contain w-full h-full" src="./images/${productImage2}" alt="" />
                </button>
              </div>
              <!-- Right Arrow Btn -->
              <button
                onclick="slideBtn(1);"
                class="rounded-xl flex justify-center items-center hover:bg-orange-100 disabled:text-orange-200 text-orange-300 hover:text-orange-500 focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256">
                  <path
                    d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- middle column -->
          <div class="mt-4 col-span-1">
            <h1 class="text-3xl font-semibold">${productName} ${productCategorie}</h1>
            <!-- Size -->
            ${productSize(productCategorie)}
            <!-- color -->
            ${productColor(productCategorie)}
            <!-- quantity -->
            <div class="mt-4">
              <h2 class="text-base font-medium">Quantity</h2>
              <!-- counts -->
              <div class="mt-2 space-x-1">
                <button
                  id="decrementQuantityBtn"
                  class="select-none inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100">
                  -
                </button>
                <div
                  id="productQuantityEl"
                  class="inline-block px-3 py-1 rounded-full border-orange-200 border bg-orange-200"></div>
                <button
                  id="incrementQuantityBtn"
                  class="select-none inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100">
                  +
                </button>
              </div>
            </div>
            <!-- info -->
            <div class="mt-4">
            ${productInformations(productCategorie)}
              
            </div>
          </div>

          <!-- right column -->
          <div class="mt-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <!-- price -->
            <h1 class="text-3xl font-semibold">${productMainPrice(productPrice, productSaleprice)}</h1>
            <!-- info -->
            <p class="text-gray-400 font-normal mt-4">
              Tax included.
              <button class="shippingPolicyBtn text-orange-300 hover:text-orange-400 underline underline-offset-2">
                Shipping
              </button>
              calculated at checkout.
            </p>
            <!-- Add to cart -->
            <div class="select-none">
            ${soldOut(productStatus)}
            </div>

          </div>
        </div>
      </div>
    `;
    productDialog.showModal();
    selectSize("s");
    selectColor("black");
    // Quantity
    const productQuantityEl = document.getElementById("productQuantityEl");
    const incrementQuantityBtn = document.getElementById("incrementQuantityBtn");
    const decrementQuantityBtn = document.getElementById("decrementQuantityBtn");

    productQuantityEl.innerHTML = productQuantity;
    function quantityIncrease() {
      if (productQuantity < 10) {
        productQuantity++;
        productQuantityEl.innerHTML = productQuantity;
        decrementQuantityBtn.removeAttribute("disabled");
      } else {
        alert("Maxed allowed quantity is 10.");
      }
    }
    function quantityDecrease() {
      if (productQuantity === 1) {
        decrementQuantityBtn.setAttribute("disabled", "");
      } else if (productQuantity === 2) {
        productQuantity--;
        productQuantityEl.innerHTML = productQuantity;
        decrementQuantityBtn.setAttribute("disabled", "");
      } else {
        productQuantity--;
        productQuantityEl.innerHTML = productQuantity;
      }
    }
    incrementQuantityBtn.addEventListener("click", quantityIncrease);
    decrementQuantityBtn.addEventListener("click", quantityDecrease);

    document.querySelectorAll(".shippingPolicyBtn").forEach((i) => {
      i.addEventListener("click", () => {
        shippingPolicyDialog.showModal();
      });
    });

    const subImgsBtn = document.querySelectorAll(".subImgsBtn");
    const expandedImg = document.getElementById("expandedImg");

    currentProduct(productName, productCategorie, productPrice, productSaleprice, productImage0);
    const addToCartBtn = document.getElementById("addToCartBtn");
    if (productStatus != "sold-out") {
      addToCartBtn.addEventListener("click", addToCart);
    }
  });
});
productDialog.addEventListener("click", () => {
  productDialog.close();
});

function productMainPrice(price, salePrice) {
  if (salePrice != 0) {
    return `<s class="text-gray-400">$${formatCurrencyNew(price)}</s> $${formatCurrencyNew(salePrice)}`;
  } else {
    return `$${formatCurrencyNew(price)}`;
  }
}

function productInformations(categorie) {
  if (categorie === "T-Shirt") {
    return `
      <ul class="list-disc ml-4 space-y-1">
        <li>Unisex Fit</li>
        <li>100% cotton, made in Canada</li>
        <li>Hand Printed with Love and Care</li>
        <li>
          Custom artwork by
          <a
            href="https://www.instagram.com/ahmad_raf/"
            target="_blank"
            class="text-orange-300 hover:text-orange-400 underline underline-offset-2"
            >Ahmad Rafiei</a
          >
        </li>
      </ul>
    `;
  } else if (categorie === "Hoodie") {
    return `
      <ul class="list-disc ml-4 space-y-1">
        <li>Unisex Fit</li>
        <li>80/20 Cotton/Poly, Made in Canada</li>
        <li>Hand Printed with Love and Care</li>
        <li>
          Custom artwork by
          <a
            href="https://www.instagram.com/ahmad_raf/"
            target="_blank"
            class="text-orange-300 hover:text-orange-400 underline underline-offset-2"
            >Ahmad Rafiei</a
          >
        </li>
      </ul>
    `;
  } else if (categorie === "Tote Bag") {
    return `
      <ul class="list-disc ml-4 space-y-1">
        <li>100% Organic Cotton Canvas</li>
        <li>Hand Printed with Love and Care</li>
        <li>
          Custom artwork by
          <a
            href="https://www.instagram.com/ahmad_raf/"
            target="_blank"
            class="text-orange-300 hover:text-orange-400 underline underline-offset-2"
            >Ahmad Rafiei</a
          >
        </li>
      </ul>
    `;
  } else if (categorie === "Chocolate") {
    return `
      <ul class="list-disc ml-4 space-y-1">
        <li>Highest Quality Belgian Chocolate</li>
        <li>Comes in Two Amazing Flavors Dark and Creamy Milk Chocolate</li>
        <li>Custom Molded Kouman Engraving</li>
        <li>Chance to win a Golden Ticket</li>
        <li>Limited Quantities</li>
        <li>Box Sets Come With Extra Goodies!</li>
        <li>
          Custom artwork by
          <a
            href="https://www.instagram.com/ahmad_raf/"
            target="_blank"
            class="text-orange-300 hover:text-orange-400 underline underline-offset-2"
            >Ahmad Rafiei</a
          >
        </li>
      </ul>
    `;
  }
}

function productSize(categorie) {
  if (categorie === "T-Shirt" || categorie === "Hoodie") {
    return `
      <div class="mt-4">
        <h2 class="text-base font-medium">Size</h2>
        <!-- sizes -->
        <div class="mt-2 space-x-1">
          <button
            data-size="s"
            class="select-none selectSizeBtn inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100"
            onclick="selectSize('S')">
            S
          </button>
          <button
            data-size="m"
            class="select-none selectSizeBtn inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100"
            onclick="selectSize('M')">
            M
          </button>
          <button
            data-size="l"
            class="select-none selectSizeBtn inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100"
            onclick="selectSize('L')">
            L
          </button>
          <button
            data-size="xl"
            class="select-none selectSizeBtn inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100"
            onclick="selectSize('XL')">
            XL
          </button>
          <button
            data-size="xxl"
            class="select-none selectSizeBtn inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100"
            onclick="selectSize('XXL')">
            XXL
          </button>
        </div>
        <!-- size guide -->
        <p class="mt-4 text-gray-400 font-normal font-mono text-pretty">
          Size Guide | Mia: M | Kourosh: L | Iman: XL
        </p>
      </div>
    `;
  } else {
    return ``;
  }
}

function productColor(categorie) {
  if (categorie === "T-Shirt" || categorie === "Hoodie") {
    return `
      <div class="mt-4">
        <h2 class="text-base font-medium">Color</h2>
        <!-- colors -->
        <div class="mt-2 space-x-2 flex">
          <button
            data-color="black"
            class="select-none selectColorBtn flex justify-center items-center gap-2 px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100"
            onclick="selectColor('black')">
            Black
            <span class="inline-block w-4 h-4 rounded-full bg-black border-orange-200 border my-auto"></span>
          </button>
          <button
            data-color="white"
            class="select-none selectColorBtn flex justify-center items-center gap-2 px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100"
            onclick="selectColor('white')">
            White
            <span class="inline-block w-4 h-4 rounded-full bg-white border-orange-200 border my-auto"></span>
          </button>
        </div>
      </div>
    `;
  } else {
    return ``;
  }
}

function soldOut(status) {
  if (status === "sold-out") {
    return `
      <button
        id="addToCartBtn"
        class="w-full mt-4 px-3 h-10 rounded-full bg-gray-200  border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 cursor-not-allowed">
        Sold Out
      </button>
    `;
  } else {
    return `
      <button
        id="addToCartBtn"
        class="w-full mt-4 px-3 h-10 rounded-full bg-orange-200 border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100">
        Add to Cart
      </button>
    `;
  }
}

function currentProduct(name, categorie, price, saleprice, image) {
  currentProductName = name;
  currentProductCategorie = categorie;
  currentProductPrice = Number(price);
  currentProductSaleprice = Number(saleprice);
  currentProductImage = image;
}

updateCartItems()
