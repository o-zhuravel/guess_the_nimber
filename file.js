let randomValue = Math.floor(Math.random() * 101);

let wrapper = document.querySelector(".wrapper");
let div = document.querySelector(".block");
let phrase = document.querySelector(".firstPhrase");

let input = document.querySelector("input");
let button = document.querySelector("button");

wrapper.addEventListener("dblclick", showDiv);
button.addEventListener("click", test);

function showDiv () {
    div.classList.toggle("hidden");
    wrapper.classList.toggle("act");
}

function test() {
        if (isNaN(Number(input.value))) {
            phrase.textContent = "Що? Я ж сказав число від 0 до 100";
            input.value = "";
        }
        else if (input.value < randomValue) {
            phrase.textContent = `Я загадав число більше ніж ${input.value}`;
            input.value = "";
        }
        else if (input.value > randomValue) {
            phrase.textContent = `Я загадав число меньше ніж ${input.value}`;
            input.value = "";
        }
        else {
            phrase.textContent = `Так! Ти вгадав! ${input.value}!`;
            input.classList.toggle("hidden");
            button.classList.toggle("hidden");
        }
}



