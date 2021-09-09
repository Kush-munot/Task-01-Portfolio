
const theme = document.querySelector("#theme-link");

document.querySelector(".btn-toogle").addEventListener("click", function () {

  if (theme.getAttribute("href") == "dark.css") {

    theme.href = "light.css";
    document.querySelector(".btn-toogle").innerHTML="Dark Mode"

  } else {

    theme.href = "dark.css";
    document.querySelector(".btn-toogle").innerHTML="Light Mode"

  }
  
});


