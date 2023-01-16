function findUniq(arr) {
  let obj = {}
  
  for(let x in arr){
    
    if(obj[arr[x]] === undefined)
      obj[arr[x]] = 1
    else{
      
      obj[arr[x]] = obj[arr[x]] + 1
    }
  }
  
  let entries = Object.entries(obj)
  
  let data  = entries.filter(([key,value] = entry) => {
    if(value === 1){
      return key
    }
  })
  
  return +data[0][0]
}
