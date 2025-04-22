//promises and promise chaining

function fetchData(){
    return new Promise((resolve, reject)=>{
        console.log("Fetching Data...");
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data fetched successfully")
            } else {
                reject("Error fetching data!")
            }
        }, 3000)
    })
}

//consuming the promise
fetchData()
    .then((data)=>{
        console.log(data)
        return `Hi Ayushmaan!`
    })
    .then((value)=>{     // Chaining promise
        console.log("Greet:", value);
    })
    .catch((error)=>{console.log(error)})
