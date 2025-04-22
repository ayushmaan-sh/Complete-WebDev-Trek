function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({name: "Ayushmaan", url: "https://github.com/users/ayushmaan-sh"})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user data...");
        const data = await fetchUserData()
        console.log("User data: ", data);
    } catch (error) {
        console.log("Error fetching data!");
    }
}

getUserData()