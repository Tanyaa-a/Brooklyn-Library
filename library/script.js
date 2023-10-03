const burgerItem = document.querySelector(".header__burger");
const closeMenuButton = document.querySelector(".header__close");
const menu = document.querySelector(".header__list");
const body = document.querySelector("body");
const registerIcon = document.querySelector(".header__icon");
const registerContainer = document.querySelector(".drop-menu__no-auth");
const logInButton = document.querySelector(".login-button__login");
const registerButton = document.querySelector(".login-button__register");
const registerForm = document.querySelector(".register-modal");
const loginForm = document.querySelector(".login-modal");
const closeButton = document.querySelectorAll(".close-button");
const signUpButtonFind = document.querySelector(".button-login__signup");
const loginButtonFind = document.querySelector(".button-login__login");
const logInButtonFind = document.querySelector(".button-login__login");
const overlay = document.querySelector(".overlay");
const bookButtons = document.querySelectorAll(".book__button");
const initialsContainer = document.querySelector(".initials");
const profileBlock = document.querySelector(".my-profile__modal");
const buyCardModal = document.querySelector(".buy-library-card__modal")
const profileDropMenu = document.querySelector(".drop-menu__with-auth");
const buttonMyProfile = document.querySelector(".login-button__profile");
const buttonLogOut = document.querySelector(".login-button__logout");
const profileDropMenuTitle = document.querySelector(".drop-menu__title_auth");
const beforeRegisterContainer = document.querySelector(".before-register");
const afterRegisterContainer = document.querySelector(".after-register");
const cardInfoName = document.querySelector(".card-info__name");
const cardInfoNumber = document.querySelector(".card-info__card");
const checkCardButton = document.querySelector(".button-card");
const checkCardProfileButton = document.querySelector(".button-login__profile")
//burger menu

  function closeMenu() {
    menu.classList.remove("open");
    body.style.overflow = "auto";
    profileDropMenu.style.display= "none"
    burgerItem.style.display = "block"
  }


  burgerItem.addEventListener("click", function() {
    const headerBurger = document.querySelector(".header__burger");  // Get the .header__burger element

    if (menu.classList.contains("open")) {
        closeMenu();
        headerBurger.classList.remove("open"); 
       
        
    } else {
        menu.classList.toggle("open");
        
        // Add the "open" class to .header__burger when the menu is open
        headerBurger.classList.toggle("open"); 

        body.style.overflow = "hidden";
        console.log("Menu is now open!");
    }
});


  // closeMenuButton.addEventListener("click", closeMenu);

  const headerItems = document.querySelectorAll(".header__item");
  headerItems.forEach((headerItem) => {
    headerItem.addEventListener("click", () => {
      console.log("Item clicked!");
      closeMenu();
    });
  });

  document.addEventListener("click", function(e) {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnBurger = burgerItem.contains(e.target);

    if (
      !isClickInsideMenu &&
      !isClickOnBurger &&
      menu.classList.contains("open")
    ) {


      // Close the menu
      menu.classList.remove("open");
      body.style.overflow = "auto";
      
    }
  });
// });

//Register user
registerIcon.addEventListener("click", function(e) {
  registerContainer.style.display = "block";
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";

});


// Keep the registerContainer open when clicking inside of it
registerContainer.addEventListener("click", function(e) {
  e.stopPropagation();
});

//register modal window open
registerButton.addEventListener("click", function(e) {
  if (registerContainer.style.display === "block") {
    registerContainer.style.display = "none";
    registerIcon.style.pointerEvents = "none";
    registerForm.style.display = "block";
    overlay.classList.remove("hidden");
    body.style.overflow = "hidden";
  }
});

//buttons in sectionDigital library cards
signUpButtonFind.addEventListener("click", function(e) {
  e.stopPropagation();
  registerForm.style.display = "block";
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
  console.log("click");
});

