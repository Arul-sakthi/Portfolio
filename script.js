const navBtn = document.getElementsByClassName("nav-Btn")[0];
const nav = document.getElementsByClassName("nav-Links")[0];

navBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
window.onscroll = () => {
  navBtn.classList.remove("click");
  nav.classList.remove("active");
};
var typed = new Typed(".text", {
  strings: ["Frontend Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx6a9GoehctGpXi-hXetq4FVvXbg3-z3jANiEiuVDW6PxGpu5BBNpM7xoWG8kCKKL-X/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      Swal.fire({
        title: "✅ Success!",
        text: "Your message received!",
        icon: "success",
        confirmButtonText: "OK",
        timerProgressBar: true,
      });
      form.reset();
    })
    .catch((error) =>
      Swal.fire({
        title: "❌ Error!",
        text: "Something went wrong!",
        icon: "error",
      })
    );
});
