'use strict'
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
  
}


// Задание 2
function worker(arr) {
  let sum=0;
  for (let i=0; i<arr.length; i++) {
  sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
   let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = func(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
