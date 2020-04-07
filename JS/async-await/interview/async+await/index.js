let p = Promise.resolve(1);
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(234)
  }, 2000)
})
function* test() {
  let a = yield p;
  console.log(a)
  let b = yield p2;
  console.log(b);
}
