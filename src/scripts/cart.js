function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

let discountAmount = 0;

let discountLabelHello = false;
let isInvalidCode = false;

function checkDiscountCode() {
  const discountAmountEl = document.getElementById("discountAmountEl");
  if (discountInputField.value === "HELLO") {
    discountAmount = 999;
    discountLabelHello = true;
    isInvalidCode = false;
  } else if (discountInputField.value === "") {
    return;
  } else {
    if (discountLabelHello) {
      isInvalidCode = true;
    } else {
      discountLabelHello = false;
      isInvalidCode = true;
    }
  }
  updateOrderSummary();
}

function removeDiscountCode() {
  discountLabelHello = false;
  discountAmount = 0;
  updateOrderSummary();
}

// document.addEventListener("click", function(event) {
//   if (event.target && event.target.id === "discountApplyBtn") {
//     const validDiscountCode = document.getElementById("validDiscountCode");
//     if (validDiscountCode) {
//       validDiscountCode.classList.remove("hidden");
//       validDiscountCode.classList.add("flex");
//       console.log('valid')
//     } else {
//       console.log("invalid")
//     }
//   } else {
//     console.log('not working at all')
//   }
// });

// const discountAmountEl = document.getElementById("discountAmountEl");
//   const discountInputField = document.getElementById("discountInputField");
//   const validDiscountCode = document.getElementById("validDiscountCode");
//   const discountCodeLabel = document.getElementById("discountCodeLabel");
//   const invalidDiscountCode = document.getElementById("invalidDiscountCode");
//   if (discountInputField.value === "HELLO") {

//     validDiscountCode.classList.remove("hidden");
//     validDiscountCode.classList.add("flex");
//     discountCodeLabel.classList.remove("hidden");
//     discountCodeLabel.classList.add("flex");
//     invalidDiscountCode.classList.remove("flex");
//     invalidDiscountCode.classList.add("hidden");
//     discountAmount = 999;

//   } else if (discountInputField.value === "") {
//     return;
//   } else {
//     invalidDiscountCode.classList.remove("hidden");
//     invalidDiscountCode.classList.add("flex");
//   }
