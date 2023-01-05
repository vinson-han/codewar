function sumStrings(a,b) { 
  let a1 = a.split('').reverse()
  let b2 = b.split('').reverse()
  let c = []
  let d= []
  
  let length = Math.min(a1.length,b2.length)
  let max = Math.max(a1.length,b2.length)
  for(let x = 0; x < max; x++){
    if(a1[x] && b2[x]){
      c[x] = Number(a1[x]) + Number(b2[x])    
    } else {
      if(a1[x])
        c[x] = Number(a1[x])
      else
        c[x] = Number(b2[x])
    }
  }
  
  for (let x=0,r=0; x < max; x++){
   if(r === 1) {
     c[x] = c[x]+1
     r = 0
   }
    
   if(c[x] >= 10) {
     r = 1
     c[x] = c[x] % 10
     if(!c[x+1] && r === 1 && x+1 === max)
      c.push(1)
   } else {
     r = 0
   }
  } 
  
  
  c.reverse()
  for(let x in c) {
    if(c[x] === 0 && c[x+1] === 0){
      c.shift()
    }
    else if(c[x] === 0 && c[x+1] !== 0){
      c.shift()
      break
    } else
      break
  }
  return c.join('')
}