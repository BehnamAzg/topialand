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

const products = [{
  image: "bg-[url('./images/zolaldel_tshirt_black.png')]",
  image_hover: "group-hover:bg-[url('./images/zolaldel_tshirt_black_2.png')]",
  stat