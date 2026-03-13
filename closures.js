// Closure Example

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();

fn();
fn();
fn();

// Counter Example

function counter() {
  let c = 0;

  return function () {
    c++;
    return c;
  };
}

const inc = counter();

console.log(inc());
console.log(inc());


// Multiplier Example

function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = createMultiplier(2);

console.log(double(5));
console.log(double(10));
