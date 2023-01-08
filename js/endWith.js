function solution(str, ending){
  
  let length = ending.length
  let valid = true
  
  for(let x = str.length - length, y = 0; x < str.length; x++) {
    
    console.log(str[x], ending[y])
    if(str[x] !== ending[y])
      valid = false
    y++
  }
  
  console.log(str,ending)
  
  return valid
}