const galleryData = [
  { src: "image1.jpg", title: "❤️" },
  { src: "image2.jpg", title: "❤️" },
  { src: "image3.jpg", title: "❤️" },
  { src: "image4.jpg", title: "❤️" },
  { src: "image5.jpg", title: "❤️" },
  { src: "image6.jpg", title: "❤️" },
  { src: "image7.jpg", title: "❤️" },
  { src: "image8.jpg", title: "❤️" },
  { src: "image9.jpg", title: "❤️" },
  { src: "image10.jpg", title: "❤️" },
  { src: "image11.jpg", title: "❤️" },
  { src: "image12.jpg", title: "❤️" },
  // Add more art pieces as needed
];

function loadGallery() {
  const gallery = document.getElementById("gallery");
  galleryData.forEach((art) => {
    const artPiece = document.createElement("div");
    artPiece.className = "art-piece";
    artPiece.innerHTML = `
            <img src="${art.src}" alt="${art.title}">
            <h2>${art.title}</h2>
        `;
    gallery.appendChild(artPiece);
  });
}

window.onload = loadGallery;
