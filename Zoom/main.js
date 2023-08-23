let nav = document.querySelectorAll(".S05 > nav > ul > li");
let boxes = document.querySelectorAll(".S05 > .container > .box");
let ident = "";
let currentBox = "";

console.log(boxes);
nav.forEach(function (i) {
  i.onclick = function () {
    nav.forEach(function (ele) {
      ele.classList.remove("active");
    });
    i.classList.add("active");
    ident = i.innerHTML;
    currentBox = document.querySelectorAll(
      `.S05 > .container > .${ident.toLowerCase().split(" ")[0]}`
    );
    boxes.forEach(function (ele) {
      ele.style = "display:none";
    });
    currentBox.forEach(function (element) {
      element.style = "display:block";
    });
  };
});
