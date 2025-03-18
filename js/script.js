document.addEventListener('DOMContentLoaded', function() {
    // Force cache refreshing
    // Add a random query parameter to force reload of resources
    if (window.location.pathname.includes('resources')) {
        const links = document.querySelectorAll('a[href^="resources/"]');
        links.forEach(link => {
            // Make sure we're not already on the full domain URL
            if (link.href.indexOf('fathertrucker.ca') !== -1) {
                // Extract the path portion from the full URL
                const urlParts = link.href.split('fathertrucker.ca/');
                if (urlParts.length > 1) {
                    link.href = urlParts[1]; // Use just the relative path
                }
            }
            // Now add the timestamp
            const timestamp = new Date().getTime();
            link.href = link.href + (link.href.includes('?') ? '&' : '?') + '_t=' + timestamp;
        });
    }

    // Check all links for absolute URLs to fathertrucker.ca and convert to relative
    document.querySelectorAll('a').forEach(link => {
        if (link.href.indexOf('fathertrucker.ca') !== -1) {
            // Extract the path portion from the full URL
            const urlParts = link.href.split('fathertrucker.ca/');
            if (urlParts.length > 1) {
                link.href = urlParts[1]; // Use just the relative path
            }
        }
    });

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
