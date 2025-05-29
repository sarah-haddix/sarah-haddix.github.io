/*
const images = [
  "/assets/images/image1.jpg",
  "/assets/images/image6.jpg",
  "/assets/images/image2.jpg",
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
*/

window.addEventListener('load', () => {
  const img1 = document.getElementById('nagoya-pres');
  const img2 = document.getElementById('AWM');

  const h1 = img1.clientHeight;
  const h2 = img2.clientHeight;

  console.log(`Image 1 height: ${h1}px`);
  console.log(`Image 2 height: ${h2}px`);

  const avgHeight = (h1+h2)/2;

  img1.style.height = `${avgHeight}px`;
  img1.style.width = 'auto';

  img2.style.height = `${avgHeight}px`;
  img2.style.width = 'auto';
});
