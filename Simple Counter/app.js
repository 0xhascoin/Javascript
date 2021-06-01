let count = 0;
let value = document.getElementById("value");
let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count -= 1
        } else if(styles.contains('increase')) {
            count += 1
        } else {
            count = 0
        }

        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0){
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.innerText = count;
    })
});

// let increaseButton = document.querySelector(".increase");
// let decreaseButton = document.querySelector(".decrease");
// let resetButton = document.querySelector(".reset");

// increaseButton.addEventListener("click", () => {
//   count += 1;
//   value.innerText = count;
// });

// decreaseButton.addEventListener("click", () => {
//   count -= 1;
//   value.innerText = count;
// });

// resetButton.addEventListener("click", () => {
//   value.innerText = 0;
//   count = 0;

// });
