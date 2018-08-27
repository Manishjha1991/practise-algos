//How to find the missing number in integer array of 1 to 6?




function findMissingNumberInArray(array,count){

    var missing = new Array();
   
    for(var i=1;i<=count;i++) {
        if(array.indexOf(i) == -1){
            missing.push(i);
        }
    }

return missing;

}

console.log(findMissingNumberInArray([1,3,4,5,6],6))