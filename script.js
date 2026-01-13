const images = [
    "./Assets/1.png",
    "./Assets/2.png",
    "./Assets/3.png",
    "./Assets/4.png",
    "./Assets/5.png",
    "./Assets/6.png"
]

let currentIndex = 0

const mainImage = document.getElementById("mainImage")
const thumbnails = document.querySelectorAll(".thumb")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")

const popup = document.getElementById("popup")
const popupNext = document.getElementById("popupNext")
const popupPrev = document.getElementById("popupPrev")
const popupClose = document.getElementById("popupClose")

function updateActiveThumbnail() {
    for (let i = 0; i < thumbnails.length; i++) {
        if (i === currentIndex) {
            thumbnails[i].classList.add("active")
        } else {
            thumbnails[i].classList.remove("active")
        }
    }
}

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
        currentIndex = i
        mainImage.src = images[currentIndex]
        updateActiveThumbnail()
    })
}

nextBtn.addEventListener("click", function() {
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    mainImage.src = images[currentIndex]
    updateActiveThumbnail()
})
prevBtn.addEventListener("click", function() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    mainImage.src = images[currentIndex]
    updateActiveThumbnail()
})

mainImage.addEventListener("click", ()=>{
    popup.style.display="flex"
    const popupImage = document.getElementById("popupImage")
    popupImage.src = mainImage.src
})


    popupNext.addEventListener("click", ()=>{
        currentIndex++
        if(currentIndex >= images.length){
            currentIndex = 0
        }
        popupImage.src = images[currentIndex]
    })
    popupPrev.addEventListener("click", ()=>{
        currentIndex--
        if(currentIndex < 0){
            currentIndex = images.length - 1
        }
        popupImage.src = images[currentIndex]
    })

    popupClose.addEventListener("click", ()=>{
        popup.style.display="none"
    })
updateActiveThumbnail()