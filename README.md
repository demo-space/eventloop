# learn eventloop

## 宏任务

* script
* setTimeout/setInterval/setImmediate
* I/O

## 微任务

* Promise.then/catch（**注意 new Promise 里的代码是同步的，会立即执行**）
* process.nextTick
* MutationObserver

主线程 -> 微任务队列 -> 宏任务队列

1. 主线程（即同步）的代码先执行（通常是一个 script 脚本），遇到微任务，则加入到微任务队列，遇到宏任务，则加入到宏任务队列
2. 同步代码执行完后，先执行微任务代码，微任务队列队首出列，该微任务代码中，如果遇到微任务则加入到微任务队列，如果遇到宏任务，则加入到宏任务队列，逻辑同上
3. 微任务队列执行完后（微任务队列为空），执行宏任务队列，如果遇到微任务则加入到微任务队列，如果遇到宏任务，则加入到宏任务队列，逻辑同上
4. 当前的宏任务执行完后，检查微任务队列有没有任务（是否有新的微任务加入），如果有，优先执行微任务队列
5. 如此反复循环，直到任务队列都执行完毕

## FAQ

经测试，Node 10 有些表现和浏览器不一致，Node 12.4 表现良好

async/await 可以和 Promise 相似地去理解，eventloop_2.js 效果和 eventloop_1.js 相同

其实 async 函数只是会返回一个 Promise 而已（如果返回不是 Promise，也会包装成一个 Promise），**同步的代码还是会同步执行掉**（本质是个函数不变），直到遇到 await，await 之后的代码可以理解成 Promise.then 里的代码，要等异步事件执行完后才会执行