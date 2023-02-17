function treeByLevels (rootNode) {
  let stack = []
  let temp = []
  let tempRoot = rootNode
  if(tempRoot){
    temp.push(tempRoot)
  }
  
  while(temp && temp.length > 0){
    if(temp[0].value !== null){
      stack.push(temp[0].value)
    }
    if(temp[0].left !== null){
      temp.push(temp[0].left)
    }
    if(temp[0].right !== null){
      temp.push(temp[0].right)
    }
    
    temp.shift()
	}  
   
  return stack;
}