import React from 'react'
const Promises = () => {


// Creating a Promise that resolves or rejects after a certain time
const myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random()
    if (randomNumber < 0) {
      setTimeout(() => {
        console.log(randomNumber)
        resolve('Promise resolved!');
      }, 2000);
    } else {
      setTimeout(() => {
        console.log(randomNumber)
        reject('Promise rejected!');
      }, 2000);
    }
  });
  
  // Consuming the Promise
  myPromise.then(result => {
    console.log(result); // Output: Promise resolved!
  }).catch(error => {
    console.error(error); // Output: Promise rejected!
  });
    
  return (
    <>
      <h1>Hii Promises ya to Resolve ho sakta hai ya Reject ho sakta hai</h1>
      <h2>Agar Resolve hota hai to ham .then() use karte hai but Reject hota hai to .catch() ka use karte hai</h2>
    </>
  )
}

export default Promises
