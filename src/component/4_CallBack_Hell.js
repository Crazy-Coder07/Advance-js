import React from 'react'

const CallBack_Hell = () => {

    
      const doSomething=(callback)=> {
        console.log("Doing something...");
        setTimeout(()=> {
          console.log("Done something.");
          callback("Result of doing something");
        }, 2000);
      }
      
      const doSomethingElse=(result, callback)=>{
        console.log("Doing something else with result:", result);
        setTimeout(()=> {
          console.log("Done something else.");
          callback("New result after doing something else");
        }, 3000);
      }
      
      const doSomethingElseAgain=(result, callback)=> {
        console.log("Doing something else again with result:", result);
        setTimeout(()=> {
          console.log("Done something else again.");
          callback("Final result after doing something else again");
        }, 4000);
      }
      
      doSomething((result1)=> {
        doSomethingElse(result1, (result2)=> {
          doSomethingElseAgain(result2, (finalResult)=> {
            console.log("Final result:", finalResult);
          });
        console.log("final result",result2)
        });
      });
      

  return (
    <>
      <h1>Hello this is the Example of Callback Hell</h1>
    </>
  )
}

export default CallBack_Hell
