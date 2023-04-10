document.getElementById('submit').addEventListener('click', function(event){
    
    const bb = document.getElementById("bb").value;
    const tb = document.getElementById("tb").value;
    const bmitotal = document.getElementById("total-bmi");
    const bmicategory = document.getElementById("BMI-Category");

    const bmi = Number(bb)/(Number(tb)/100)**2;
    
    bmitotal.innerText = bmi.toFixed(1);
    console.log(bmi);
    
    if(bmi < 18.5){
       bmicategory.innerText = "Underweight";
       bmicategory.style.color = "yellow"; 
    } else if(bmi <= 24.9 ){
        bmicategory.innerText = "Normal";
        bmicategory.style.color = "green"; 
    } else if(bmi <= 29.9){
        bmicategory.innerText = "Overweight";
        bmicategory.style.color = "red"; 
    } else if(bmi >= 30) {
        bmicategory.innerText = "Obesity";
        bmicategory.style.color = "red"; 
    } 
});