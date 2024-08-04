const htmlElements = {
  body: document.querySelector(".js-body"),
  title: document.querySelector(".js-title"),
  card: document.querySelector(".js-card"),
  nav: document.querySelectorAll(".nav-link"),
  border: document.querySelectorAll(".border"),
  borderRight: document.getElementById("navbar"),
  button: document.querySelector(".mode-icon-div"),
  sectionTitle: document.querySelector(".js-section-title"),
  codeBg: document.getElementsByTagName("code"),
};

console.log(htmlElements.codeBg);

// Check for saved theme in localStorage and apply it
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "light") {
    activateLightMode();
  } else {
    activateDarkMode();
  }
});

htmlElements.button.addEventListener("click", toggleLightMode);

function toggleLightMode() {
  if (htmlElements.body.classList.contains("light-mode-background")) {
    activateDarkMode();
  } else {
    activateLightMode();
  }
}

function activateLightMode() {
  htmlElements.body.classList.add("light-mode-background");
  htmlElements.title.classList.replace("title-link", "light-mode");
  htmlElements.card.classList.replace("card", "light-mode");
  htmlElements.card.classList.add("card-light-mode");
  htmlElements.borderRight.classList.add("border-light-mode");
  htmlElements.sectionTitle.classList.add("title-light-mode");
  Array.from(htmlElements.codeBg).forEach((element) => {
    element.classList.add("code-light-mode");
  });

  htmlElements.border.forEach((borderItem) => {
    borderItem.classList.add("border-light-mode");
  });

  htmlElements.nav.forEach((navItem) => {
    navItem.classList.replace("nav-link", "nav-link-light-mode");
  });

  htmlElements.button.innerHTML = `
        <img 
          src="./images/moon.png"
          alt="Moon icon"
          class="js-light-mode-icon mode-icon"/>
    `;

  // Save the user's preference in localStorage
  localStorage.setItem("theme", "light");
}

function activateDarkMode() {
  htmlElements.body.classList.remove("light-mode-background");
  htmlElements.title.classList.replace("light-mode", "title-link");
  htmlElements.card.classList.replace("light-mode", "card");
  htmlElements.card.classList.remove("card-light-mode");
  htmlElements.borderRight.classList.remove("border-light-mode");
  htmlElements.sectionTitle.classList.remove("title-light-mode");
  Array.from(htmlElements.codeBg).forEach((element) => {
    element.classList.remove("code-light-mode");
  });

  htmlElements.border.forEach((borderItem) => {
    borderItem.classList.remove("border-light-mode");
  });

  htmlElements.nav.forEach((navItem) => {
    navItem.classList.replace("nav-link-light-mode", "nav-link");
  });

  htmlElements.button.innerHTML = `
        <img 
          src="./images/brightness.png"
          alt="Brightness icon"
          class="js-light-mode-icon mode-icon"/>
    `;
  // Remove the light mode from localStorage (default is dark mode)
  localStorage.removeItem("theme");
}
