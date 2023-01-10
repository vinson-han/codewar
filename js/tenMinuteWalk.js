function isValidWalk(walk) {
  if(walk.length !== 10)
    return false
  let x = 0, y = 0
  
  for(let w in walk) {
    if(walk[w] === 'n'){
      y++    
    }
    else if(walk[w] === 's'){
      y--
    }
    else if(walk[w] === 'e')
      x++
    else if(walk[w] === 'w')
      x--
  }
  return x === 0 & y === 0 ? true : false
}