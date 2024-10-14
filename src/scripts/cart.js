function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

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
