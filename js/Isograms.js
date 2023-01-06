function isIsogram(str){
  
  let lower = str.toLowerCase()
  
  let stack = []
  let isFalse = true
  
  for(let x  in lower){
    console.log(lower[x])
    if(!stack.includes(lower[x]))
      stack.push(lower[x])
    else
      isFalse = false
  }
  
  return isFalse
}