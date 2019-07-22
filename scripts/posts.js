htmlLocation = document.getElementById("content")

fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
    .then(posts => posts.json())
    .then(parsedPosts => {
        parsedPosts.forEach(currentPosts => {
            const htmlRep = createPostsComponent(currentPosts)
            printToDOM(htmlRep)
        });
    })

const printToDOM = (anHtmlRep) => {
    htmlLocation.innerHTML += anHtmlRep

}
const createPostsComponent = (postObject) => {
    return `
       <div class = "style">
            <h1>${postObject.title}</h1>
            <p>${postObject.body}</p>
       </div>          
      `
}