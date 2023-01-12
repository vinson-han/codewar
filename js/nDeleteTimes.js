function deleteNth(arr,n){
  let obj = {}
  let r = []
  for(let x in arr){
    if(!obj[arr[x]]){
      obj[arr[x]] = 1
      r.push(arr[x])
    }
    else{
      obj[arr[x]] = obj[arr[x]] + 1 
      if(obj[arr[x]] <= n){
        r.push(arr[x])
      }
    }   
  }
  return r
}