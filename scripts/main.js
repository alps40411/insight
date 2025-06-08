// Main JavaScript functionality for i-genomics website

class iGenomicsApp {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startSlideshow();
        this.setupIntersectionObserver();
        this.setupSmoothScrolling();
    }
    
    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuClose = document.querySelector('.mobile-menu-close');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
        
        if (mobileMenuClose && mobileMenu) {
            mobileMenuClose.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Close mobile menu when clicking outside
        if (mobileMenu) {
            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
        
        // Hero slider controls
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousSlide());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Slider indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Partners slider
        this.setupPartnersSlider();
        
        // Language switcher
        const langBtns = document.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                langBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
        
        // Dropdown menus for touch devices
        this.setupTouchDropdowns();
        
        // Form submissions
        this.setupFormHandlers();
        
        // Keyboard navigation
        this.setupKeyboardNavigation();
    }
    
    setupTouchDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        const userMenu = document.querySelector('.user-menu');
        
        // Handle dropdown clicks on touch devices
        dropdowns.forEach(dropdown => {
            const btn = dropdown.querySelector('.dropdown-btn');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (btn && menu) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.querySelector('.dropdown-menu').style.opacity = '0';
                            other.querySelector('.dropdown-menu').style.visibility = 'hidden';
                        }
                    });
                    
                    // Toggle current dropdown
                    const isVisible = menu.style.opacity === '1';
                    menu.style.opacity = isVisible ? '0' : '1';
                    menu.style.visibility = isVisible ? 'hidden' : 'visible';
                });
            }
        });
        
        // Handle user menu clicks
        if (userMenu) {
            const userBtn = userMenu.querySelector('.user-btn');
            const userDropdown = userMenu.querySelector('.user-dropdown');
            
            if (userBtn && userDropdown) {
                userBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isVisible = userDropdown.style.opacity === '1';
                    userDropdown.style.opacity = isVisible ? '0' : '1';
                    userDropdown.style.visibility = isVisible ? 'hidden' : 'visible';
                });
            }
        }
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                }
            });
            
            if (userMenu) {
                const userDropdown = userMenu.querySelector('.user-dropdown');
                if (userDropdown) {
                    userDropdown.style.opacity = '0';
                    userDropdown.style.visibility = 'hidden';
                }
            }
        });
    }
    
    startSlideshow() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopSlideshow() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
    
    goToSlide(index) {
        this.stopSlideshow();
        
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Set new current slide
        this.currentSlide = index;
        
        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        this.startSlideshow();
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    previousSlide() {
        const prevIndex = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
        this.goToSlide(prevIndex);
    }
    
    setupPartnersSlider() {
        const partnersGrid = document.querySelector('.partners-grid');
        const prevBtn = document.querySelector('.partners-slider .prev');
        const nextBtn = document.querySelector('.partners-slider .next');
        
        if (!partnersGrid || !prevBtn || !nextBtn) return;
        
        let currentPosition = 0;
        const slideWidth = 200; // Approximate width of each partner logo
        
        prevBtn.addEventListener('click', () => {
            currentPosition = Math.min(currentPosition + slideWidth, 0);
            partnersGrid.style.transform = `translateX(${currentPosition}px)`;
        });
        
        nextBtn.addEventListener('click', () => {
            const maxPosition = -(partnersGrid.scrollWidth - partnersGrid.parentElement.clientWidth);
            currentPosition = Math.max(currentPosition - slideWidth, maxPosition);
            partnersGrid.style.transform = `translateX(${currentPosition}px)`;
        });
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        const animatedElements = document.querySelectorAll(
            '.advantage-card, .product-card, .testimonial-card, .timeline-card, .step'
        );
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    setupSmoothScrolling() {
        // Smooth scroll for anchor links
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
    }
    
    setupFormHandlers() {
        // Handle form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        });
    }
    
    handleFormSubmission(form) {
        // Add loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                this.showNotification('Form submitted successfully!', 'success');
            }, 2000);
        }
    }
    
    setupKeyboardNavigation() {
        // Keyboard navigation for slider
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            } else if (e.key === 'Escape') {
                // Close mobile menu
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 24px',
            borderRadius: '6px',
            color: 'white',
            fontWeight: '500',
            zIndex: '1000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        // Set background color based on type
        const colors = {
            success: '#16a34a',
            error: '#dc2626',
            warning: '#f59e0b',
            info: '#2563eb'
        };
        notification.style.backgroundColor = colors[type] || colors.info;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.iGenomicsApp = new iGenomicsApp();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause animations/timers
        const app = window.iGenomicsApp;
        if (app) {
            app.stopSlideshow();
        }
    } else {
        // Page is visible, resume animations/timers
        const app = window.iGenomicsApp;
        if (app) {
            app.startSlideshow();
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate layouts if needed
    const partnersGrid = document.querySelector('.partners-grid');
    if (partnersGrid) {
        partnersGrid.style.transform = 'translateX(0)';
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for global access
window.iGenomicsApp = iGenomicsApp;