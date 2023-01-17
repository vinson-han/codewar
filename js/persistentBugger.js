function persistence(num) {
   
  let x = []
  let count = 0
  x = num.toString().split('')
  
  if(x.length === 1)
    return 0
  
  do {
    let temp = x.reduce((accum, curr) => {
      return +accum * +curr
    })
    count++
    x = temp.toString().split('')
    
  } while (x.length > 1)
  
  return count
}