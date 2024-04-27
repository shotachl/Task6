var squares = [];

var shiftButton = document.getElementById("shiftButton");
var unshiftButton = document.getElementById("unshiftButton");
var popButton = document.getElementById("popButton");
var pushButton = document.getElementById("pushButton");
var deleteButton = document.getElementById("deleteButton");
var sortButton = document.getElementById("sortButton");

const randomValue = Math.floor(Math.random() * 5) + 3;

for(let i=0; i < randomValue; i++){
    makeSquares();
}

function makeSquares(){
    var square = {
        id: "square: " + Math.floor(Math.random() * 100),
        color: getRandomColor(),
        size: getRandomSize(),
    }
    squares.push(square);
}

function unshiftSquares(){
    var square = {
        id: "square: " + Math.floor(Math.random() * 100),
        color: getRandomColor(),
        size: getRandomSize(),
    }
    squares.unshift(square);
}

console.log(squares);

function getRandomColor(){
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomSize(){
    return Math.floor(Math.random() * 30) + 20 + "px";
}

function displaySquares(){
    var container = document.getElementById("squaresContainer");
    container.innerHTML = "";

    squares.forEach(square => {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.backgroundColor = square.color;
        div.style.width = square.size;
        div.style.height = square.size;
        container.append(div);
    });
}

displaySquares();

shiftButton.addEventListener("click", function(){
    squares.shift();
    console.log(squares);
    displaySquares();
});

unshiftButton.addEventListener("click", function(){
    unshiftSquares();
    console.log(squares);
    displaySquares();
});

popButton.addEventListener("click", function(){
    squares.pop();
    console.log(squares);
    displaySquares();
});

pushButton.addEventListener("click", function(){
    console.log(squares);
    makeSquares();
    displaySquares();
});

deleteButton.addEventListener("click", function(){
    var randomElement = Math.floor(Math.random() * squares.length);
    squares.splice(randomElement, 1);
    console.log(squares)
    displaySquares();
});

sortButton.addEventListener("click", function(){
    squares.sort(function(a,b){
        return parseInt(a.size) - parseInt(b.size);
    });
    displaySquares();
});

