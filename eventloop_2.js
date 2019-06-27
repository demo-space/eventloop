console.log("script start")

setTimeout(function() {
  console.log("setTimeout")
}, 0)

console.log("async1 start")

new Promise(resolve => {
  console.log("async2")
  resolve()
}).then(() => {
  console.log("async1 end")
})

new Promise(function(resolve) {
  console.log("promise1")
  resolve()
}).then(function() {
  console.log("promise2")
})

console.log("script end")
