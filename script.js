let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let s of slides) {
    s.style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 9000);
}

function changeSlide(n) {
  slideIndex += n - 1;
  showSlides();
}

// Floating "I LOVE YOU"
function createFloatingText() {
  const text = document.createElement("div");
  text.className = "floating-text";
  text.textContent = "I LOVE YOU";
  text.style.top = Math.random() * window.innerHeight + "px";
  text.style.left = Math.random() * window.innerWidth + "px";
  document.getElementById("floating-container").appendChild(text);
  setTimeout(() => text.remove(), 5000);
}

setInterval(createFloatingText, 4000);
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 500);
// Hiệu ứng nghiêng theo chuột cho phần thư
const letter = document.querySelector('.letter');
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;
  letter.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const visibleCount = 3;

  // Ẩn tất cả
  for (let s of slides) {
    s.style.display = "none";
  }

  // Hiện 3 ảnh tiếp theo
  for (let i = 0; i < visibleCount; i++) {
    const idx = (slideIndex + i) % slides.length;
    slides[idx].style.display = "block";
  }

  slideIndex = (slideIndex + visibleCount) % slides.length;
  setTimeout(showSlides, 9000);
}