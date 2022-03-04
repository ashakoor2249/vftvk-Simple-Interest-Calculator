function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount=parseInt(principal)+parseInt(interest)
    var year = new Date().getFullYear()+parseInt(years);
    if(isNaN(principal) || principal<1){
    alert("Input not valid. Enter a number greater than 0.")
    }

    else{
        document.getElementById("result").innerHTML = "If you deposit "+principal+ " at an interest rate of "+rate+ " you will receive an amount of "+interest+ " in the year "+year+ "<br/>";
    }
    

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}



    

        