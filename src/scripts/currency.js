// Currency Dropdown Toggle
document.getElementById("currencySelectBtn").addEventListener("click", () => {
  document.getElementById("currencyDropdown").classList.toggle("hidden");
  document
    .getElementById("currencySelectBtnArrow")
    .classList.toggle("rotate-180");
});

// Currency Filter Search
function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("currencyInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("currencyDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// Language dropdown toggle
document.getElementById("languageSelectBtn").addEventListener("click", () => {
  document.getElementById("languageDropdown").classList.toggle("hidden");
  document
    .getElementById("languageSelectBtnArrow")
    .classList.toggle("rotate-180");
});

// Select Currency
const selectedCurrencEl = document.getElementById("selectedCurrencEl");
selectedCurrencEl.innerHTML = `<div><span class="fi fi-ca mr-1"></span><span>Canada | CAD $</span></div>`;

const currencyIconBtn = document.getElementById("currencyIconBtn");
currencyIconBtn.innerHTML = `<span class="fi fi-ca"></span>`;

document.querySelectorAll(".selectCurrencyBtn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.currentTarget;
    const selectedCurrency = clickedButton.firstElementChild.innerHTML;
    selectedCurrencEl.innerHTML = `${selectedCurrency}`;

    const selectedCurrencyIcon =
      clickedButton.querySelector("span:nth-child(1)");
    selectedCurrencyIcon.classList.remove("mr-1");
    currencyIconBtn.innerHTML = `${selectedCurrencyIcon.outerHTML}`;
  });
});
