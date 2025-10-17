const image = document.getElementById("image");
const imageContent = document.getElementById("imageContent");
const images = document.querySelectorAll("#photoAlbum img");

// Function to update image display
function updateImage(imageurl, content, color) {
    image.style.background = `url(${imageurl}) center/cover no-repeat`;
    imageContent.textContent = content;
    image.style.color = color;
    console.log("updateImage triggered for", imageurl);
}

// Reset display
function unDo() {
    image.style.background = "linear-gradient(to right, aquamarine, aqua)";
    imageContent.textContent = "Hover or focus on a photo to display it";
    image.style.color = "white";
    console.log("unDo triggered");
}

// Add tabindex and focus/blur listeners
function addTabFocus() {
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);

        images[i].addEventListener("focus", function () {
            updateImage(images[i].src, images[i].alt, "white");
            console.log("onfocus triggered for", images[i].alt);
        });

        images[i].addEventListener("blur", function () {
            unDo();
            console.log("onblur triggered for", images[i].alt);
        });

        // Keep existing mouse events
        images[i].addEventListener("mouseenter", function () {
            updateImage(images[i].src, images[i].alt, "white");
            console.log("onmouseenter triggered for", images[i].alt);
        });

        images[i].addEventListener("mouseleave", function () {
            unDo();
            console.log("onmouseleave triggered for", images[i].alt);
        });
    }
}

// onload initializer
function initPage() {
    console.log("Page loaded successfully!");
    addTabFocus();
}
