function calculate()
{
    let principal = document.getElementById("Principal").value;
    let interest = document.getElementById("Interest").value;
    let years = document.getElementById("Years").value;
    let output = document.getElementById("output");

    let interestamnt  = (principal*interest*years)/100;
    let amnt = interestamnt.toLocaleString(undefined,{style:"currency" , currency : "INR"});
    output.textContent=`Your total interest is ${amnt}`;

}