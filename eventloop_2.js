function async1() {
  console.log("async1 start")

  async2().then(() => console.log("async1 end"))
}

function async2() {
  console.log("async2")
  return Promise.resolve()
}

console.log("script start")

setTimeout(function() {
  console.log("setTimeout")
}, 0)

async1()

new Promise(function(resolve) {
  console.log("promise1")
  resolve()
}).then(function() {
  console.log("promise2")
})

console.log("script end")