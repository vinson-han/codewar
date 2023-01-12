function tribonacci(signature,n){
  if(n === 0)
    return []

  let arr = []

  for(let x = 0; x < n; x++){
    if(signature[x] !== 'undefined' && x < 3){
      arr.push(signature[x])
    } else {
      let y = arr[x-1] + arr[x-2] + arr[x-3]
      arr.push(y)
    }
  }

  return (arr)
}