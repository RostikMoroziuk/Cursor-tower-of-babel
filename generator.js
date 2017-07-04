const max = +process.argv[2];

function* FizzBuzz() {
  let cur = 1;
  while (cur <= max) {
    var res;
    if ((cur % 3) === 0 && (cur % 5) === 0) {
      res = "FizzBuzz";
    } else if ((cur % 3) === 0) {
      res = "Fizz";
    } else if ((cur % 5) === 0) {
      res = "Buzz";
    } else {
      res = cur;
    }
    cur++;
    yield res;
  }
}

for (var n of FizzBuzz()) {
  console.log(n);
}