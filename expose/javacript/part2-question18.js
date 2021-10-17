function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }


 
  var intID = setInterval(printTime, 1000);
  