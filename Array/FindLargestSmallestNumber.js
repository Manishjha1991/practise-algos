function FindLargestSmallestNumber(array){
    let min=[];
    let max=[];
    for(let i=1;i<=array.length;i++){
        if(array[i]>max){
            max=array[i]
        }
        else if(array[i]<min){
            min=array[i]
            console.log(min)
        }
    }
    console.log("Largest number : " + max);
    console.log("Smallest number : " + min);
 
}

FindLargestSmallestNumber([32,43,53,54,32,65,63,98,43,23])