// Smooth Scrolling Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Console Hacker Animation
console.log("%cHACKED BY YOUR DEVSECOPS EXPERT", "color: red; font-size: 20px; font-weight: bold;");
console.log("%cSecurity is not a product, it's a process.", "color: green; font-size: 16px;");
