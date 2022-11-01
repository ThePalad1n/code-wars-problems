function sumOfSquares(n) {
    let list = []
    let listSum = []
    for(i = 1; i < 20; i++){
      if(i % Math.sqrt(i) == 0){
        list.push(i)
      }
    }
    while(n != 0){
      let closestNum = list.reduce(function(prev, curr){
          return (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev)
      })
      listSum.push(closestNum)
      n -= closestNum
    }
  }


  /*
  optimized code from geekforgeeks
function sumOfSquares(n) {
    if( Math.floor( Math.sqrt(n) ) === Math.ceil( Math.sqrt(n))) return 1
	
    while(n%4===0) n/=4
    if(n%8 === 7 ) return 4

    for( let i = 1 ; i*i <=n ;i++){
        let base = Math.floor(Math.sqrt( n - i*i ))
        if( base*base === n-i*i ) return 2
    }
    
    return 3  
}
   */