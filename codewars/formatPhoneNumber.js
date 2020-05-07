function createPhoneNumber(numbers){
  
    let arr1 = numbers.slice(0,3);
    let arr2 = numbers.slice(3,6);
    let arr3 = numbers.slice(6)
    let results = ["(",...arr1,")"," ",...arr2,"-",...arr3];
    
    let final = results.reduce((x,y)=>x+y);
    return final;
    }

    console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))