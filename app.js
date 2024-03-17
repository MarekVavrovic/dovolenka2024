const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

const modal = document.getElementById("myModal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const apr15 = document.getElementById("apr15");
const secretInput = document.getElementById("secret");

import { apr1504 } from "./utils.js";

about.addEventListener("click", function (event) {
  const id = event.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      event.target.classList.add("active");
    });

    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

/*modal*/
let hideModalTimeout;

function showModal() {
  modal.style.visibility = "visible";
  modal.style.zIndex = 10;
  clearTimeout(hideModalTimeout);
}

function hideModal() {
  modal.style.visibility = "hidden";
}

const secret = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return hours + minutes;
};

apr15.addEventListener("click", () => {
  const val = secretInput.value;
  const passCode = secret();
  secretInput.focus();
  showModal();

  if (val === passCode) {
    modalText.textContent = apr1504();
    secretInput.value = "";
  } else {
    secretInput.value = "";
    modalText.textContent = `Verify, you are not a human...`;
  }

  hideModalTimeout = setTimeout(() => {
    hideModal();
  }, 11500);
});

closeModal.addEventListener("click", hideModal);
