function getSum(n) {
  if(n > 0 && n < 1000000){
    sum = 0
    x = n + 2
    arr = []
      for(let i = 1; i < x; i++){
        arr.push(i)
      }
      for(k = 0; k < arr.length; k++){
        sum = sum + arr[k]
      } 
      console.log(arr.join(' '))
 
      for(let y = 1; y != x; y++){
        if(y<x){
        arr.shift()
        arr = arr.map(num => num + 2);
        console.log(arr.join(' '))
          for(j = 0; j < arr.length; j++){
              sum = sum + arr[j]
            }  
        }
        else{
          return 0;
        }
      }
      console.log(sum)
    }
  else{
    return 0;
  }
}
getSum(3)