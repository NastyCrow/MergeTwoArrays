/*
    Given an array arr1 and array arr2, merge both arrays and return one array
    const arr1 = ["a", "b", "c"]
    const arr2 = ["c", "e", "f"]
    
    const expectedOutput = ["a", "b", "c", "c", "e", "f"] 
*/

const arr1 = ["a", "b", "c"];
const arr2 = ["c", "e", "f"];

function mergeArray(arr1, arr2) {
  arr1.push(...arr2);
  return arr1;
}
console.log(mergeArray(arr1, arr2));
