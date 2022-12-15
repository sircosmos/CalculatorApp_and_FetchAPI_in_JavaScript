const getPosts = () => {
    let fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
    let allPostTitle = '';

    fetchPosts.then((response) =>{
        response.json().then((jsonData)=>{
            for (let i=0; i<jsonData.length; i++){
                let post = jsonData[i];
                allPostTitle = allPostTitle + `<strong>Post title:</strong> ${post.title} <br> <strong>post body:</strong> ${post.body}<br> <hr>`;
            }
            document.querySelector("#allPosts").innerHTML = allPostTitle;
        });
    });
}