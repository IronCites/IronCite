// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Reset error states
            [name, email, message].forEach(field => {
                field.style.borderColor = '';
            });
            
            // Validate name
            if (!name.value.trim()) {
                name.style.borderColor = 'red';
                valid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                email.style.borderColor = 'red';
                valid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                message.style.borderColor = 'red';
                valid = false;
            }
            
            if (valid) {
                // Get the project type value
                const projectType = document.getElementById('projectType');
                
                // Prepare the email parameters
                const templateParams = {
                    from_name: name.value,
                    from_email: email.value,
                    project_type: projectType ? projectType.value : 'Not specified',
                    message: message.value,
                    to_email: 'ironcites.official@gmail.com'
                };
                
                // Show sending status
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Send the email using EmailJS
                emailjs.send('service_jdb364i', 'template_2rifqfl', templateParams)
                    .then(function() {
                        alert('Your message has been sent successfully!');
                        contactForm.reset();
                        submitBtn.textContent = originalBtnText;
                        submitBtn.disabled = false;
                    }, function(error) {
                        console.error('Email sending failed:', error);
                        alert('Failed to send the message. Please try again later or contact us directly at ironcites.official@gmail.com');
                        submitBtn.textContent = originalBtnText;
                        submitBtn.disabled = false;
                    });
            } else {
                alert('Please fill out all required fields correctly.');
            }
        });
    }
    
    // Animate skill bars when they come into view
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to animate skill bars
    function animateSkillBars() {
        skillLevels.forEach(skill => {
            if (isInViewport(skill)) {
                skill.style.width = skill.style.width || '0%';
            }
        });
    }
    
    // Initial check and add scroll event listener
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
});