loginButtonFind.addEventListener("click", function() {
  loginForm.style.display = "block";
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
  console.log("click");
});

//login window open
logInButton.addEventListener("click", function(e) {
  e.stopPropagation();
  if (registerContainer.style.display === "block") {
    registerContainer.style.display = "none";
    registerIcon.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    loginForm.style.display = "block";
    overlay.classList.remove("hidden");
  }
});



loginForm.addEventListener("click", function(e) {
  e.stopPropagation();
});

registerForm.addEventListener("click", function(e) {
  e.stopPropagation();
});

//close button close modal
closeButton.forEach(function(button) {
  button.addEventListener("click", function(e) {
    e.stopPropagation();
    if (loginForm) {
      loginForm.style.display = "none";
      registerIcon.style.pointerEvents = "auto";
      overlay.style.zIndex = "";
    }
    if (registerForm) {
      registerForm.style.display = "none";
      registerIcon.style.pointerEvents = "auto";
    }
    if (registerContainer) {
      registerContainer.style.display = "none";
      registerIcon.style.pointerEvents = "auto";
    }
    if (profileBlock) {
      profileBlock.style.display = "none";
      registerIcon.style.pointerEvents = "auto";
    }
    if (buyCardModal) {
      buyCardModal.style.display = "none";

    }
    body.style.overflow = "auto";
    overlay.classList.add("hidden");
  });
});

//overlay close window on overlay click

overlay.addEventListener("click", function(e) {
  if (registerContainer && registerContainer.style.display === "block") {
    registerContainer.style.display = "none";
  }

  if (registerForm && registerForm.style.display === "block") {
    registerForm.style.display = "none";
  }

  if (loginForm && loginForm.style.display === "block") {
    loginForm.style.display = "none";
    overlay.style.zIndex = "";
  }
  if (buyCardModal && buyCardModal.style.display === "flex") {
    buyCardModal.style.display = "none";
    
  }

  if (profileBlock && window.getComputedStyle(profileBlock).display === "flex") {
    profileBlock.style.display = "none"
  }

  document.body.style.overflow = "auto";
  registerIcon.style.pointerEvents = "auto";
  overlay.classList.add("hidden");
  console.log(e.target);
});

//local storage

const firstName = document.getElementById("registerUsername").value;
const lastName = document.getElementById("registerLastUsername").value;
const email = document.getElementById("registerEmail").value;
const password = document.getElementById("loginPassword-register").value;
const submit = document.querySelector(".button-modal");

