function domainName(url){
    arr = url.split(/[:/.]+/)
    if(arr[0] === "http" || arr[0] === "https"){
      arr.shift()
        if(arr[0] === "www"){
          arr.shift()
          console.log(arr[0])
          return arr[0]
    }
    }
    if(arr[0] === "www"){
      arr.shift()
      console.log(arr[0])
      return arr[0]
    }
    console.log(arr[0])
    return arr[0]
  }
  domainName("https://www.google.com")