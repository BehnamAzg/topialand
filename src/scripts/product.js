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
let currentProductImage = "";

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
const cartItemList = document.querySelector(".cartItemList");

function addToCart() {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (currentProductName === cartItem.productCartName && currentProductCategorie === cartItem.productCartCategorie) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.productCartQuantity += productQuantity;
    matchingItem.productCartSize = selectedSize;
    matchingItem.productCartColor = selectedColor;
  } else {
    cart.push({
      productCartName: currentProductName,
      productCartCategorie: currentProductCategorie,
      productCartSize: selectedSize,
      productCartColor: selectedColor,
      productCartQuantity: productQuantity,
      productCartPrice: currentProductPrice,
      productCartSalePrice: currentProductSaleprice,
      productCartImage: currentProductImage,
    });
  }

  updateCartItems();

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
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.productCartQuantity;
  });
  document.getElementById("cartItemsCount").textContent = cartQuantity;
  console.log(cart);
}

let cartItemsHTML;

function updateCartItems() {
  cartItemsHTML = "";
  cart.forEach((itemInCart) => {
    cartItemsHTML += `
        <div class="bg-gray-100 flex p-4 rounded-lg gap-6 mb-4 w-full sm:flex-row flex-col h-fit">
          <!-- iamge -->
          <div class="aspect-square max-h-44 bg-gray-200 rounded-xl p-4">
            <img class="object-contain w-full h-full" src="./images/${itemInCart.productCartImage}" alt="" />
          </div>
          <!-- info -->
          <div class="w-full">
            <!-- title -->
            <h1 class="text-base font-semibold">${itemInCart.productCartName} ${itemInCart.productCartCategorie}</h1>
            <!-- Size -->
            <div class="mt-2 space-x-1">
              <h2 class="text-sm font-medium inline-block">Size</h2>
              <div class="inline-block px-2 bg-orange-200 py-0.5 rounded-full border-orange-200 border text-sm">
                ${itemInCart.productCartSize}
              </div>
            </div>
            <!-- color -->
            <div class="mt-2">
              <div class="space-x-2 flex items-center">
                <h2 class="text-sm font-medium inline-block">Color</h2>
                <div
                  class="flex justify-center items-center gap-2 px-3 py-1 rounded-full border-orange-200 border text-sm bg-orange-200">
                  ${itemInCart.productCartColor}
                  <span
                    class="inline-block w-4 h-4 rounded-full bg-${
                      itemInCart.productCartColor
                    } border-orange-200 border my-auto"></span>
                </div>
              </div>
            </div>
            <!-- quantity & price -->
            <div class="mt-2">
              <h2 class="text-sm font-medium">Quantity</h2>
              <!-- counts -->
              <div class="flex items-center mt-2">
                <div class="space-x-1 inline-block">
                  <button
                    data-product-name="${itemInCart.productCartName}"
                    data-product-categorie="${itemInCart.productCartCategorie}"
                    data-action="decrement"
                    class="inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100 select-none js-change-quantity-btn">
                    -
                  </button>
                  <div class="inline-block px-3 py-1 rounded-full border-orange-200 border bg-orange-200">${
                    itemInCart.productCartQuantity
                  }</div>
                  <button
                    data-product-name="${itemInCart.productCartName}"
                    data-product-categorie="${itemInCart.productCartCategorie}"
                    data-action="increment"
                    class="inline-block px-3 py-1 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100 select-none js-change-quantity-btn">
                    +
                  </button>
                </div>
                <!-- price -->
                <div class="text-lg font-medium ml-4">${productMainPriceNew(
                  itemInCart.productCartPrice,
                  itemInCart.productCartSalePrice,
                  itemInCart.productCartQuantity
                )}</div>
                <!-- remove btn -->
                <button
                  data-product-name="${itemInCart.productCartName}"
                  data-product-categorie="${itemInCart.productCartCategorie}"
                  class="flex p-2 rounded-full border-orange-200 border focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 hover:bg-orange-100 ml-auto justify-center items-center group js-cart-remove-item-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256">
                    <path
                      d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                  </svg>
                  <span class="text-xs mx-2 group-hover:block hidden">Remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
  });
  cartItemList.innerHTML = cartItemsHTML;
  cartItemRemoveBtn();
  changeCartItemQuantityBtn();
  updateOrderSummary();
}

function productMainPriceNew(price, salePrice, quantity) {
  if (salePrice != 0) {
    return `<s class="text-gray-400">$${formatCurrency(price * quantity)}</s> $${formatCurrency(salePrice * quantity)}`;
  } else {
    return `$${formatCurrency(price * quantity)}`;
  }
}

function cartItemRemoveBtn() {
  document.querySelectorAll(".js-cart-remove-item-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.dataset.productName;
      const productCategorie = button.dataset.productCategorie;

      cart.forEach((itemInCart) => {
        if (itemInCart.productCartName === productName && itemInCart.productCartCategorie === productCategorie) {
          cart.splice(cart.indexOf(itemInCart), 1);
        }
        console.log(cart);
      });
      updateCartItems();
      let cartQuantity = 0;
      cart.forEach((cartItem) => {
        cartQuantity += cartItem.productCartQuantity;
      });
      document.getElementById("cartItemsCount").textContent = cartQuantity;
    });
  });
}

function changeCartItemQuantityBtn() {
  document.querySelectorAll(".js-change-quantity-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.dataset.productName;
      const productCategorie = button.dataset.productCategorie;
      const action = button.dataset.action;
      console.log("clicked");
      cart.forEach((itemInCart) => {
        if (itemInCart.productCartName === productName && itemInCart.productCartCategorie === productCategorie) {
          if (action === "increment") {
            itemInCart.productCartQuantity++;
          } else if (action === "decrement" && itemInCart.productCartQuantity > 2) {
            itemInCart.productCartQuantity--;
          } else if (action === "decrement" && itemInCart.productCartQuantity === 2) {
            itemInCart.productCartQuantity--;
          }
        }
      });
      console.log(cart);
      updateCartItems();
      let cartQuantity = 0;
      cart.forEach((cartItem) => {
        cartQuantity += cartItem.productCartQuantity;
      });
      document.getElementById("cartItemsCount").textContent = cartQuantity;
    });
  });
}

function updateOrderSummary() {
  const cartOrderSummary = document.getElementById("cartOrderSummary");
  let items = 0;
  let subtotal = 0;
  let shipping = 1899;
  let total = 0;
  cart.forEach((itemInCart) => {
    if (itemInCart.productCartSalePrice === 0) {
      subtotal += itemInCart.productCartPrice * itemInCart.productCartQuantity;
    } else {
      subtotal += itemInCart.productCartSalePrice * itemInCart.productCartQuantity;
    }
    items += itemInCart.productCartQuantity;
  });

  cartOrderSummary.innerHTML = `
    <div>
      <h1 class="text-lg font-semibold">Your Order Summary</h1>
      <ul class="mt-4 space-y-2">
        <li class="flex justify-between text-sm font-normal w-full text-gray-500">
          <p>Subtotal (${items} items)</p>
          <span class="font-medium">$${formatCurrency(subtotal)}</span>
        </li>
        <li class="flex justify-between text-sm font-normal w-full text-gray-500">
          <p>
            Shipping
            <button
              class="shippingPolicyBtn hover:text-orange-400 focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200">
              <svg
                class="inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256">
                <path
                  d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </button>
          </p>
          <span class="font-medium">$${formatCurrency(shipping)}</span>
        </li>
        <li class="flex justify-between text-sm font-normal w-full text-gray-500">
          <p>Discount</p>
          <span id="discountAmountEl" class="font-medium text-orange-400"></span>
        </li>
        <!-- discount added container -->
        <li
          id="discountCodeLabel"
          class="hidden justify-between items-center text-sm font-normal text-gray-500 bg-orange-200 w-fit rounded-full pl-3 pr-1 h-7">
          <svg
            class="text-orange-400"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256">
            <path
              d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"></path>
          </svg>
          <p class="tracking-wide px-2 text-black">HELLO</p>
          <button
            id="removeDiscountCode"
            class="rounded-full hover:bg-orange-100 p-1 focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 text-xs bg-orange-200 group">
            <svg
              class="group-hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path
                d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
            </svg>
          </button>
        </li>

        <li><hr class="h-px my-3 bg-gray-300 border-0" /></li>
        <li class="flex justify-between text-sm w-full text-black font-medium">
          <p>Total</p>
          <span class="">$${formatCurrency(total)}</span>
        </li>
      </ul>
      <!-- discount code input -->
      <form action="" class="relative mt-4">
        <input
          id="discountInputField"
          type="text"
          class="w-full pl-4 pr-16 rounded-full h-9 font-normal text-xs focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200"
          placeholder="Enter Discount Code"
          required />
        <button
          id="discountApplyBtn"
          type="submit"
          class="h-7 w-14 hover:bg-orange-100 rounded-full flex justify-center items-center p-2.5 absolute top-1/2 right-1 transform -translate-y-1/2 rtl:right-auto rtl:left-0 focus:outline-none focus:border-red-200 focus:ring-2 focus:ring-red-200 text-xs bg-orange-200">
          Apply
        </button>
      </form>
      <!-- valid discount code -->
      <p id="validDiscountCode" class="hidden text-xs font-normal text-green-500 mt-2 pl-4 items-center">
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
        Discount code added
      </p>
      <!-- invalid discount code -->
      <p id="invalidDiscountCode" class="hidden text-xs font-normal text-red-500 mt-2 pl-4 items-center">
        <svg
          class="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 256 256">
          <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
        Invalid code
      </p>
    </div>
  `;
  let discountAmount = 0;
  const discountAmountEl = document.getElementById("discountAmountEl");
  discountAmountEl.innerHTML = "-$" + formatCurrency(discountAmount);

  const discountInputField = document.getElementById("discountInputField");
  const validDiscountCode = document.getElementById("validDiscountCode");
  const discountCodeLabel = document.getElementById("discountCodeLabel");
  const invalidDiscountCode = document.getElementById("invalidDiscountCode");
  function checkDiscountCode() {
    if (discountInputField.value === "HELLO") {
      validDiscountCode.classList.remove("hidden");
      validDiscountCode.classList.add("flex");
      discountCodeLabel.classList.remove("hidden");
      discountCodeLabel.classList.add("flex");
      invalidDiscountCode.classList.remove("flex");
      invalidDiscountCode.classList.add("hidden");
      discountAmount = 1000;
      discountAmountEl.innerHTML = "-$" + formatCurrency(discountAmount);
    } else if (discountInputField.value === "") {
      return;
    } else {
      invalidDiscountCode.classList.remove("hidden");
      invalidDiscountCode.classList.add("flex");
    }
  }
  document.getElementById("discountApplyBtn").addEventListener("click", checkDiscountCode);
  document.getElementById("removeDiscountCode").addEventListener("click", () => {
    discountCodeLabel.classList.remove("flex");
    discountCodeLabel.classList.add("hidden");
    validDiscountCode.classList.remove("flex");
    validDiscountCode.classList.add("hidden");
    invalidDiscountCode.classList.remove("flex");
    invalidDiscountCode.classList.add("hidden");
    discountAmount = 0;
    discountAmountEl.innerHTML = "-$" + formatCurrency(discountAmount);
  });

  total = subtotal + shipping - discountAmount;
  console.log(total);
}
