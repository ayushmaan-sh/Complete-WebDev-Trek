function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data Fetched!")
        }, 3000);
    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Comment Data Fetched!")
        }, 4000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data");
        // const postData = await fetchPostData()
        // const commentData = await fetchCommentData()
        // we can write it in better way
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])

        console.log(postData);
        console.log(commentData);
        
        console.log("Fetched successfully!");
        
    } catch (error) {
        console.log("Error fetching blog data", error);
    }
}

getBlogData()