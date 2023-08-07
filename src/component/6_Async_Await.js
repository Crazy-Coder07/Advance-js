import React from 'react'

const Async_Await = () => {

    const myPromise = new Promise((resolve, reject) => {
        const randomNumber=4
        if (randomNumber <8) {
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
     
    
    const data=async()=>{
        const data1=await myPromise
        console.log(data1)
    }
    data()

  return (
    <>
      <h1>Hey This is the Example of Async Await</h1>
    </>
  )
}

export default Async_Await
