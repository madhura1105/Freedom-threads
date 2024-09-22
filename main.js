// JavaScript for handling basic interactivity

// Handle search click functionality
document.querySelector('.home-page-search1').addEventListener('click', function() {
    alert("Search functionality will be added soon!");
});

// Handle navigation clicks for Men, Women, Orders
document.querySelector('.home-page-text104').addEventListener('click', function() {
    alert("Navigating to Men's collection");
});

document.querySelector('.home-page-text106').addEventListener('click', function() {
    alert("Navigating to Women's collection");
});

document.querySelector('.home-page-text108').addEventListener('click', function() {
    alert("Navigating to Orders page");
});

// Handle 'Shop Now' button click in hero section
document.querySelector('.home-page-text112').addEventListener('click', function() {
    alert("Redirecting to the Shop Now page");
});

// Add event listeners for the product cards
const productCards = document.querySelectorAll('.home-page-body10, .home-page-body11, .home-page-body12');
productCards.forEach(card => {
    card.addEventListener('click', function() {
        alert("Exploring product category");
    });
});

// Handle community signup
document.querySelector('.home-page-button').addEventListener('click', function() {
    const emailInput = prompt("Please enter your email:");
    if (emailInput) {
        alert(`Thank you for signing up! Your email: ${emailInput}`);
    } else {
        alert("Please enter a valid email!");
    }
});
