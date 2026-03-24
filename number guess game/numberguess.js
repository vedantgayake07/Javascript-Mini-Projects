const max=100;
const min=50
let answers = Math.floor(Math.random()*(max-min)+min);
let attempts=0;

let txt = document.getElementById("txt");
let output = document.getElementById("Output")
let submit = document.getElementById("submit")

let guess;
let end=false;


    submit.onclick = function ()
    {
    if(end) return;
    guess=txt.value;

    if(isNaN(guess))
    {
        output.textContent= "Enter a valid number";
    }
    else if(guess<min || guess>max)
    {
        output.textContent= "Enter a valid number"
    }
    else
    {
        attempts++;

        if(guess>answers)
        {
            output.textContent= "Too High ! try again"
        }
        else if(guess<answers)
        {
            output.textContent= "Too low ! try again"
        }
        else
        {
            output.textContent= `Ohhh congratulation ! you guessed ${answers} withing ${attempts} attempts`;
            end=true;
        }

    }
    }
