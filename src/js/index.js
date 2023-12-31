//  menu aksi
const menu = document.querySelector(".menu");
const menuBox = document.querySelector(".menuBox");
const closeAksi = document.querySelector("#closeAksi");
const header = document.querySelector("header");
menu.onclick = () => {
  menuBox.classList.toggle("active");
};

closeAksi.onclick = () => {
  menuBox.classList.remove("active");
};

document.onclick = (w) => {
  if (!header.contains(w.target) && !menuBox.contains(w.target)) {
    menuBox.classList.remove("active");
  }
};

//  pesan aksi
const pesan = document.querySelector(".pesan");
const boxPesan = document.querySelector(".boxPesan");
pesan.onclick = () => {
  boxPesan.classList.toggle("active");
};

const profile = document.querySelector("header img.profile");

profile.addEventListener("click", () => {
  const body = document.body;
  if (body.getAttribute("id") === "darkMode") {
    body.removeAttribute("id");
    localStorage.removeItem("tema");
  } else {
    body.setAttribute("id", "darkMode");
    localStorage.setItem("tema", "darkMode");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const status = localStorage.getItem("tema");
  if (status === "darkMode") {
    document.body.setAttribute("id", "darkMode");
  }
});
