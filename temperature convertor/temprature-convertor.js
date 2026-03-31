let txt = document.getElementById("txt");
let submit = document.getElementById("submit")
let r1 = document.getElementById("r1")
let r2 = document.getElementById("r2")
let output = document.getElementById("output")

submit.onclick =
function()
{
    let data =txt.value;

    if(r1.checked)
    {
        data = (data * (9/5))+32 ;
        output.textContent = `temperature in fahrentie is ${data} °f`
    }
    else if (r2.checked)
    {
        data = (data -32) *(5/9) ;
        output.textContent = `temperature in celcius is ${data} °c`
    }
}