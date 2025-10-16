// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Smooth scrolling for navigation links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .about-content, .contact-content');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !service || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Test Gallery Function - Simplified
window.testGallery = function() {
    alert('Test gallery function works!');
    console.log('Test gallery called');
}

// Gallery Event Listeners - Direct approach
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up gallery event listeners');
    
    // Add click events to all gallery triggers
    const galleryTriggers = document.querySelectorAll('.gallery-trigger');
    console.log('Found gallery triggers:', galleryTriggers.length);
    
    galleryTriggers.forEach((trigger, index) => {
        console.log(`Setting up trigger ${index}:`, trigger);
        
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Gallery trigger clicked!', this);
            
            // Get gallery ID from data attribute
            const galleryId = this.getAttribute('data-gallery');
            console.log('Gallery ID from data attribute:', galleryId);
            
            if (galleryId) {
                console.log('Opening gallery:', galleryId);
                openGallery(galleryId);
            } else {
                // Fallback to onclick attribute
                const onclickAttr = this.getAttribute('onclick');
                console.log('Fallback to onclick attr:', onclickAttr);
                
                if (onclickAttr) {
                    const match = onclickAttr.match(/openGallery\('([^']+)'\)/);
                    if (match) {
                        const galleryId = match[1];
                        console.log('Extracted gallery ID from onclick:', galleryId);
                        openGallery(galleryId);
                    }
                }
            }
        });
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('btn-primary')) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add hover effect to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
}

// Image Lightbox Modal
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing lightbox...');
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    
    // Add click event to all portfolio images
    const portfolioImages = document.querySelectorAll('.portfolio-image img');
    console.log('Found portfolio images:', portfolioImages.length);
    
    portfolioImages.forEach(function(img, index) {
        console.log('Adding click event to image:', index, img.src);
        
        // Make sure images are clickable
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Image clicked:', this.src);
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalCaption.innerHTML = this.alt;
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            console.log('Close button clicked');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            console.log('Modal background clicked');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            console.log('Escape key pressed');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    console.log('Lightbox initialized successfully');
});

