const images = [
  "/assets/images/image1.jpg",
  "/assets/images/image2.jpg",
  "/assets/images/image3.jpg",
  "/assets/images/image4.jpg",
  "/assets/images/image5.jpg"
];

// Get the image element
const rotatingImage = document.getElementById("rotating-image");

// Add click event listener
rotatingImage.addEventListener("click", () => {
    console.log("Image clicked");
    // Get the current index from the data-index attribute
    let currentIndex = parseInt(rotatingImage.getAttribute("data-index"), 10);

    // Increment the index, cycling back to 0 if necessary
    currentIndex = (currentIndex + 1) % images.length;

    // Update the image source and data-index attribute
    rotatingImage.src = images[currentIndex];
    rotatingImage.setAttribute("data-index", currentIndex);
});
