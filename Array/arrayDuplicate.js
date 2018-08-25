function findDuplicate(array){
  var duplicate=[];  
  for (var i = 0; i < array.length - 1; i++) { 
    if (array[i + 1] == array[i]) {  
        duplicate.push(array[i]);  
    }  
}  
return duplicate;
}

console.log("duplicate value is",findDuplicate([1,1,2,3,4,5,5,6]))


