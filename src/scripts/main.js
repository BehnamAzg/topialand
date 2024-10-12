// Hide navbar on scroll down
let prevScrollPos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-6rem";
  }
  prevScrollPos = currentScrollPos;
};

// hide announcement bar
document.getElementById("announcementBtn").addEventListener("click", () => {
  document.getElementById("announcementBar").style.display = "none";
});

const products = [
  {
    name: "Zolaldel",
    categorie: "T-Shirt",
    priceCents: "3400",
    salePriceCents: "",
    status: "sold-out", // available - sold-out - on-sale
    image: "bg-[url('./images/zolaldel_tshirt_black.png')]",
    image_hover: "group-hover:bg-[url('./images/zolaldel_tshirt_black_2.png')]",
  },
];

let tshirtProductsHTML = "";
let hoodiProductsHTML = "";
let totebagProductsHTML = "";
let chocolateProductsHTML = "";

products.forEach((product) => {
  let productHTML;
  if (product.status === "sold-out") {
    productHTML = `
    <div
      class="bg-white w-full aspect-[1/1.1] rounded-2xl flex flex-col p-4 cursor-pointer hover:bg-orange-300 transition-colors group text-nowrap card">
      <!-- Top Row-->
      <div class="flex justify-between">
        <!-- Title & Price -->
        <div class="flex flex-col">
          <span>${product.name}</span>
          <span>${product.categorie}</span>
          <span class="text-sm text-gray-500 group-hover:text-white"
            >$${product.priceCents / 100}</span
          >
        </div>
        <!-- Info -->
        <div
          class="rounded-full bg-black text-white h-fit text-xs px-3 py-1.5 font-normal text-nowrap group-hover:bg-white group-hover:text-black">
          Sold Out
        </div>
      </div>
      <!-- Image Row -->
      <div
        class="h-full w-full mt-2 rounded-xl ${product.image} bg-cover ${
      product.image_hover
    }"></div>
    </div>
  `;
  } else if (product.status === "available") {
    productHTML = `
      <div
        class="bg-white w-full aspect-[1/1.1] rounded-2xl flex flex-col p-4 cursor-pointer hover:bg-orange-300 transition-colors group text-nowrap card">
        <!-- Top Row-->
        <div class="flex justify-between">
          <!-- Title & Price -->
          <div class="flex flex-col">
            <span>${product.name}</span>
            <span>${product.categorie}</span>
            <span class="text-sm text-gray-500 group-hover:text-white"
              >${product.priceCents / 100}</span
            >
          </div>
          <!-- Info -->
          <div
            class="rounded-full bg-red-300 text-white p-1.5 font-normal text-nowrap group-hover:bg-white group-hover:text-black h-8 w-8 group-hover:flex items-center justify-center text-xl hidden">
            +
          </div>
        </div>
        <!-- Image Row -->
        <div
          class="h-full w-full mt-2 rounded-xl ${product.image} bg-cover ${
      product.image_hover
    }"></div>
      </div>
    `;
  } else if (product.status === "on-sale") {
    productHTML = `
      <div
        class="bg-white w-full aspect-[1/1.1] rounded-2xl flex flex-col p-4 cursor-pointer hover:bg-orange-300 transition-colors group text-nowrap card">
        <!-- Top Row-->
        <div class="flex justify-between">
          <!-- Title & Price -->
          <div class="flex flex-col">
            <span>${product.name}</span>
            <span>${product.categorie}</span>
            <span class="text-sm text-gray-500 group-hover:text-white"
              ><s>${product.priceCents / 100}</s> ${
      product.salePriceCents / 100
    }</span
            >
          </div>
          <!-- Info -->
          <div class="flex items-start">
            <div
              class="text-orange-400 group-hover:text-black w-6 h-6 mr-1 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256">
                <path
                  d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"></path>
              </svg>
            </div>
            <div
              class="rounded-full bg-orange-300 text-white h-fit text-xs px-3 py-1.5 font-normal text-nowrap group-hover:bg-white group-hover:text-black">
              Sale
            </div>
          </div>
        </div>
        <!-- Image Row -->
        <div
          class="h-full w-full mt-2 rounded-xl ${product.image} bg-cover ${
      product.image_hover
    }"></div>
      </div>
    `;
  }
  if (product.categorie === "T-Shirt") {
    tshirtProductsHTML += productHTML;
  } else if (product.categorie === "Hoodie") {
    hoodiProductsHTML += productHTML;
  } else if (product.categorie === "Tote Bag") {
    totebagProductsHTML += productHTML;
  } else if (product.categorie === "Chocolate") {
    chocolateProductsHTML += productHTML;
  }
});

document.getElementById("tshirtProductsCards").innerHTML = tshirtProductsHTML;
document.getElementById("hoodieProductsCards").innerHTML = hoodiProductsHTML;
document.getElementById("totebagProductsCards").innerHTML = totebagProductsHTML;
document.getElementById("chocolateProductsCards").innerHTML = chocolateProductsHTML;
