htmlLocation = document.querySelector("#image")

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(images => images.json())
    .then((parsedImages) => {
        parsedImages.forEach((currentImage, index) => {
            if (index < 50) { 
                const htmlRep = imagesHtml(currentImage)
                printToDom(htmlRep)
            }
        });

    })

const printToDom = (bob) => {
    htmlLocation.innerHTML += bob
}

// create html representation
const imagesHtml = (image) => {
    return `
    <div class= "imgStyle">
<a target="_blank" href="${image.url}">
  <img src="${image.thumbnailUrl}" alt="image # ${image.id}">
</a>
<p>${image.title}</p>
</div>
` 
} 