var a = 1;
function fn(a) {
  console.log(a);
  a = 2;
}
fn();             // undefined
console.log(a);   // 1