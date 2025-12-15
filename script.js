// Mobile Navigation Toggle (removed - no navigation bar)
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('.nav-menu');

// navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
//     navToggle.classList.toggle('active');
// });

// Close mobile menu when clicking on a link
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         navMenu.classList.remove('active');
//         navToggle.classList.remove('active');
//     });
// });

// Contact Form Handling
// Contact Form Handling - Managed by Netlify Forms
// const contactForm = document.getElementById('contactForm');


// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    let backgroundColor, borderColor;
    if (type === 'error') {
        backgroundColor = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
        borderColor = 'rgba(220, 38, 38, 0.3)';
    } else {
        backgroundColor = 'linear-gradient(135deg, #0a0e27 0%, #1a1d3a 100%)';
        borderColor = 'rgba(0, 191, 255, 0.3)';
    }
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${backgroundColor};
        color: #ffffff;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 191, 255, 0.3);
        z-index: 2000;
        border: 1px solid ${borderColor};
        animation: slideDown 0.3s ease;
        backdrop-filter: blur(10px);
        max-width: 400px;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.offsetTop - 20; // Small offset for better visibility
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Modal functionality removido: se mantiene referencia por si se añade nuevamente

// Header background change on scroll (removed - no header)
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('.header');
//     if (window.scrollY > 100) {
//         header.style.background = 'rgba(255, 255, 255, 0.95)';
//         header.style.backdropFilter = 'blur(10px)';
//     } else {
//         header.style.background = '#fff';
//         header.style.backdropFilter = 'none';
//     }
// });

// Advanced Scroll Animations with Reversible Effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const element = entry.target;
        
        if (entry.isIntersecting) {
            // Element is entering viewport - animate in
            element.classList.remove('animate-out');
            element.classList.add('animate-in');
            
            // Add specific animation based on element type
            if (element.classList.contains('skill-category')) {
                element.classList.add('fade-in-scale');
            } else if (element.classList.contains('timeline-item')) {
                element.classList.add('fade-in-left');
            } else if (element.classList.contains('project-card')) {
                element.classList.add('fade-in-scale');
            } else if (element.classList.contains('contact-method')) {
                element.classList.add('fade-in-right');
            } else if (element.classList.contains('social-link')) {
                element.classList.add('bounce-in');
            } else if (element.classList.contains('section-title')) {
                element.classList.add('fade-in-up');
            } else {
                element.classList.add('fade-in-up');
            }
            
            // Add stagger animation to skill items
            if (element.classList.contains('skill-category')) {
                const skillItems = element.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.remove('animate-out');
                        item.classList.add('bounce-in');
                    }, index * 100);
                });
            }
            
            // Add stagger animation to project cards
            if (element.classList.contains('projects-grid')) {
                const projectCards = element.querySelectorAll('.project-card');
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.remove('animate-out');
                        card.classList.add('fade-in-scale');
                    }, index * 200);
                });
            }
            
            // Add stagger animation to timeline items
            if (element.classList.contains('experience-timeline')) {
                const timelineItems = element.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.remove('animate-out');
                        item.classList.add('fade-in-left');
                    }, index * 300);
                });
            }
            
            // Add stagger animation to contact methods
            if (element.classList.contains('contact-methods')) {
                const contactMethods = element.querySelectorAll('.contact-method');
                contactMethods.forEach((method, index) => {
                    setTimeout(() => {
                        method.classList.remove('animate-out');
                        method.classList.add('fade-in-right');
                    }, index * 150);
                });
            }
            
            // Add stagger animation to social links
            if (element.classList.contains('social-links')) {
                const socialLinks = element.querySelectorAll('.social-link');
                socialLinks.forEach((link, index) => {
                    setTimeout(() => {
                        link.classList.remove('animate-out');
                        link.classList.add('bounce-in');
                    }, index * 100);
                });
            }
            
        } else {
            // Element is leaving viewport - animate out
            element.classList.remove('animate-in');
            element.classList.add('animate-out');
            
            // Remove specific animations
            element.classList.remove('fade-in-scale', 'fade-in-left', 'fade-in-right', 'bounce-in', 'fade-in-up');
            
            // Remove stagger animations from child elements
            if (element.classList.contains('skill-category')) {
                const skillItems = element.querySelectorAll('.skill-item');
                skillItems.forEach(item => {
                    item.classList.remove('bounce-in');
                    item.classList.add('animate-out');
                });
            }
            
            if (element.classList.contains('projects-grid')) {
                const projectCards = element.querySelectorAll('.project-card');
                projectCards.forEach(card => {
                    card.classList.remove('fade-in-scale');
                    card.classList.add('animate-out');
                });
            }
            
            if (element.classList.contains('experience-timeline')) {
                const timelineItems = element.querySelectorAll('.timeline-item');
                timelineItems.forEach(item => {
                    item.classList.remove('fade-in-left');
                    item.classList.add('animate-out');
                });
            }
            
            if (element.classList.contains('contact-methods')) {
                const contactMethods = element.querySelectorAll('.contact-method');
                contactMethods.forEach(method => {
                    method.classList.remove('fade-in-right');
                    method.classList.add('animate-out');
                });
            }
            
            if (element.classList.contains('social-links')) {
                const socialLinks = element.querySelectorAll('.social-link');
                socialLinks.forEach(link => {
                    link.classList.remove('bounce-in');
                    link.classList.add('animate-out');
                });
            }
        }
    });
}, observerOptions);

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(`
        .section-title,
        .skill-category,
        .timeline-item,
        .project-card,
        .contact-method,
        .social-link,
        .projects-grid,
        .experience-timeline,
        .contact-methods,
        .social-links
    `);
    
    // Add initial hidden state
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.classList.add('animate-out');
    });
    
    // Start observing (keep observing for reversible animations)
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Special animation for hero elements
    const heroElements = document.querySelectorAll('.hero-subtitle, .hero-description, .hero-buttons, .hero-image');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
    
    // Special animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'scale(0.5) rotateY(180deg)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'scale(1) rotateY(0deg)';
        }, 300);
    }
});

