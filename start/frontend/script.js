function loadEvent() {
  let hECMAthlon = {
    getMaxValue: function (input) {
      let maxValues = input.split(",");
      let maxValue = 0;
      for (let i = 0; i < maxValues.length; i++) {
        let tempValue = parseInt(maxValues[i]);
        if (tempValue > maxValue) {
          maxValue = tempValue;
        }
      }
      return [maxValue];
    },

    getGreaterThan: function (input) {
      let greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let greaterNums = [];
      for (let j = 0; j < greaterValues.length; j++) {
        if (greaterValues[j] > parseInt(input)) {
          greaterNums.push(greaterValues[j]);
        }
      }
      return greaterNums;
    },

    fizzBuzz: function (input) {
      let output = [];
      for (let k = 1; k <= parseInt(input); k++) {
        let value;
        if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
        else if (k % 3 === 0) value = "Fizz";
        else if (k % 5 === 0) value = "Buzz";
        else value = k;
        output.push(value);
      }
      return output;
    },
  };

  let maxValueBtn = document.querySelector(".maxValue__btn");
  let greaterThanBtn = document.querySelector(".greaterThan__btn");
  let fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

  let maxValueInput = document.querySelector(".maxValue__input");
  let greaterThanInput = document.querySelector(".greaterThan__input");
  let fizzBuzzInput = document.querySelector(".fizzBuzz__input");

  let maxValueRoot = document.querySelector(".maxValue__container");
  let greaterThanRoot = document.querySelector(".greaterThan__container");
  let fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

  maxValueBtn.addEventListener("click", () => {
    let maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
    logResult(maxValueRoot, maxValue);
  });
  greaterThanBtn.addEventListener("click", () => {
    let greaterValues = getOutput(
      hECMAthlon.getGreaterThan(greaterThanInput.value)
    );
    logResult(greaterThanRoot, greaterValues);
  });
  fizzBuzzBtn.addEventListener("click", () => {
    let result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
    logResult(fizzBuzzRoot, result);
  });

  function getOutput(output) {
    let returnValue = ["The function starts"];
    for (let i = 0; i < output.length; i++) {
      returnValue.push(output[i]);
    }
    returnValue.push("The function ends");
    return returnValue;
  }

  function logResult(place, values) {
    while (place.firstChild) {
      place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
      place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
  }
}
window.addEventListener("load", loadEvent);
