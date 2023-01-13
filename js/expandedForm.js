function expandedForm(num) {
  let x = num.toString().split('').reverse()
  let y = []
  for(let i = 0; i < x.length; i++){
    if(x[i] !== '0')
       y.push(x[i] * Math.pow(10, i))
  }
  
  return y.reverse().join(' + ')
}