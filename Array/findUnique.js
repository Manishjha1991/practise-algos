
function uniqueArray2(arr) {
    var a = [];
    for (let i=0;i<arr.length-1; i++)
      
        if (a.indexOf(arr[i]) === -1 && arr[i] !== ''){
            a.push(arr[i]);
        }
          
    return a;
}
console.log("unique value is",uniqueArray2([1,1,2,3,4,5,5,6]))



