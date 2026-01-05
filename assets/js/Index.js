// Search Functionality
const toggleBtn = document.getElementById('search-toggle');
const searchBox = document.getElementById('search-box');
const closeBtn = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');

// Open search modal
toggleBtn.addEventListener('click', () => {
    searchBox.style.display = 'flex';
    searchInput.focus();
});

// Close search modal
closeBtn.addEventListener('click', () => {
    searchBox.style.display = 'none';
    searchInput.value = '';
});

// Search functionality on Enter key
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const keyword = searchInput.value.toLowerCase();
        const content = document.body.innerText.toLowerCase();
        if (content.includes(keyword)) {
            alert(`Keyword "${keyword}" found on the page.`);
        } else {
            alert(`Sorry, "${keyword}" not found.`);
        }
    }
});

// Close search on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        searchBox.style.display = 'none';
        searchInput.value = '';
    }
});

// Close search when clicking outside the search box
searchBox.addEventListener('click', function(e) {
    if (e.target === searchBox) {
        searchBox.style.display = 'none';
        searchInput.value = '';
    }
});

// Smooth scrolling for navigation (if needed for single page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
});

// Animation for key points when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe key point items for animation
document.addEventListener('DOMContentLoaded', function() {
    const keyPointItems = document.querySelectorAll('.key-point-item');
    keyPointItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add typing effect to hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const originalText = heroSubtitle.textContent;
    
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText, 80);
    }, 1000);
});