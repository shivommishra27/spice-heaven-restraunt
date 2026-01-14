// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Order button click (alert example)
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function(){
        alert("Thank you for choosing Spice Heaven! Your order will be ready soon.");
    });
});
