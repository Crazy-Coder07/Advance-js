import React from 'react'

const Fetch_api = () => {
    const FetchData=async()=>{
       const response=fetch('https://api.covid19api.com/summary');
       response.then((apidata)=>{
        return apidata.json();
       })
       .then((Actualdata)=>{
        const mydata=Actualdata.Countries[77];
        console.log(mydata)

        document.getElementById('apiindia').innerHTML=`The name of the country is ${mydata.Country}.
              The total Confirmed Cases are ${mydata.TotalConfirmed} and the 
              TotalDeaths are ${mydata.TotalDeaths} and the total Recovered cases are ${mydata.TotalRecovered}`
       })
       .catch((error)=>{
        console.log(`Error Encountered: ${error}`)
       })

    }
    FetchData()
  return (
    <>
      <h1>Fetched data From Api</h1>
    </>
  )
}

export default Fetch_api
