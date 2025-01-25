function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers.');
  }
  return a + b;
}

let result1 = add(1, 2); // Correct usage
console.log(result1); // Output: 3

try {
  let result2 = addSafe("1", 2); // Throws error
  console.log(result2);
} catch (error) {
  console.error(error.message); //Output: Both parameters must be numbers.
}

//Alternative using type guards:
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addSafe2(a: any, b: any): number{
    if(!isNumber(a) || !isNumber(b)){
        throw new Error("Both parameters must be numbers.")
    }
    return a + b;
}
console.log(addSafe2(1,2)); //Output: 3
console.log(addSafe2("1",2));//Throws error