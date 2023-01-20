function formatDuration (seconds) {
  if(seconds === 0)
    return 'now'
  
  let r = ''
  let sec = seconds % 60
  let minutes = Math.floor(seconds/60)
  let hours = Math.floor(minutes/60)
  let days = Math.floor(hours/24)
  let years = Math.floor(days/365)
  
  if(minutes >= 60) {
    minutes = minutes % 60
  }

  if(hours >=24) {
    hours = hours % 24
  }
  
  if(days >= 365) {
    days = days % 365
  }
  
 
  let s = sec !== 0 ? sec === 1 ? 'second': 'seconds': ''
  let m = minutes !== 0 ? minutes === 1 ? 'minute': 'minutes': ''
  let h = hours !== 0 ? hours === 1 ? 'hour': 'hours': ''
  let d = days !== 0 ? days === 1 ? 'day': 'days': ''
  let y = years !== 0 ? years === 1 ? 'year': 'years': ''

  let array = []
  
  if(sec !==0)
    array.push(`${sec} ${s}`)
  if(minutes !==0)
    array.push(`${minutes} ${m}`)
  if(hours !==0)
    array.push(`${hours} ${h}`)
  if(days !==0)
    array.push(`${days} ${d}`)
  if(years !==0)
    array.push(`${years} ${y}`)

  console.log(array)
  
  for (let x in array){
    
    switch(x) {
      case '0':
        r = array[x]
        break;
      case '1':
        r = array[x] + ' and ' + r    
        break;
      case '2':
        r = array[x] + ', ' + r
        break;
      case '3':
        r = array[x] + ', ' + r
        break;
      case '4':
        r = array[x] + ', ' + r
        break;
      default:
        
    }  
  }

  return r

  
  
  
  
  
  
}
