const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const colour = document.querySelector('.color');

btn.addEventListener('click', () => {
    // Random number between 0 - 3
    const randomNumber = Math.floor(Math.random() * colours.length);
    console.log(randomNumber);
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});
