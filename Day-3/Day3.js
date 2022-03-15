const apiponit = "https://jsonplaceholder.typicode.com/posts";
const getbtn = document.querySelector("#getPost");
const createbtn = document.querySelector("#createPost");
const deletebtn = document.querySelector("#deletePost");

//function getPosts() {
//    fetch(apiponit).then((response) => { //promises
//        response.json().then((posts) => {
//            console.log(posts);
//        })
//    });
//}
// promise return async await fun
const getPosts = async() => {
    try {
        const response = await fetch(apiponit);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log(error);
    }
};


getbtn.addEventListener("click", async() => {
            const posts = await getPosts();
            const table = `<table class="table">
    <thead><tr>
       <th>#</th>
       <th>Title</th>
    </tr>
    </thead>
    <tbody>
    ${posts.map(
        (post)=>`<tr>
        <th>${post.id}</th>
        <td>${post.title}</td>
        </tr>`
    ).join("\n")}
    </tbody>
    </table>`;
    document.querySelector('#table').innerHTML=table;
})


const createPosts= async(newpost)=>{
 try {
    const response=await fetch(apiponit,{
        method:"POST",//
        body:JSON.stringify(newpost),//
        headers:{"Content-type":"application/json; charset=UTF-8"},
        });
        if(response.status!=201){ //ok //200 201 creatw
            throw new Error(`Something went wrong`);
        }
        const post= await response.json();
        return post;

 } catch (error) {
     console.log(error);

 }
}
createbtn.addEventListener("click",async ()=>{
const newpost ={
    title:"abc",
    body:"xyz",
    userId: 1,

};
const createdPost=await createPosts(newpost);
console.log(createdPost);
});

const deletePost= async(id)=>{
    try{
        const response= await fetch(`${apiponit}/${id}`,{
            method:"DELETE",
        });
        if(response.status!=200){
            throw new Error(`Something went wrong`);
        }
        const post= await response.json();
        return post;

    } catch(error){
        console.log(error)
    }
}
deletebtn.addEventListener("click", async()=>{
    const deletedPost =await deletePost(1);
    console.log(deletedPost);
})