// Simple modal function
function openModal(imageSrc, imageAlt) {
    console.log('Opening modal for:', imageSrc);
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalCaption.innerHTML = imageAlt;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Test if JavaScript is loaded
console.log('Script.js loaded successfully');

// Gallery System  
const galleryData = {
    // Design Folders
    'design-bloom-cafeo': {
        title: "Bloom Cafeo Design",
        images: [
            { src: "Design Graphic/Bloom Cafeo/1.png", alt: "Bloom Cafeo Design 1" },
            { src: "Design Graphic/Bloom Cafeo/2.png", alt: "Bloom Cafeo Design 2" },
            { src: "Design Graphic/Bloom Cafeo/3.png", alt: "Bloom Cafeo Design 3" }
        ]
    },
    'design-kokomatcha': {
        title: "KokoMatcha Design",
        images: [
            { src: "Design Graphic/KokoMatcha/Menu Cover.png", alt: "KokoMatcha Menu Cover" },
            { src: "Design Graphic/KokoMatcha/Menu.png", alt: "KokoMatcha Menu" },
            { src: "Design Graphic/KokoMatcha/Standing Poster.png", alt: "KokoMatcha Standing Poster" }
        ]
    },
    'design-menu-coffee': {
        title: "Coffee Menu Design",
        images: [
            { src: "Design Graphic/Menu L Coffee/1.png", alt: "Coffee Menu 1" },
            { src: "Design Graphic/Menu L Coffee/2.png", alt: "Coffee Menu 2" },
            { src: "Design Graphic/Menu L Coffee/3.png", alt: "Coffee Menu 3" }
        ]
    },
    // Illustration Folders
    'illustration-ayam-mascot': {
        title: "Ayam Mascot Kurir",
        images: [
            { src: "Illustration/Ayam Mascot Kurir/Ayam Basic (20250226050017).png", alt: "Ayam Basic Design" },
            { src: "Illustration/Ayam Mascot Kurir/Mascot Ayam Kardus Depan (20250227065749).png", alt: "Mascot Ayam Depan" },
            { src: "Illustration/Ayam Mascot Kurir/Mascot Ayam Kardus Kiri (20250226082152).png", alt: "Mascot Ayam Kiri" }
        ]
    },
    'illustration-outfit-character': {
        title: "Outfit Character Design",
        images: [
            { src: "Illustration/Outfit Character/HiPaint_1737447598315 (1).png", alt: "Character Outfit 1" },
            { src: "Illustration/Outfit Character/HiPaint_1737472467708.png", alt: "Character Outfit 2" },
            { src: "Illustration/Outfit Character/HiPaint_1737627887245.jpg", alt: "Character Outfit 3" },
            { src: "Illustration/Outfit Character/HiPaint_1737705492445 (1).jpg", alt: "Character Outfit 4" }
        ]
    },
    'illustration-clear-cup': {
        title: "Clear Cup L Coffee Illustration",
        images: [
            { src: "Illustration/Illustration Clear Cup L Coffee/1.png", alt: "Clear Cup Design 1" },
            { src: "Illustration/Illustration Clear Cup L Coffee/2.png", alt: "Clear Cup Design 2" }
        ]
    },
    'illustration-komik-eveno': {
        title: "Komik Eveno Series",
        images: [
            { src: "Illustration/Komik Eveno/Part 1/1.png", alt: "Komik Part 1" },
            { src: "Illustration/Komik Eveno/Part 2/2A.png", alt: "Komik Part 2A" },
            { src: "Illustration/Komik Eveno/Part 2/2B.png", alt: "Komik Part 2B" },
            { src: "Illustration/Komik Eveno/Part 2/2C.png", alt: "Komik Part 2C" },
            { src: "Illustration/Komik Eveno/Part 3/3A.png", alt: "Komik Part 3A" },
            { src: "Illustration/Komik Eveno/Part 3/3B.png", alt: "Komik Part 3B" },
            { src: "Illustration/Komik Eveno/Part 3/3C.png", alt: "Komik Part 3C" }
        ]
    },
    'illustration-logo-kokomatcha': {
        title: "Logo KokoMatcha Design",
        images: [
            { src: "Illustration/Logo KokoMatcha/1000137158.png", alt: "KokoMatcha Logo 1" },
            { src: "Illustration/Logo KokoMatcha/KokoMatcha White (20250727110104).png", alt: "KokoMatcha Logo White" }
        ]
    },
    // Photography Folders
    'photography-food': {
        title: "Food Photography",
        images: [
            { src: "Photography/FOOD/IMG_9918.jpg", alt: "Food Photo 1" },
            { src: "Photography/FOOD/IMG_9926.jpg", alt: "Food Photo 2" },
            { src: "Photography/FOOD/IMG_9931.jpg", alt: "Food Photo 3" },
            { src: "Photography/FOOD/IMG_9946.jpg", alt: "Food Photo 4" },
            { src: "Photography/FOOD/IMG_9953.jpg", alt: "Food Photo 5" }
        ]
    },
    'photography-portrait': {
        title: "Personal Portrait Photography",
        images: [
            { src: "Photography/Personal Photo After Graduate/IMG_1430.jpg", alt: "Graduate Portrait 1" },
            { src: "Photography/Personal Photo After Graduate/IMG_1437.jpg", alt: "Graduate Portrait 2" },
            { src: "Photography/Personal Photo After Graduate/IMG_1460.jpg", alt: "Graduate Portrait 3" },
            { src: "Photography/Personal Photo After Graduate/IMG_1527.jpg", alt: "Graduate Portrait 4" },
            { src: "Photography/Personal Photo After Graduate/IMG_1531.jpg", alt: "Graduate Portrait 5" },
            { src: "Photography/Personal Photo After Graduate/IMG_1533.jpg", alt: "Graduate Portrait 6" }
        ]
    },
    'photography-product': {
        title: "Birthday Photography",
        images: [
            { src: "Photography/Personal Photo For Birthday/Copy of IMG_1937.jpg", alt: "Birthday Photo 1" },
            { src: "Photography/Personal Photo For Birthday/Copy of IMG_1939.jpg", alt: "Birthday Photo 2" },
            { src: "Photography/Personal Photo For Birthday/Copy of IMG_1940.jpg", alt: "Birthday Photo 3" },
            { src: "Photography/Personal Photo For Birthday/IMG_1935 (1).jpg", alt: "Birthday Photo 4" },
            { src: "Photography/Personal Photo For Birthday/IMG_1942.jpg", alt: "Birthday Photo 5" }
        ]
    },
    'photography-wedding': {
        title: "Group Studio Photography",
        images: [
            { src: "Photography/Studio Photo Group/IMG_1179.jpg", alt: "Studio Group Photo 1" },
            { src: "Photography/Studio Photo Group/IMG_1194 (1).jpg", alt: "Studio Group Photo 2" },
            { src: "Photography/Studio Photo Group/IMG_1239.jpg", alt: "Studio Group Photo 3" },
            { src: "Photography/Studio Photo Group/IMG_1249.jpg", alt: "Studio Group Photo 4" },
            { src: "Photography/Studio Photo Group/IMG_1368.jpg", alt: "Studio Group Photo 5" },
            { src: "Photography/Studio Photo Group/IMG_1380.jpg", alt: "Studio Group Photo 6" }
        ]
    },
    'photography-hewan': {
        title: "LWDC FH UNILA Photography",
        images: [
            { src: "Photography/LWDC FH UNILA/FIX (2).jpg", alt: "LWDC Event Photo 1" },
            { src: "Photography/LWDC FH UNILA/FIX.jpg", alt: "LWDC Event Photo 2" },
            { src: "Photography/LWDC FH UNILA/IMG_0574.jpg", alt: "LWDC Event Photo 3" },
            { src: "Photography/LWDC FH UNILA/IMG_0650.jpg", alt: "LWDC Event Photo 4" },
            { src: "Photography/LWDC FH UNILA/IMG_0768 (1).jpg", alt: "LWDC Event Photo 5" }
        ]
    }
};

let currentGallery = null;
let currentImageIndex = 0;

function openGallery(folderId) {
    console.log('=== OPENING GALLERY ===');
    console.log('Gallery ID:', folderId);
    
    const modal = document.getElementById('galleryModal');
    const gallery = galleryData[folderId];
    
    console.log('Modal element found:', !!modal);
    console.log('Gallery data found:', !!gallery);
    
    if (!modal) {
        console.error('Gallery modal not found!');
        return;
    }
    
    if (!gallery) {
        console.error('Gallery data not found for:', folderId);
        console.log('Available galleries:', Object.keys(galleryData));
        return;
    }
    
    console.log('Gallery images count:', gallery.images.length);
    
    currentGallery = gallery;
    currentImageIndex = 0;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    console.log('Modal display set to block');
    
    // Update display and create thumbnails
    setTimeout(() => {
        updateGalleryDisplay();
        createThumbnails();
        console.log('Gallery setup complete');
    }, 100);
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentGallery = null;
}

function updateGalleryDisplay() {
    if (!currentGallery) return;
    
    const galleryImage = document.getElementById('galleryImage');
    const galleryCaption = document.getElementById('galleryCaption');
    const currentIndexSpan = document.getElementById('currentImageIndex');
    const totalImagesSpan = document.getElementById('totalImages');
    
    console.log('Gallery elements found:', {
        image: !!galleryImage,
        caption: !!galleryCaption,
        index: !!currentIndexSpan,
        total: !!totalImagesSpan
    });
    
    const currentImage = currentGallery.images[currentImageIndex];
    
    galleryImage.src = currentImage.src;
    galleryImage.alt = currentImage.alt;
    galleryCaption.textContent = currentImage.alt;
    
    currentIndexSpan.textContent = currentImageIndex + 1;
    totalImagesSpan.textContent = currentGallery.images.length;
    
    updateThumbnailsActiveState();
}

function createThumbnails() {
    if (!currentGallery) return;
    
    const thumbnailsContainer = document.getElementById('galleryThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    currentGallery.images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.className = 'gallery-thumbnail';
        thumb.onclick = () => {
            currentImageIndex = index;
            updateGalleryDisplay();
        };
        
        if (index === 0) thumb.classList.add('active');
        
        thumbnailsContainer.appendChild(thumb);
    });
}

function updateThumbnailsActiveState() {
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

function nextImage() {
    if (!currentGallery) return;
    
    currentImageIndex = (currentImageIndex + 1) % currentGallery.images.length;
    updateGalleryDisplay();
}

function previousImage() {
    if (!currentGallery) return;
    
    currentImageIndex = currentImageIndex === 0 
        ? currentGallery.images.length - 1 
        : currentImageIndex - 1;
    updateGalleryDisplay();
}

// Keyboard navigation for gallery
document.addEventListener('keydown', function(e) {
    if (document.getElementById('galleryModal').style.display === 'block') {
        switch(e.key) {
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                previousImage();
                break;
            case 'Escape':
                closeGallery();
                break;
        }
    }
});