// const showmore1 = document.getElementById("show-more-day1");
// const showmore2 = document.getElementById("show-more-day2");
// const schedulevisibility =
//   document.getElementsByClassName("schedulevisibility");
// const showbtn1 = document.getElementById("show-more1");
// const showbtn2 = document.getElementById("show-more2");
// showmore1.onclick = function () {
//   //   schedulevisibility.classList.remove("invis");
//   for (let i = 0; i < schedulevisibility.length; i++) {
//     schedulevisibility[i].classList.toggle("invis");
//   }
//   if (showbtn1.innerHTML == "Show less" && showbtn2.innerHTML == "Show less") {
//     showbtn1.innerHTML == "Show more";
//     showbtn2.innerHTML == "Show more";
//   } else {
//     showbtn1.innerHTML == "Show less";
//     showbtn2.innerHTML == "Show less";
//   }
//   // showmore1.classList.add("invis");
//   // showmore2.classList.add("invis");
// };

// showmore2.onclick = function () {
//   for (let i = 0; i < schedulevisibility.length; i++) {
//     schedulevisibility[i].classList.toggle("invis");
//     if (showbtn2.innerHTML == "Show less") {
//       showbtn2.innerHTML == "Show more";
//     } else {
//       showbtn2.innerHTML == "Show less";
//     }
//   }
//   if (showbtn1.innerHTML == "Show less" && showbtn2.innerHTML == "Show less") {
//     showbtn1.innerHTML == "Show more";
//     showbtn2.innerHTML == "Show more";
//   } else if (
//     showbtn1.innerHTML == "Show more" &&
//     showbtn2.innerHTML == "Show more"
//   ) {
//     showbtn1.innerHTML == "Show less";
//     showbtn2.innerHTML == "Show less";
//   }
//   // showmore1.classList.add("invis");
//   // showmore2.classList.add("invis");
// };

const showmore1 = document.getElementById("show-more-day1");
// const showmore11 = document.getElementById("show-more-day11");
const showmore2 = document.getElementById("show-more-day2");
const schedulevisibility =
  document.getElementsByClassName("schedulevisibility");
const showbtn1 = document.getElementById("show-more1");
const showbtn2 = document.getElementById("show-more2");
showmore1.onclick = function () {
  //   schedulevisibility.classList.remove("invis");
  for (let i = 0; i < schedulevisibility.length; i++) {
    schedulevisibility[i].classList.remove("invis");
    showbtn1.innerHTML = "Show less";
  }
  showmore1.classList.add("invis");
  showmore2.classList.add("invis");
};

showmore2.onclick = function () {
  for (let i = 0; i < schedulevisibility.length; i++) {
    schedulevisibility[i].classList.remove("invis");
    showbtn2.innerHTML = "Show less";
  }
  showmore1.classList.add("invis");
  showmore2.classList.add("invis");
};
