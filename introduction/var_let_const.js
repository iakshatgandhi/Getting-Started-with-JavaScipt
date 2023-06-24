function example1() {
    var x = 10;
    if (true) {
      var x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
  }

function example2() {
    let x = 10;
    if (true) {
      let x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
  }

function example3() {
    const x = 10;
    if (true) {
      const x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
  }


example1();
example2();
example3();