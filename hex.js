// MADE A VARIABLE CONST WITH 16 VALUES THAT WILL BE OUR HEXADECIMAL NUMBER
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//GET THE ID'S FROM DE HTML CODE TO A VARIABLE CONSTANT
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// FUNCTION ON CLICK
btn.addEventListener('click', function () {

    //ADDING THE "#" BEFORE THE COLOR TO VS RECOGNIZE THEM
    let hexColor = '#';

    //USING FOR TO GET 6 RANDOM NUMBERS
    for (let i = 0; i < 6; i++) {

        hexColor += hex[getRandomNumber()];

    }

    //SHOWING THE COLOR NAME AND CHANGING THE BACKGROUND 
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

//MADE A FUNCTION TO GET A RANDOM NUMBER BASED ON THE LENGTH THAT IS A HEXADECIMAL NUMBER WITH 6 CHARACTERS
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);

}