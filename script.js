//hearts section

let hearts = {
  value: 5,
};

let heart = document.querySelector(".heart strong");

// console.log(heart);

heart.innerHTML = hearts.value;

//correct section
let correctStyles = {
  opacity: 1,
  background: "green",
};
let allPuzSpan = document.querySelectorAll(".puzzle span");
let path = document.querySelector(".path");
let path_H4 = document.querySelector(".path h4");

let charSpan = document.querySelectorAll(".chracters span");

function correct(val, alpha) {
  // console.dir();
  alpha.style = "display:none";
  if (val == "i") {
    allPuzSpan[1].innerText = "i";

    //  val.parentElement.style = "display:none";
  }
  if (val == "j") {
    allPuzSpan[2].innerText = "j";
  }
  if (val == "a") {
    allPuzSpan[3].innerText = "a";
    allPuzSpan[6].innerText = "a";
    allPuzSpan[9].innerText = "a";
  }
  if (val == "y") {
    allPuzSpan[4].innerText = "y";
  }

  if (val == "k") {
    allPuzSpan[5].innerText = "k";
  }
  if (val == "n") {
    allPuzSpan[8].innerText = "n";
    allPuzSpan[10].innerText = "n";
  }

  // path.classList.add("path-showing");
  Object.assign(path.style, correctStyles);
  path_H4.innerText = `CONGRATS : You Choosed An Correct Answers`;
  heart.innerText = ++hearts.value;

  if (hearts.value > 8) {
    console.log("success");
    path_H4.innerText = "You Won The Game";
    path.setAttribute("style", "background:#0895e7;opacity:1");
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }
}

//Wrong answer
let path_button = document.querySelector(".play-again");
console.log(path_button);
let wrongStyles = {
  opacity: 1,
  background: "red",
};
let gameOver = {
  opacity: 1,
  background: "tomato",
};
function wrong(alpha) {
  console.log(alpha);
  alpha.style = "display:none";

  if (hearts.value > 0) {
    heart.innerText = --hearts.value;
    path_H4.innerText = `FAILED: You Choosed An Wrong Answers`;
    Object.assign(path.style, wrongStyles);
  }
  if (hearts.value < 0) {
    hearts.value = 0;
  }
  if (hearts.value === 0) {
    Object.assign(path.style, gameOver);
    path_H4.innerText = `GAME OVER`;
    remove.innerText = "";
    setTimeout(function () {
      window.location.reload();
    }, 1500);
  }

  // path.style = "background-color:red";
}

//remove the path pop-up
let remove = document.querySelector(".remove");
remove.onclick = () => {
  path.style = "opacity:0";
};

