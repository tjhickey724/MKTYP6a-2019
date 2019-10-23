function calcBMI(){
  w = weight.value  // read weight from element with id="weight"
  h = height.value  // read height from element with id="height"
  bmi = 703*w/(h*h)  // calculate the Body Mass Index
  BMI.innerHTML =    // write into label element with id "BMI"
      "You're BMI is "
      +bmi.toFixed(1)  // round BMI to 1 decimal place


}
