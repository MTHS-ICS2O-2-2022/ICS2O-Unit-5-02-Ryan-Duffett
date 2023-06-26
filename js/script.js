// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Ryan Duffett
// Created on: April 2023
// This file contains the JS functions for index.html


const randomNumberPositive = Math.floor(Math.random() * 6) + 1
const randomNumberNegative = Math.floor(Math.random() * -6) + 1

function myButtonClicked() {
  buttonOnChecked = document.getElementById("positive-checked").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNumberPositive + "."
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNumberNegative + "."
  }
}
