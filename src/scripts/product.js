let selectedSize = "";
function selectSize(size) {
  const sizeBtn = document.getElementsByClassName("selectSizeBtn");
  for (let i = 0; i < sizeBtn.length; i++) {
    if (sizeBtn[i].dataset.size === size) {
      sizeBtn[i].classList.add("bg-orange-200");
    } else {
      sizeBtn[i].classList.remove("bg-orange-200");
    }
  }
  selectedSize = size;
}

let selectedColor = "";
function selectColor(color) {
  const colorBtn = document.getElementsByClassName("selectColorBtn");
  for (let i = 0; i < colorBtn.length; i++) {
    if (colorBtn[i].dataset.color === color) {
      colorBtn[i].classList.add("bg-orange-200");
    } else {
      colorBtn[i].classList.remove("bg-orange-200");
    }
  }
  selectedColor = color;
}

let productQuantity = 1;
let currentProductName = "";
let currentProductCategorie = "";
let currentProductPrice = 0;
let currentProductSaleprice = 0;

// sub image gallery thingy
let currentSlide = 0;

function expnadImage(img, n) {
  currentSlide = n;
  const subImgsBtn = document.querySelectorAll(".subImgsBtn");
  const currentImg = img.querySelector("img");
  expandedImg.src = currentImg.src;

  subImgsBtn.forEach((i) => {
    i.classList.remove("ring-2");
  });
  img.classList.add("ring-2");
}

function slideBtn(n) {
  const subImgsBtn = document.querySelectorAll(".subImgsBtn");
  if (currentSlide >= 0 && currentSlide < 2 && n === 1) {
    currentSlide++;
  } else if (currentSlide === 2 && n === 1) {
    currentSlide = 0;
  } else if (currentSlide <= 2 && currentSlide > 0 && n === -1) {
    currentSlide--;
  } else if (currentSlide === 0 && n === -1) {
    currentSlide = 2;
  }
  const currentImg = subImgsBtn[currentSlide].querySelector("img");
  expandedImg.src = currentImg.src;
  subImgsBtn.forEach((i) => {
    i.classList.remove("ring-2");
  });
  subImgsBtn[currentSlide].classList.add("ring-2");
}

const addToCartAlert = document.getElementById("addToCartAlert");
function addToCart() {
  let matchingItem;
  cart.forEach((item) => {
    if (currentProductName === item.productCartName) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.productCartQuantity += productQuantity;
  } else {
    cart.push({
      productCartName: currentProductName,
      productCartCategorie: currentProductCategorie,
      productCartSize: selectedSize,
      productCartColor: selectedColor,
      productCartQuantity: productQuantity,
      productCartPrice: currentProductPrice,
      productCartSalePrice: currentProductSaleprice,
    });
  }

  productDialog.close();
  addToCartAlert.innerHTML += `
    <div class="timedAlert w-fit h-fit bg-emerald-500 flex justify-center items-center pr-3 pl-1 py-1 rounded-full mt-2">
      <svg
      class="mr-1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 256 256">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
    "${currentProductName} ${currentProductCategorie}" added to your cart
  </div>
  `;
  const alertMessages = document.getElementsByClassName("timedAlert");
  for (let i = 0; i < alertMessages.length; i++) {
    j = i + 1;
    if (j < alertMessages.length) {
      alertMessages[i].style.display = "none";
    }
  }
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.productCartQuantity
  })
  console.log(cartQuantity)
  document.getElementById('cartItemsCount').textContent = cartQuantity
}
