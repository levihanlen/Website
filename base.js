
const switchColorModeBtn = document.querySelector("#switchColorModeBtn");
  
function openModal(modalId) {
  console.log("hi");
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

const modals = document.querySelectorAll(".modal");
const closeOnOutsideClick = (e) => {
  for (let i = 0; i < modals.length; i++) {
    if (e.target == modals[i]) {
      closeModal(i);
    }
  }
};
window.addEventListener('click', closeOnOutsideClick);
window.addEventListener('touchend', closeOnOutsideClick);

function closeModal(i) {
  modals[i].style.display = "none";
}

let darkMode = false;
switchColorMode();
function switchColorMode() {
  darkMode = !darkMode;

  if (darkMode) {
    switchColorModeBtn.innerHTML = "light_mode";
    // Set dark mode colors
    document.documentElement.style.setProperty('--colorPrimary', 'hsl(var(--colorHue), 58.3%, 60%)');
    document.documentElement.style.setProperty('--colorDarkest', 'hsl(var(--colorHue), 15%, 85%)');
    document.documentElement.style.setProperty('--colorDark', 'hsl(var(--colorHue), 15%, 75%)');
    document.documentElement.style.setProperty('--colorMedium', 'hsl(var(--colorHue), 15%, 40%)');
    document.documentElement.style.setProperty('--colorLight', 'hsl(var(--colorHue), 20%, 20%)');
    document.documentElement.style.setProperty('--colorLightest', 'hsl(var(--colorHue), 10%, 8.5%)');
    document.documentElement.style.setProperty('--colorWhite', 'hsl(var(--colorHue), 0%, 5%)');
  } else {
    // Set light mode colors
    switchColorModeBtn.innerHTML = "dark_mode";
    document.documentElement.style.setProperty('--colorPrimary', 'hsl(var(--colorHue), 58.3%, 52%)');
    document.documentElement.style.setProperty('--colorDarkest', 'hsl(var(--colorHue), 42.9%, 18%)');
    document.documentElement.style.setProperty('--colorDark', 'hsl(var(--colorHue), 17.6%, 38.3%)');
    document.documentElement.style.setProperty('--colorMedium', 'hsl(var(--colorHue), 16.3%, 59.4%)');
    document.documentElement.style.setProperty('--colorLight', 'hsl(var(--colorHue), 48.7%, 90.3%)');
    document.documentElement.style.setProperty('--colorLightest', 'hsl(var(--colorHue), 32.9%, 97%)');
    document.documentElement.style.setProperty('--colorWhite', 'white');
  }
}