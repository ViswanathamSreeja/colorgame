var numSquares = 9;
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var rgbdisplay = document.getElementById("rgbdisplay");
var resultdisplay = document.getElementById("resultdisplay");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var ebut = document.getElementById("ebut");
var hbut = document.getElementById("hbut");
var vhbut = document.getElementById("vhbut");
ebut.addEventListener("click", function () {
    this.classList.add("selected");
    hbut.classList.remove("selected");
    vhbut.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedcolor = pickColor();
    rgbdisplay.textContent = pickedcolor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none"
        }

    }
});

hbut.addEventListener("click", function () {
    this.classList.add("selected");
    ebut.classList.remove("selected");
    vhbut.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedcolor = pickColor();
    rgbdisplay.textContent = pickedcolor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

vhbut.addEventListener("click", function () {
    this.classList.add("selected");
    ebut.classList.remove("selected");
    hbut.classList.remove("selected");
    numSquares = 9;
    colors = generateRandomColor(numSquares);
    pickedcolor = pickColor();
    rgbdisplay.textContent = pickedcolor;
    for (i = 0; i < colors.length; i++) {

        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }

});

rgbdisplay.textContent = pickedcolor;
for (i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
}
for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        var clickedcolor = this.style.background;
        if (pickedcolor === clickedcolor) {
            resultdisplay.textContent = "Correct";
            changecolor(clickedcolor);
            h1.style.background = clickedcolor;
            reset.textContent = "Play Again?";
        }
        else {
            this.style.background = "#232323";
            resultdisplay.textContent = "Try Again";
        }
    });
}

function changecolor(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor());

    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}
reset.addEventListener("click", function () {
    h1.style.background = "#232323";
    reset.textContent = "New Colors";
    colors = generateRandomColor(numSquares);
    pickedcolor = pickColor();
    rgbdisplay.textContent = pickedcolor;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
});
