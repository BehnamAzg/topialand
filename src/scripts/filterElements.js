filterSelection("allCategories")
function filterSelection(filteEl) {
  const cardFilterEl = document.getElementsByClassName("cardFilterDiv")
  const bannerFilterEl = document.getElementsByClassName("bannerFilterDiv")
  const categoriesFilterBtn = document.getElementsByClassName("categoriesFilterBtn")
  for (let i = 0; i < cardFilterEl.length; i++) {
    if (cardFilterEl[i].classList.contains(filteEl)) {
      cardFilterEl[i].classList.remove('hidden')
      cardFilterEl[i].classList.add('grid')
    } else {
      cardFilterEl[i].classList.add('hidden')
    }
  }
  for (let i = 0; i < bannerFilterEl.length; i++) {
    if (bannerFilterEl[i].classList.contains(filteEl)) {
      bannerFilterEl[i].classList.remove('hidden')
      bannerFilterEl[i].classList.add('flex')
    } else {
      bannerFilterEl[i].classList.add('hidden')
    }
  }
  for (let i = 0; i < categoriesFilterBtn.length; i++) {
    if (categoriesFilterBtn[i].classList.contains(filteEl)) {
      categoriesFilterBtn[i].classList.add('bg-orange-300')
    } else {
      categoriesFilterBtn[i].classList.remove('bg-orange-300')
    }
  }
}
