//aksi Password
const aksiPwI = document.querySelectorAll(".bx.bxs-show");
aksiPwI.forEach((Pw) => {
  Pw.addEventListener("click", showPw);
});

function showPw(event) {
  let passwordInput = event.target.previousElementSibling;
  let showIcon = event.target;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showIcon.className = "bx bxs-hide";
  } else {
    passwordInput.type = "password";
    showIcon.className = "bx bxs-show";
  }
}
