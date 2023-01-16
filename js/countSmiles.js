
//More Elegent Solution with REgex
// function countSmileys(arr) {
//   return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }

function countSmileys(arr) {
  let face = {
    
      "eyes": [':',';'],
      "nose": ['','-','~'],
      "mouth": [')', 'D']
    
  }
  
  let twoLength = []
  let threeLength = []  
  for (let x in arr){
    if(arr[x].length === 2)
      twoLength.push(arr[x])
    else if(arr[x].length === 3)
      threeLength.push(arr[x])
  }
  
  let total = 0
  
  twoLength = twoLength.filter(e => face.eyes.includes(e[0]) && face.mouth.includes(e[1]))
  
  threeLength= threeLength.filter(e =>
                     face.eyes.includes(e[0]) &&
                     face.mouth.includes(e[2]) &&
                     face.nose.includes(e[1])) 
  
  
  return total = twoLength.length + threeLength.length
}