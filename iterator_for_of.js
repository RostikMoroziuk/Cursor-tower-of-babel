const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let cur = 1;
    return {
      next() {
        var res;
        if (cur > max) {
          res = {
            done: true
          };
        } else if ((cur % 3) === 0 && (cur % 5) === 0) {
          res = {
            done: false,
            value: "FizzBuzz"
          };
        } else if ((cur % 3) === 0) {
          res = {
            done: false,
            value: "Fizz"
          };
        } else if ((cur % 5) === 0) {
          res = {
            done: false,
            value: "Buzz"
          };
        } else {
          res = {
            done: false,
            value: cur
          }
        }
        cur++;
        return res;
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}