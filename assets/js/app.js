// AOS ANIMATION INITIALIZATION
  AOS.init({
    once: true,
    ease: "linear",
    duration: 1000 
  });


  // MOBILE NAV TOGGLE

  let NavOpenBtn = document.getElementById("toggle-nav");
  let mobileNav = document.getElementById("mobileNav");
  let mCloseBtn = document.getElementById("m-close-btn");

  NavOpenBtn.addEventListener("click", ()=>{
    mobileNav.classList.toggle("active")
  })
  
  mCloseBtn.addEventListener("click", ()=>{
    mobileNav.classList.remove("active")
  })

