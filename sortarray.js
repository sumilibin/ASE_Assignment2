
let numbers = [1,2,3,4,5];

function descendingOrder(a, b)
{
  return b - a;
}
numbers.sort(descendingOrder);

console.log(numbers);
