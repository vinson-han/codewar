function solution(input, markers) {

  let x = input.split('\n')
 
  for(let i in markers){
    for(let y in x){
      let m = (x[y].indexOf(markers[i]))
      if(m > 0) {
        x[y] = x[y].slice(0, m-1)
      }
    }
  }
  
  return (x.join('\n'))
    