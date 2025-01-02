// Three states in promise:
// Pending
// Fullfilled
// Reject

// creating promise
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log('Async task is complete!');
        resolve({username: "ayushmaan", email: "ayush@example.com"}) //connected with .then()
    }, 2000)
})

//comsuming promise
promise1.then((user)=>{ //connected with resolve
    console.log(user);
    console.log('Promise consumed!');
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: "ayushmaan", email: "ayush@example.com"})
        }
        else{
            reject('ERROR while fetching data')
        }
    }, 1000)
})

promise2
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('The promise is either resolved or rejected!');
})


//creating promise
const promise3 = new Promise((resolve, reject)=>{
        setTimeout(function(){
            let error = true;
            if(!error){
                resolve({username: "devAyush", password: "devAyush@123"})
            }
            else{
                reject('ERROR while fetching data')
            }
        }, 1000)
    })

//consuming promise using async await
async function consumePromise3(){
    try{
        const response = await promise3
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromise3()
