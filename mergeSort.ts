// Q-https://www.codingninjas.com/codestudio/problems/ninja-and-sorted-arrays_1214628
// using two pointers
function mergeSortedArrrays(arr1: number[], arr2: number[]) {
  let i: number = 0
  let j: number = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++
    } else {
      let requiredArray = arr1.splice(i + 1)
      arr1[i] = arr2[j]
      arr1.slice(0, i)
      arr1.push(...requiredArray)
      j++
    }
  }

  if (j < arr2.length) {
    arr1.push(...arr2.slice(j))
  }
  return arr1
}
// console.log(mergeSortedArrrays([3, 6, 9], [4, 10]))
 // console.log(mergeSortedArrrays([1, 4,6,10], [4, 10]))