const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const cntlabel=document.getElementById("number")
let count=0;

increase.onclick=function()
{
    count++;
    cntlabel.textContent=count;
}


reset.onclick=function()
{
    cntlabel.textContent=0;
}


decrease.onclick=function()
{
    count--;
    cntlabel.textContent=count;
}