function saveToLocalStorage(email, user) {
  const firstName = document.getElementById("registerUsername").value;
  const lastName = document.getElementById("registerLastUsername").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("isRegistered", "true");
  localStorage.setItem("loggedIn", "true");
}


  submit.addEventListener("click", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("registerUsername").value;
    const lastName = document.getElementById("registerLastUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("loginPassword-register").value;

    // Create a user object
    if (firstName && lastName && email && password) {
      const user = {
        email,
        firstName,
        lastName,
        password,
        loggedIn: true,
      };

      //hide the form
      registerForm.style.display = "none";
      registerIcon.style.pointerEvents = "auto";
      body.style.overflow = "auto";
      overlay.classList.add("hidden");
      firstName.value = lastName.value = email.value = password.value = "";
      while (registerIcon.firstChild) {
        registerIcon.removeChild(registerIcon.firstChild);
      }

      // Add a new span containing first letters of first name and last name
      const initialText = firstName[0].toUpperCase() + lastName[0].toUpperCase();
      const initials = document.createElement("span");
      initials.textContent = initialText;
      console.log(initialText);
      registerIcon.style.pointerEvents = "auto";
      initials.title = `${firstName} ${lastName}`;
      initials.classList.add("initials");
      registerIcon.appendChild(initials);

      //add dropdown auth modal

      const generateCardNumber = () => {
        const max = 0xfffffffff; 
        const min = 0x100000000;
        const cardNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return cardNumber.toString(16).toUpperCase();
      };

      const cardNumber = generateCardNumber();
      console.log(cardNumber);

      initials.addEventListener("click", function(e) {
        console.log("click");
        e.stopPropagation();
       
        profileBlock.style.display = "none";
        profileDropMenu.style.display = "block";
        menu.classList.remove("open");
        body.style.overflow = "hidden";
        profileDropMenuTitle.textContent = `${cardNumber}`;
        profileDropMenuTitle.style.fontSize = "13px";
        profileDropMenuTitle.style.fontWeight = "bold";
        profileDropMenuTitle.style.paddingBottom = "5px";    
      });
        if (loggedIn = true) {
          beforeRegisterContainer.style.display = "none";
          afterRegisterContainer.style.display = "flex";
          cardInfoName.placeholder = `${firstName} ${lastName}`;
          cardInfoNumber.placeholder = `${cardNumber}`;
          checkCardButton.style.display = "none";    
        }
      
      //check card section portfolio button
      checkCardProfileButton.addEventListener('click', function () {
        profileBlock.style.display = "flex";
        body.style.overflow = "hidden";
        overlay.classList.remove("hidden");   
      })
    
      //logout user

      buttonLogOut.addEventListener("click", function(e) {
  
        if (initials) {
          initials.remove();
          profileDropMenu.style.display = "none";
          localStorage.setItem("loggedIn", "false");
          closeMenu();
        }
       
        // Add the icon back

        let existingIcon = registerIcon.querySelector("img");
        if (!existingIcon) {
          const iconElement = document.createElement("img");
          iconElement.src = "./assets/icon_profile.svg"; 
          iconElement.alt = "icon image";
          registerIcon.appendChild(iconElement);
          localStorage.setItem("loggedIn", "false");
        }
      });

    

      //open my profile modal
      const heroInitials = document.querySelector(".hero-photo");
      const profileFullName = document.querySelector(".hero-name");
      const profileCardNumber = document.getElementById("cardNumberDisplay");
      const copyButton = document.getElementById("copyButton");

      buttonMyProfile.addEventListener("click", function(e) {
        e.stopPropagation();
        profileBlock.style.display = "flex";
        profileDropMenu.style.display = "none";
        registerIcon.style.pointerEvents = "none";
        body.style.overflow = "hidden";
        overlay.classList.remove("hidden");
        
        heroInitials.textContent = initialText;
        profileFullName.textContent = `${firstName}  ${lastName}`;
        profileCardNumber.textContent = `${cardNumber}`;
      
      });
      

      copyButton.addEventListener("click", function () {
      console.log("click")
      navigator.clipboard.writeText(profileCardNumber.textContent).then(
        function() {
          alert("Copied successfully!");
        },
        function(err) {
          alert("Unable to copy!");
        }
      );
      });
      
const counterNumbers = document.querySelectorAll(".counter")
counterNumbers.forEach((counterElement) => {
  const randomNumber = Math.floor(Math.random() * 16);
  console.log(randomNumber);
  counterElement.textContent = randomNumber;
});
      //remove modal on overlay click

      overlay.addEventListener("click", function(e) {
        if (profileBlock && profileBlock.style.display === "flex") {
          profileBlock.style.display = "none";
        }
      });

      // Save to local storage
      saveToLocalStorage(email, user);
      console.log(user);

      bookButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
          if (user.loggedIn) {
            buyCardModal.style.display = "flex";
            initials.style.display = "flex"; 
            body.style.overflow = "hidden";
            overlay.style.zIndex = "900";
            overlay.classList.remove("hidden");
          

           
          } else {
            loginForm.style.display = "block";
            overlay.classList.remove("hidden");
            body.style.overflow = "hidden";
          }
        });
      });
      

    } else {
      // One or more fields are empty or not valid
      alert("Please fill all fields correctly.");
    }
  });
// });
