"use strict";
const form = document.querySelector(".calculator");
const percentage = document.querySelector(".percentage");
const remark = document.querySelector(".remark");
const span = document.querySelector(".year");

// let input= document.querySelector("input")

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3d748fff70msh255b55c3a3d6addp15ac1ejsnfa56a9e7aca8",
    "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
  },
};

function renderError(msg) {
  form.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
}

function calculateLove() {
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?sname=${name1}&fname=${name2}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      percentage.innerHTML = `${data.percentage}❤`;
      remark.innerHTML = data.result;
    })
    .catch((err) =>
      renderError(
        `Something went wrong ❌. Check your internet connection and try again later`
      )
    );

  setTimeout(() => {
    window.location.reload();
  }, 10000);
}

span.innerHTML = new Date().getFullYear();
// span.style.color = "Black";
