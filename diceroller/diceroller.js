function fun1()
{
    let num = document.getElementById("num").value;
    let values=[];
    let imgval=[];

    for(let val =1;val<=num;val++)
    {
        let value=Math.floor((Math.random()*6)+1);
        values.push(value);
        imgval.push(`<img src="diceimages/dice${value}.png" alt="dice${value} height="50" " >`);
    }
    document.getElementById("data").textContent=values.join("-");
    document.getElementById("imgdata").innerHTML=imgval.join(" ");
}