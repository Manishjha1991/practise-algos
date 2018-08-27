function sumOfElements(array){
    let sum=0;
    for(let i =0;i<=array.length-1;i++){
     console.log(array[i])   
     sum+=array[i];
    } 
    return sum;
}
console.log(sumOfElements([1,2,3,4,5,6]))