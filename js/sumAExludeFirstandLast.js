function sumArray(array) {
  
  if(!array || array.length === 0)
    return 0
  
  array = array.sort((a,b) => a - b)

  array.shift()
  array.pop()
  
  if(array.length === 0)
    return 0
  
  let sum = array.reduce((accum, curr) => accum + curr)
  
  return sum
}