// Skill items hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Typing effect for hero title (optional)
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

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for skills (if you want to add numbers)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Lazy loading for images (if you add real images later)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Form validation (if you add contact forms later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', scrollToTop);
});

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .cta::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Enhanced typing effect with cursor animation
function enhancedTypeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '<span class="typing-cursor">|</span>';
    
    function type() {
        if (i < text.length) {
            const currentText = text.substring(0, i + 1);
            element.innerHTML = currentText + '<span class="typing-cursor">|</span>';
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                element.innerHTML = text;
                element.classList.add('typing-complete');
            }, 1000);
        }
    }
    
    type();
}

// Initialize enhanced typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Set the correct name
        heroTitle.textContent = 'Jean Paul Casique';
        const originalText = 'Jean Paul Casique';
        
        // Clear any existing content
        heroTitle.innerHTML = '';
        
        // Add typing styles
        const typingStyle = document.createElement('style');
        typingStyle.textContent = `
            .typing-cursor {
                animation: blink 1s infinite;
                color: #00bfff;
                font-weight: normal;
            }
            
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
            
            .typing-complete {
                animation: typingComplete 0.5s ease forwards;
            }
            
            @keyframes typingComplete {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(typingStyle);
        
        setTimeout(() => {
            enhancedTypeWriter(heroTitle, originalText, 150);
        }, 1200);
    }
});

// Add floating particles effect
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00bfff;
            border-radius: 50%;
            opacity: 0.6;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
        `;
        
        particleContainer.appendChild(particle);
    }
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00bfff, #0099cc);
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', () => {
    createScrollProgress();
});

// Add smooth reveal animation for text elements
function revealText() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    
    textElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                textObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    textElements.forEach(element => {
        textObserver.observe(element);
    });
}

// Initialize text reveal
document.addEventListener('DOMContentLoaded', () => {
    revealText();
});

// CV Download functionality
function createCVDownload() {
    // Create CV content
    const cvContent = `
        JEAN PAUL CASIQUE
        Desarrollador Móvil iOS & Android
        
        CONTACTO
        Email: jeanpaulcasique@example.com
        Teléfono: +52 123 456 7890
        Ubicación: México
        
        PERFIL PROFESIONAL
        Especializado en el desarrollo de aplicaciones móviles nativas e híbridas. 
        Creando experiencias digitales excepcionales para iOS y Android.
        
        EXPERIENCIA
        
        Desarrollador Móvil Jr - TechMobile Solutions
        Enero 2024 - Actualmente
        • Desarrollo de aplicaciones móviles nativas para iOS y Android
        • Utilización de Swift, Kotlin y Flutter
        • Diseño e implementación de interfaces de usuario responsivas
        • Integración de APIs REST y optimización de rendimiento
        • Trabajo con metodologías ágiles (Scrum) y control de versiones con Git
        
        Desarrollador Móvil Trainee - AppDev Academy
        Junio 2023 - Diciembre 2023
        • Programa intensivo de desarrollo móvil
        • Aprendizaje de fundamentos de iOS y Android development
        • Desarrollo de aplicaciones con SwiftUI, UIKit, Kotlin y Jetpack Compose
        • Participación en proyectos colaborativos
        
        Proyectos Personales - Desarrollo Independiente
        2023 - Actualmente
        • Desarrollo de aplicaciones móviles personales
        • Creación de apps desde cero hasta publicación en App Store y Google Play Store
        • Implementación de funcionalidades avanzadas (mapas, notificaciones push, pagos in-app)
        
        HABILIDADES TÉCNICAS
        
        Desarrollo Móvil:
        • Swift, SwiftUI, UIKit
        • Kotlin, Java
        • Flutter, React Native, Dart
        
        iOS:
        • Xcode, Core Data, Core Animation
        • AVFoundation, MapKit, StoreKit
        
        Android:
        • Android Studio, Room Database, Retrofit
        • Jetpack Compose, Material Design, Firebase
        
        Herramientas:
        • Git, GitHub, VS Code, Postman
        • Figma, TestFlight, Google Play Console
        
        FORMACIÓN
        
        Certificación iOS Development - Apple Developer Academy (2023)
        • Desarrollo de aplicaciones iOS con Swift y SwiftUI
        • Frameworks nativos de Apple y servicios de iOS
        • Publicación en App Store y Human Interface Guidelines
        
        Certificación Android Development - Google Developer Training (2023)
        • Desarrollo de aplicaciones Android con Kotlin y Jetpack Compose
        • Arquitectura de aplicaciones Android y Material Design
        • Integración con servicios de Google y publicación en Google Play Store
        
        PROYECTOS DESTACADOS
        
        ShopEasy - App de E-commerce Móvil
        • Aplicación de comercio electrónico desarrollada con Flutter y Firebase
        • Navegación de productos, carrito de compras y notificaciones de pedidos
        • Integración con pasarelas de pago y sistema de reviews
        
        FitTracker - App de Fitness y Salud
        • Aplicación nativa iOS desarrollada con Swift y SwiftUI
        • Tracking de ejercicios, estadísticas de progreso e integración con HealthKit
        • Notificaciones motivacionales y diseño siguiendo Human Interface Guidelines
        
        CityGuide - App de Turismo Local
        • Aplicación Android desarrollada con Kotlin y Jetpack Compose
        • Mapas interactivos, reviews de usuarios y rutas personalizadas
        • Integración con Google Maps API y Firebase
    `;
    
    return cvContent;
}




});
