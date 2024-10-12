// prevent dialogs to close whrn cliked inside
const preventClosing = document.querySelectorAll(".preventClosing").forEach((i) => {
  i.addEventListener('click', (event) => event.stopPropagation());
})

// Open Currency Modal
const currencyDialog = document.getElementById("currencyDialog")
document.querySelectorAll(".currencyBtn").forEach((i) => {
  i.addEventListener("click", () => {
    currencyDialog.showModal();
  });
});
currencyDialog.addEventListener('click', () => {
  currencyDialog.close()
})

// Open hamburger Modal
const hamburgerDialog = document.getElementById("hamburgerDialog")
document.getElementById("hamburgerBtn").addEventListener("click", () => {
  hamburgerDialog.showModal();
});
hamburgerDialog.addEventListener('click', () => {
  hamburgerDialog.close()
})

// Open Profile Modal
const profileDialog = document.getElementById("profileDialog")
document.querySelectorAll(".profileBtn").forEach((i) => {
  i.addEventListener("click", () => {
    profileDialog.showModal();
  });
});
profileDialog.addEventListener('click', () => {
  profileDialog.close()
})

// Open Sign up Modal
const signUpDialog = document.getElementById("signUpDialog")
document.querySelectorAll(".signUpBtn").forEach((i) => {
  i.addEventListener("click", () => {
    signUpDialog.showModal();
  });
});
signUpDialog.addEventListener('click', () => {
  signUpDialog.close()
})

// Open Contact Information Modal
const contactDialog = document.getElementById("contactDialog")
document.getElementById("contactBtn").addEventListener("click", () => {
  contactDialog.showModal();
});
contactDialog.addEventListener('click', () => {
  contactDialog.close()
})

// Open Privacy Policy Modal
const privacyDialog = document.getElementById("privacyDialog")
document.getElementById("privacyBtn").addEventListener("click", () => {
  privacyDialog.showModal();
});
privacyDialog.addEventListener('click', () => {
  privacyDialog.close()
})


// Open Terms Of Service Modal
const termsOfServiceDialog = document.getElementById("termsOfServiceDialog")
document.getElementById("termsOfServiceBtn").addEventListener("click", () => {
  termsOfServiceDialog.showModal();
});
termsOfServiceDialog.addEventListener('click', () => {
  termsOfServiceDialog.close()
})


// Open Shipping policy Modal
const shippingPolicyDialog = document.getElementById("shippingPolicyDialog")
document.querySelectorAll(".shippingPolicyBtn").forEach((i) => {
  i.addEventListener("click", () => {
    shippingPolicyDialog.showModal();
  });
});
shippingPolicyDialog.addEventListener('click', () => {
  shippingPolicyDialog.close()
})

// Open Product Modal
const productDialog = document.getElementById("productDialog")
document.querySelectorAll(".card").forEach((i) => {
  i.addEventListener("click", () => {
    productDialog.showModal();
  });
});
productDialog.addEventListener('click', () => {
  productDialog.close()
})

// Open Cart Modal
const cartDialog = document.getElementById("cartDialog")
document.getElementById("cartBtn").addEventListener("click", () => {
  cartDialog.showModal();
});
cartDialog.addEventListener('click', () => {
  cartDialog.close()
})

