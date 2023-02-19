function moveZeros(arr) {
  
  let count = 0;
  let r = []
  
  for(let x in arr) {
    if(arr[x] === 0) {
      count++
    } else {
      r.push(arr[x])
    }
  }
  for(let x = 0; x < count; x++){
    r.push(0)
  }
 
  return r  
}