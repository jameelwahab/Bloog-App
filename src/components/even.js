let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = 0;
let even_sum = 0;
let odd_sum = 0;
let odd = 0;

function evenOdd(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      even_sum = even_sum + array[i];
      even++;
    } else {
      odd_sum = odd_sum + array[i];
      odd++;
    }
  }
}
evenOdd(array);
console.log(`Sum of even numbers ${even_sum}`);
console.log(`Total numbers of even ${even}`);
console.log(`Sum of odd numbers ${odd_sum}`);
console.log(`Total numbers of odd ${odd}`);
