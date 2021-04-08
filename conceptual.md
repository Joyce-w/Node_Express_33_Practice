### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Asynchronous code can be managed with promises or callbacks in JavaScript.
- What is a Promise?
  Promise is a 'voucher' that retuns a one-time guarantee (an object) of a future value. 
- What are the differences between an async function and a regular function?
  Async functions will return a promise after and can be used later. Regular functions will run regardless of whether codes are finished running or not. 
- What is the difference between Node.js and Express.js?
  Node.js is an environment that runs server-side while Express.js is a framework similar to flask that allows web-apps to be built on the principles off Node.js. 
- What is the error-first callback pattern?
  Error-first callback pattern occurs when executing an asynchronous function. Arguments for the callback is reserved for an error object and helps async code stay fast in Node.js.  
- What is middleware?
  Middleware allows code to run between a request and a response cycle. They are functions allow us to separate code into logical groupings and provide more robust and abstracted error handling. Som use cases is ensuring that users are authenticated in a route or some endpoint. 
- What does the `next` function do?
  Next function is accessed through middleware. When a current middleware does not end the req/res, next() will pass 'control' to the next middleware function. 
- What does `RETURNING` do in SQL? When would you use it?
  Returning clause allows for retrieval of column values. 
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  Although the overall function is async, the awaits run separately, so when one await finishes, the return array will run. Instead, make parallel request by setting await after the requests have been set off or use Promise.all() to resolve when all promises are resolved. 

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
