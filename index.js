function lightMode() {
  const lightModeActive = {
    body: document.getElementById("js-light-mode"),
    title: document.getElementById("title"),
    borders: document.querySelector('.border')
  };

  if (lightModeActive.body.classList.contains("light-mode")) {
    lightModeActive.body.classList.remove("light-mode");
    lightModeActive.title.classList.replace("light-mode", "title-link" );
  }
  else{
    lightModeActive.body.classList.add("light-mode");
    lightModeActive.title.classList.replace("title-link", "light-mode");
    lightModeActive.title.classList.replace("border", "light-mode");
  }
}
