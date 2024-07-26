//page 9
const binarySearch=(list,item)=>{
    let low=0;
    let high=list.length-1;
    let guess;

    while (low<=high){
        let mid=Math.floor((low+high)/2); //Math.floor for integer division
        guess=list[mid];
        if (guess===item){
           return mid;
        }
        if (guess>item){
            high=mid-1;      
        }else{
            low=mid+1;      
        }

    }
    return 'None';
}

my_list=[1,3,5,7,9];

console.log(binarySearch(my_list,3));
console.log(binarySearch(my_list,-1));
