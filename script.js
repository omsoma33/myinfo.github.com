// ========================================
// PORTFOLIO - COMPLETE JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // 🔥 SMOOTH SCROLLING
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

    // 🔥 NAVBAR SCROLL EFFECTS
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        // Navbar background
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Navbar shrink on scroll
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.padding = '1rem 0';
        }

        lastScrollY = window.scrollY;
    });

    // 🔥 ACTIVE NAV LINK
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 🔥 SCROLL ANIMATIONS (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all animate elements
    document.querySelectorAll('.animate-on-scroll, .project-card, .skill-tag').forEach(el => {
        observer.observe(el);
    });

    // 🔥 COUNTER ANIMATION
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerText);
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateCounters(), 10);
            } else {
                counter.innerText = target + '+';
            }
        });
    }

    // 🔥 PARALLAX EFFECT
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // 🔥 TYPEWRITER EFFECT
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

    // Initialize typewriter on hero subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const texts = [
            'Frontend Developer',
            'UI/UX Designer', 
            'Full-Stack Engineer'
        ];
        let textIndex = 0;

        function cycleText() {
            typeWriter(subtitle, texts[textIndex], 100);
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(cycleText, 4000);
        }
        cycleText();
    }

    // 🔥 PROJECT FILTER (if you add categories)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projects.forEach(project => {
                if (filter === 'all' || project.dataset.category === filter) {
                    project.style.display = 'block';
                    project.classList.add('fade-in-up');
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // 🔥 EMAIL COPY TO CLIPBOARD
    const emailBtn = document.querySelector('.copy-email');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('your.email@example.com');
            emailBtn.innerHTML = 'Copied! ✅';
            emailBtn.style.background = '#48bb78';
            setTimeout(() => {
                emailBtn.innerHTML = 'your.email@example.com';
                emailBtn.style.background = '';
            }, 2000);
        });
    }

    // 🔥 LAZY LOADING IMAGES
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
           
