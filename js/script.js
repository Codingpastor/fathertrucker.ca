// Add cache busting for resource URLs
document.addEventListener('DOMContentLoaded', function() {
    // Only run this in development or when cache issues are present
    const shouldBustCache = true;
    
    if (shouldBustCache) {
        const timestamp = new Date().getTime();
        const resourceLinks = document.querySelectorAll('link[rel="stylesheet"], script[src]');
        
        resourceLinks.forEach(link => {
            // Skip external resources
            if (link.href && link.href.includes('http') && !link.href.includes(window.location.hostname) ||
                link.src && link.src.includes('http') && !link.src.includes(window.location.hostname)) {
                return;
            }
            
            // Get the current href/src
            const urlAttr = link.href ? 'href' : 'src';
            const currentUrl = link[urlAttr];
            
            // Add or update cache-busting parameter
            if (currentUrl) {
                const separator = currentUrl.includes('?') ? '&' : '?';
                link[urlAttr] = `${currentUrl}${separator}_t=${timestamp}`;
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Version check for cache-busting
    const scriptVersion = '20250318';
    const storedVersion = localStorage.getItem('siteVersion');
    
    // If the version is different or not set, we may need to clear cache
    if (!storedVersion || storedVersion !== scriptVersion) {
        console.log('New version detected - updating localStorage version');
        localStorage.setItem('siteVersion', scriptVersion);
        
        // If this isn't the clear-cache page, show a cache notice
        if (!window.location.href.includes('clear-cache.html')) {
            // Check if we've shown the notice in this session
            const hasShownNotice = sessionStorage.getItem('cacheNoticeShown');
            if (!hasShownNotice && Math.random() < 0.1) { // Show 30% of the time to avoid annoying users
                sessionStorage.setItem('cacheNoticeShown', 'true');
                setTimeout(function() {
                    if (confirm('We recently updated our site. If you\'re experiencing issues, you may need to clear your browser cache. Go to the cache clearing page?')) {
                        window.location.href = 'clear-cache.html';
                    }
                }, 2000);
            }
        }
    }
    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (navMenu.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation for signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            
            // Simple validation
            if (nameInput && nameInput.value.trim() === '') {
                isValid = false;
                showError(nameInput, 'Name is required');
            } else if (nameInput) {
                removeError(nameInput);
            }
            
            if (emailInput && emailInput.value.trim() === '') {
                isValid = false;
                showError(emailInput, 'Email is required');
            } else if (emailInput && !isValidEmail(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Please enter a valid email');
            } else if (emailInput) {
                removeError(emailInput);
            }
            
            if (isValid) {
                // Here you would normally submit the form or use fetch for API
                alert('Form submitted successfully!');
                signupForm.reset();
                
                // Redirect or show success message
                document.getElementById('form-success').style.display = 'block';
            }
        });
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
        
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorElement);
        }
        
        input.classList.add('error-input');
    }

    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.classList.remove('error-input');
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
