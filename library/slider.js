document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    let itemsPerPage = window.innerWidth <= 1430 ? 1 : 3;
    const slides = document.querySelectorAll(".card__photo");
    const bullets = document.querySelectorAll(".bullet");
    const cardBlock = document.querySelector(".card__block");
  
    window.addEventListener("resize", function () {
      itemsPerPage = window.innerWidth <= 1430 ? 1 : 3;
      updateCarousel();
    });
  
    document.querySelector(".carousel__arrow--right").addEventListener("click", function () {
      if (currentSlide < slides.length - itemsPerPage) {
        currentSlide++;
      }
      updateCarousel();
    });
  
    document.querySelector(".carousel__arrow--left").addEventListener("click", function () {
      if (currentSlide > 0) {
        currentSlide--;
      }
      updateCarousel();
    });
  
    bullets.forEach((bullet, index) => {
      bullet.addEventListener("click", function () {
        currentSlide = index;
        updateCarousel();
      });
    });
    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        const cardBlockWrapper = document.querySelector(".card__block-wrapper");
      
        // Start fading out
        cardBlockWrapper.style.opacity = 0;
      
        setTimeout(() => {
         
          cardBlock.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      
         
          bullets.forEach((bullet) => bullet.classList.remove("active"));
          bullets[currentSlide].classList.add("active");
      
          
          cardBlockWrapper.style.opacity = 1;
        }, 500);
      }
      
    updateCarousel();
  });
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    let isAnimating = false;
    const radioButtons = document.querySelectorAll('input[name="season"]');;
    const bookLists = document.querySelectorAll(".bookList");
  
    function fadeEffect(element, addFadeIn = true) {
      element.classList.remove("fade-in", "fade-out");
      element.offsetWidth; // Trigger reflow
      element.classList.add(addFadeIn ? "fade-in" : "fade-out");
    }
  
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (isAnimating) return;
        isAnimating = true;
  
        const selectedSeason = e.target.value;
        const currentBookList = document.querySelector(".bookList.fade-in") || document.querySelector(".bookList");
  
    
        fadeEffect(currentBookList, false);
  
        setTimeout(() => {
          currentBookList.style.display = "none";
          const newBookList = document.querySelector(`#${selectedSeason}Books`);
          newBookList.style.display = "flex";
          fadeEffect(newBookList, true);
  
         
          isAnimating = false;
        }, 500);
      });
    });
  
    // Show the initial book list
    const initialBookList = document.querySelector("#winterBooks");
    initialBookList.style.display = "flex";
    initialBookList.classList.add("fade-in");
  });
  