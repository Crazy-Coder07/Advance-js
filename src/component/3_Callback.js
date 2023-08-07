import React from 'react'

const Callback = () => {

    /*
     * 
    function doSomething(callback) {
         do some work here
         ...
      
         when the work is done, call the callback function

        callback();
    }
      
       define the callback function

      function callbackFunction() {
        console.log("Callback function was called.");
      }
      
       pass the callback function to doSomething
      doSomething(callbackFunction);
     * 
     */

      function doSomething(callback) {
        console.log("Doing some work...");
        setTimeout(callback, 3000); // simulate async work that takes 3 seconds
      }
      
      function callbackFunction() {
        console.log("Callback function was called.");
      }
      
      doSomething(callbackFunction);
      
      
  return (
    <>
       <h1>This Will Show execution of CallBack Function</h1> 
    </>
  )
}

export default Callback
