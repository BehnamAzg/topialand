selectSize("s");
function selectSize(size) {
  const sizeBtn = document.getElementsByClassName("selectSizeBtn");
  for (let i = 0; i < sizeBtn.length; i++) {
    if (sizeBtn[i].dataset.size === size) {
      sizeBtn[i].classList.add("bg-orange-200");
    } else {
      sizeBtn[i].classList.remove("bg-orange-200");
    }
  }
}

selectColor("black");
function selectColor(color) {
  const colorBtn = document.getElementsByClassName("selectColorBtn");
  for (let i = 0; i < colorBtn.length; i++) {
    if (colorBtn[i].dataset.color === color) {
      colorBtn[i].classList.add("bg-orange-200");
    } else {
      colorBtn[i].classList.remove("bg-orange-200");
    }
  }
}

const productQuantityEl = document.getElementById("productQuantityEl");
const incrementQuantityBtn = document.getElementById("incrementQuantityBtn");
const decrementQuantityBtn = document.getElementById("decrementQuantityBtn");
let productQuantity = 1;
decrementQuantityBtn.setAttribute("disabled", "");
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


// sub image gallery thingy
let currentSlide = 0
const subImgsBtn = document.querySelectorAll(".subImgsBtn");
const expandedImg = document.getElementById("expandedImg");
function expnadImage(img, n) {
  currentSlide = n
  
  const currentImg = img.querySelector("img");
  expandedImg.src = currentImg.src;
  
  subImgsBtn.forEach((i) => {
    i.classList.remove("ring-2");
  });
  img.classList.add("ring-2");
}

function slideBtn(n) {

  if (currentSlide >= 0 && currentSlide < 2 && n === 1) {
    currentSlide++
  } else if (currentSlide === 2 && n === 1) {
    currentSlide = 0
  } else if (currentSlide <= 2 && currentSlide > 0 && n === -1) {
    currentSlide--
  } else if (currentSlide === 0 && n === -1) {
    currentSlide = 2
  }
  const currentImg = subImgsBtn[currentSlide].querySelector("img");
  expandedImg.src = currentImg.src;
  subImgsBtn.forEach((i) => {
    i.classList.remove("ring-2");
  });
  subImgsBtn[currentSlide].classList.add("ring-2");
}