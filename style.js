const text = "A Symphony of Multitude Perspectives";
const pTag = document.getElementById('typewriter');
let index = 0;
const speed = 100; 

function typeWriter() {
  if (index < text.length) {
    pTag.innerHTML += text.charAt(index); 
    index++;
    setTimeout(typeWriter, speed);
  }
  else{
    const cta=document.querySelector('.cta-btn');
    cta.style.opacity=1;
    cta.style.transform="translateY(0)";
  }
}
typeWriter();

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    navLinks.classList.toggle('active'); // Toggles display of nav links
    menuToggle.classList.toggle('active'); // Toggles the hamburger icon animation
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Navbar is now fixed to top: 0, so offsetTop will be relative to body.
            // We still need to account for its height.
            const navbarHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20; // 20px extra padding

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Smooth scroll effect
            });

            // Close mobile menu if open after clicking a link
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                toggleMenu(); // Use the existing toggle function to close
            }
        }
    });
});
 const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show"); // add show class when visible
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);