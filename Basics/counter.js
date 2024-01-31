function countdown() {
    let counter = 30;
  
    function updateCounter() {
      console.log(counter);
  
      if (counter > 0) {
        counter--;
        setTimeout(updateCounter, 1000);
      } else {
        console.log("Countdown complete!");
      }
    }
  
    updateCounter();
  }
  
  countdown();
  