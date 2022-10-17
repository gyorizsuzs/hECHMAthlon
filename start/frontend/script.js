function loadEvent() {
  // const hECMAthlon = {
  //   getMaxValue: function (input) {
  //     let maxValues = input.split(",");
  //     let maxValue = 0;

  //     // for (let i = 0; i < maxValues.length; i++) {
  //     //   let tempValue = parseInt(maxValues[i]);
  //     //   if (tempValue > maxValue) {
  //     //     maxValue = tempValue;
  //     //   }
  //     // }

  //     // const getMax = (a, b) => Math.max(a, b);
  //     // maxValue = maxValue.reduce(getMax);

  //     maxValue = maxValues.reduce((previous, current) => {
  //       let tempValue = parseInt(current);
  //       return tempValue > previous ? tempValue : previous;
  //     }, 0);

  //     return [maxValue];
  //   },

  //   getGreaterThan: function (input) {
  //     let greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //     let greaterNums = [];
  //     // for (let j = 0; j < greaterValues.length; j++) {
  //     //   if (greaterValues[j] > parseInt(input)) {
  //     //     greaterNums.push(greaterValues[j]);
  //     //   }
  //     // }
  //     greaterNums = greaterValues.filter((actualValue) => {
  //       return actualValue > parseInt(input);
  //     });
  //     return greaterNums;
  //   },

  //   fizzBuzz: function (input) {
  //     let output = [];

  //     for (let value = 1; value <= parseInt(input); value++) {
  //       output.push(value);
  //     }
  //     let fizziBuzzi = output.map((value) => {
  //       if (value % 5 === 0 && value % 3 === 0) {
  //         return "FizzBuzz";
  //       } else if (value % 3 === 0) {
  //         return "Fizz";
  //       } else if (value % 5 === 0) {
  //         return "Buzz";
  //       } else return value;
  //     });
  //     return fizziBuzzi;

  //     // for (let k = 1; k <= parseInt(input); k++) {
  //     //   let value;
  //     //   if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
  //     //   else if (k % 3 === 0) value = "Fizz";
  //     //   else if (k % 5 === 0) value = "Buzz";
  //     //   else value = k;
  //     //   output.push(value);
  //     // }
  //     // return output;
  //   },
  // };

  let hECMAthlon = class calculator {
    constructor(input) {
      this.input = input;
    }
    getMaxValue() {
      let maxValues = this.input.split(",");
      let maxValue = 0;
      maxValue = maxValues.reduce((previous, current) => {
        let tempValue = parseInt(current);
        return tempValue > previous ? tempValue : previous;
      }, 0);

      return [maxValue];
    }
    getGreaterThan() {
      let greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let greaterNums = greaterValues.filter((element) => element > this.input);

      return greaterNums;
    }
    fizzBuzz() {
      let output = [];

      for (let value = 1; value <= parseInt(this.input); value++) {
        output.push(value);
      }
      let fizziBuzzi = output.map((value) => {
        if (value % 5 === 0 && value % 3 === 0) {
          return "FizzBuzz";
        } else if (value % 3 === 0) {
          return "Fizz";
        } else if (value % 5 === 0) {
          return "Buzz";
        } else return value;
      });
      return fizziBuzzi;
    }
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
    let result = new hECMAthlon(maxValueInput.value);
    let maxValue = getOutput(result.getMaxValue());
    logResult(maxValueRoot, maxValue);
  });
  greaterThanBtn.addEventListener("click", () => {
    let result1 = new hECMAthlon(greaterThanInput.value);
    let greaterValues = getOutput(result1.getGreaterThan());
    logResult(greaterThanRoot, greaterValues);
  });
  fizzBuzzBtn.addEventListener("click", () => {
    let result2 = new hECMAthlon(fizzBuzzInput.value);
    let result = getOutput(result2.fizzBuzz());
    logResult(fizzBuzzRoot, result);
  });

  function getOutput(output) {
    // let returnValue = [];
    // for (let i = 0; i < output.length; i++) {
    //   returnValue.push(output[i]);
    // }
    // returnValue.push("The function ends");
    // return returnValue;

    return ["The function starts", ...output, "The function ends"];
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
