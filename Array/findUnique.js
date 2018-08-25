function findUnique(array){
    var uniqueValue=[];
    for(let i =0;i=array.length-1;i++){
        if(array[i+1]!==array[i]){
            uniqueValue.push(array[i])
        }
    }
    return uniqueValue;
}
console.log("unique value is",findUnique([1,1,2,3,4,5,5,6]))