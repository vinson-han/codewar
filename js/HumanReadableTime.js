function humanReadable (seconds) {
  
  if(seconds < 0)
    return seconds
  
  let s = seconds % 60
  let m = Math.floor(seconds / 60)
  let h = 0
  if(m > 59){
    h = Math.floor(m / 60)
    m = m % 60
  }
  
  let x = h.toString().padStart(2,"0") + ':' + m.toString().padStart(2,"0")+ ":" + s.toString().padStart(2, "0")
  
    
  return x;
}