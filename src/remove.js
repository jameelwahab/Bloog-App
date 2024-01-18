let array = [23, 55, 11, 64, 76, 89, 11];

function removeElement(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0 || array[i] % 11 == 0) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

const result = removeElement(array);
console.log(result);
