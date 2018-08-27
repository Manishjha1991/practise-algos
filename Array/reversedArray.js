function reverseArray(array){
    let reversedArray=new Array();
let count  = array.length;
for (let i = count - 1; i >= 0; i--)
{
   reversedArray.push(array[i]) 
  // count is only evaluated once and then the comparison is always on 0.
}
return reversedArray;
}


console.log(reverseArray([2,3,4,5,6]))