// ==================== Contact Button Functionality ====================
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.hero-section .btn');

    if (contactButton) {
        contactButton.addEventListener('click', function() {
            handleContactClick();
        });
    }

    // Add scroll animation for cards
    observeElements();

    // Toggle project description functionality
    setupToggleDescriptions();
});

// ==================== Toggle Project Description ====================
function setupToggleDescriptions() {
    const toggleButtons = document.querySelectorAll('.toggle-description');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectCard = this.closest('.project-card');
            const description = projectCard.querySelector('.project-description');

            // Close all other project descriptions
            document.querySelectorAll('.project-description.expanded').forEach(desc => {
                if (desc !== description) {
                    desc.classList.remove('expanded');
                    const otherCard = desc.closest('.project-card');
                    if (otherCard) {
                        otherCard.classList.remove('expanded');
                    }
                    // Find the button for this description and update text
                    const otherButton = desc.closest('.project-card').querySelector('.toggle-description');
                    if (otherButton) {
                        otherButton.textContent = 'Meer Info';
                    }
                }
            });

            // Toggle current project description
            if (description) {
                description.classList.toggle('expanded');
                projectCard.classList.toggle('expanded');

                // Change button text
                if (description.classList.contains('expanded')) {
                }
            }
        });
    });

    // Close expanded projects when scrolling away from projects section
    window.addEventListener('scroll', function() {
        const projectsSection = document.querySelector('#projects');
        const projectsRect = projectsSection.getBoundingClientRect();

        // If scrolled away from projects section, close all expanded descriptions
        if (projectsRect.bottom < 0 || projectsRect.top > window.innerHeight) {
            document.querySelectorAll('.project-description.expanded').forEach(desc => {
                desc.classList.remove('expanded');
                const card = desc.closest('.project-card');
                if (card) {
                    card.classList.remove('expanded');
                }
                const button = desc.closest('.project-card').querySelector('.toggle-description');
                if (button) {
                    button.textContent = 'Meer Info';
                }
            });
        }
    });
}

// ==================== Contact Button Handler ====================
function handleContactClick() {
    const email = 'kasjah06@gmail.com'; // Verander dit naar je eigen email
    const subject = 'Interesse in samenwerking';
    const body = 'Hallo Kasjah,%0D%0A%0D%0AIk ben geïnteresseerd in jouw werk en zou graag met je willen praten.';

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    console.log('Contact button clicked - email compose opened');
}

// ==================== Intersection Observer for Animations ====================
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-in-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards and fact cards
    document.querySelectorAll('.project-card, .fact-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

// ==================== Add CSS Animation ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==================== Active Navigation Link ====================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// ==================== Form Validation for Project URLs ====================
// ==================== Console Welcome Message ====================
console.log('%c👋 Welkom op mijn Portfolio!', 'font-size: 20px; font-weight: bold; color: #AA740B;');
console.log('%cGemaakt door Kasjah Houben', 'font-size: 14px; color: #666;');
console.log('%cJavaScript is geladen en klaar!', 'font-size: 12px; color: #999;');

