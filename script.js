function sum ()
{
     let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
   
    let converted1 = ParseFloat(number1);
    let converted2 = ParseFloat(number2);

    let summation = converted1=converted2;
    let subtraction = converted1-converted2;
    let multiplication = converted1*converted2;
    let division = converted1/converted2;

    document.getElementById('summation').innerHTML = "The summation is="+summation;
    document.getElementById('suntraction').innerHTML = "The subtraction is="+subtraction;
    document.getElementById('multiplication').innerHTML = "The multiplication is="+multiplication;
    document.getElementById('division').innerHTML = "The vivision is="+division;
}
