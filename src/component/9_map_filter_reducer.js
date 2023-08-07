import React from 'react'

const Map_filter_reducer = () => {

    // an array called amount
    let amount = [10, 20, 30, 5, 92]
    console.log("Initial Amount", amount);

    let newAmount1 = amount.map((ele) => ele + 10);  //gives an array
    console.log("maped Amount", newAmount1);

    let newAmount2 = amount.filter((ele) => (ele > 20));  //gives an array
    console.log("Filtered Amount", newAmount2);

    let newAmount3 = amount.reduce((ele, sum) => ele + sum, 0);  //gives a variable
    console.log("Reduced Amount", newAmount3);
    
    amount.forEach(function(number) {
        console.log(number);
      })
    return (
        <>
            <div>Map_filter_reducer</div>
            <h1>initial Array:{amount}</h1>
            <h2>After map:{newAmount1}</h2>
            <h1>After filter:{newAmount2}</h1>
            <h4>After reduce:{newAmount3}</h4>
            <h5>After ForEach Loop{}</h5>
        </>
    )
}

export default Map_filter_reducer


