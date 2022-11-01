function squareDigits(num){
    let z = num.toString()
    let intarr = []
    for(i = 0; i < z.length; i++){
      let x = z[i]
      intarr.push(Math.pow(x, 2))
    }
    let v = parseInt(intarr.join(""))
    return v
  }