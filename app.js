document.querySelector('#results').style.display = 'none';

  document.querySelector('#loading').style.display = 'none';



document.querySelector('#loan-form').addEventListener('submit', function(e){
  document.querySelector('#results').style.display = 'none';

  document.querySelector('#loading').style.display = 'block';

  //setTimeout

  setTimeout(calculate , 2000);


  e.preventDefault();
});


function calculate () {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //select results
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12 ;
    const calculatedPayments = parseFloat(years.value) * 12 ;

    //calculate monthly payments

    const x = Math.pow( 1 + calculatedInterest , calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x-1) ; 

    if (isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly*calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
      //show results
        document.querySelector('#results').style.display = 'block';
        //hide loading
        document.querySelector('#loading').style.display = 'none';
    } else {
       const error = document.querySelector('.my-error');
       error.appendChild(document.createTextNode('invalid values'));
       error.style.background = 'red';
       //hide results
       document.querySelector('#results').style.display = 'none';
       document.querySelector('#loading').style.display = 'none';
    }

    setTimeout( removeError , 3000);

}

function removeError (e) {
    document.querySelector('.my-error').remove();
}