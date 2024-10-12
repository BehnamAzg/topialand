// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = langData[key];
  });
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`data/${lang}.json`);
  return response.json();
}

// Function to change language
async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
  toggleFarsiStylesheet(lang); // Toggle Farsi Direction
}

// Function to toggle Farsi direction based on language selection
function toggleFarsiStylesheet(lang) {
  const selectedLanguage = document.getElementById("selectedLanguage");
  if (lang === "en") {
    document.querySelector("html").dir = "ltr";
    document.getElementById("enBtn").classList.add("bg-orange-100");
    document.getElementById("frBtn").classList.remove("bg-orange-100");

    selectedLanguage
      .querySelector("span:nth-child(1)")
      .classList.remove("fi-ir");
    selectedLanguage.querySelector("span:nth-child(1)").classList.add("fi-us");
    selectedLanguage.querySelector("span:nth-child(2)").textContent = "English";
  } else if (lang === "fa") {
    document.querySelector("html").dir = "rtl";
    document.getElementById("enBtn").classList.remove("bg-orange-100");
    document.getElementById("frBtn").classList.add("bg-orange-100");

    selectedLanguage
      .querySelector("span:nth-child(1)")
      .classList.remove("fi-us");
    selectedLanguage.querySelector("span:nth-child(1)").classList.add("fi-ir");
    selectedLanguage.querySelector("span:nth-child(2)").textContent = "فارسی";
  } else {
    return;
  }
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
  toggleFarsiStylesheet(userPreferredLanguage);
});
