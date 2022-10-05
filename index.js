
// const arr=[2,7,11,13]
const arr=[1,-1,-1,2,2]
let target=1
let startIndex=0
let endIndex=arr.length-1
let result=[] //used extra space,to filter out duplicates and  to keep time complexity O(n)
for(var i=0;i<=arr.length;i++){
  if(endIndex<=startIndex){
    startIndex++
    i=startIndex
    endIndex=arr.length-1
    continue
  }
  if(arr[startIndex]+arr[endIndex]===target){
    result.push([arr[startIndex],arr[endIndex]])
  }
  endIndex--
}
let resultFinalIndex=result.length-1

for(let i=0;i<=resultFinalIndex;i++){
  if((result[i][0]===result[resultFinalIndex][0])&&(result[i][1]===result[resultFinalIndex][1])){
    console.log(result[i][0],result[i][1])
  }else{
    
    console.log(result[i][0],result[i][1])
    console.log(result[resultFinalIndex][0],result[resultFinalIndex][1])
  }
  resultFinalIndex--
}