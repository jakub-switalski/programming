let allNumbers = [27, 83, 29, 10, 97, 82, 593, 372];

let biggestNumber = 0;

for (let currentNumber of allNumbers) {
  // console.log('The current number is:', currentNumber);
  if (currentNumber > biggestNumber) {
    biggestNumber = currentNumber;
  }
}

console.log('The biggest number is:', biggestNumber);


let smallestNumber = biggestNumber;

for (let currentNumber of allNumbers) {
  if (currentNumber < smallestNumber) {
    smallestNumber = currentNumber;
  }
}

console.log('The smallest number is:', smallestNumber);



