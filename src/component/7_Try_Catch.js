import React from 'react'

const  Try_Catch = () => {

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
        try{
        const data1=await myPromise
        console.log(data1)
        return data1
        }
        catch(error){
            console.log(`Errors Encountered: ${error}`)
        }
    }
    data().then((mydata)=>{
        console.log(mydata)
    })

  return (
    <>
      <h1>Error Handling Using Try and Catch Method</h1>
    </>
  )
}

export default Try_Catch
