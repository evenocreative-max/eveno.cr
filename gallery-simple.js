// Simple Gallery System for eveno.cr
console.log('Gallery system loading...');

// Gallery data structure
const galleryData = {
    // Design Galleries
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
    // Illustration Galleries  
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
            { src: "Illustration/Komik Eveno/Part 1/1.png", alt: "Komik Eveno Part 1" },
            { src: "Illustration/Komik Eveno/Part 2/2A.png", alt: "Komik Eveno Part 2A" },
            { src: "Illustration/Komik Eveno/Part 2/2B.png", alt: "Komik Eveno Part 2B" },
            { src: "Illustration/Komik Eveno/Part 2/2C.png", alt: "Komik Eveno Part 2C" },
            { src: "Illustration/Komik Eveno/Part 3/3A.png", alt: "Komik Eveno Part 3A" },
            { src: "Illustration/Komik Eveno/Part 3/3B.png", alt: "Komik Eveno Part 3B" },
            { src: "Illustration/Komik Eveno/Part 3/3C.png", alt: "Komik Eveno Part 3C" }
        ]
    },
    'illustration-logo-kokomatcha': {
        title: "Logo KokoMatcha Design",
        images: [
            { src: "Illustration/Logo KokoMatcha/1000137158.png", alt: "KokoMatcha Logo 1" },
            { src: "Illustration/Logo KokoMatcha/KokoMatcha White (20250727110104).png", alt: "KokoMatcha Logo White" }
        ]
    },
    // Photography Galleries
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

// Create gallery modal HTML dynamically
function createGalleryModal() {
    const modalHTML = `
        <div id="simpleGalleryModal" class="gallery-modal" style="display:none;">
            <div class="gallery-backdrop" onclick="closeSimpleGallery()"></div>
            <div class="gallery-content">
                <button class="gallery-close" onclick="closeSimpleGallery()">&times;</button>
                <button class="gallery-prev" onclick="prevGalleryImage()">&#8249;</button>
                <button class="gallery-next" onclick="nextGalleryImage()">&#8250;</button>
                
                <div class="gallery-main">
                    <img id="galleryMainImage" src="" alt="">
                    <div class="gallery-counter">
                        <span id="galleryCurrentIndex">1</span> / <span id="galleryTotalImages">1</span>
                    </div>
                </div>
                
                <div class="gallery-title" id="galleryTitle"></div>
                
                <div class="gallery-thumbnails" id="galleryThumbs"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add CSS
    const css = `
        <style>
        .gallery-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            background: rgba(0,0,0,0.95);
        }
        
        .gallery-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .gallery-content {
            position: relative;
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px 20px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .gallery-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0,0,0,0.7);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10001;
        }
        
        .gallery-prev, .gallery-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0,0,0,0.7);
            color: white;
            border: none;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10001;
        }
        
        .gallery-prev {
            left: 20px;
        }
        
        .gallery-next {
            right: 20px;
        }
        
        .gallery-main {
            position: relative;
            max-width: 100%;
            max-height: 70vh;
            margin-bottom: 20px;
        }
        
        .gallery-main img {
            width: 100%;
            height: auto;
            max-height: 70vh;
            object-fit: contain;
            border-radius: 8px;
        }
        
        .gallery-counter {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 14px;
        }
        
        .gallery-title {
            color: white;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .gallery-thumbnails {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 10px;
        }
        
        .gallery-thumb {
            width: 80px;
            height: 60px;
            object-fit: cover;
            border-radius: 4px;
            cursor: pointer;
            opacity: 0.6;
            transition: all 0.3s;
            border: 2px solid transparent;
        }
        
        .gallery-thumb:hover,
        .gallery-thumb.active {
            opacity: 1;
            border-color: #8B5CF6;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', css);
}

// Open gallery function
function openSimpleGallery(galleryId) {
    console.log('Opening gallery:', galleryId);
    
    const gallery = galleryData[galleryId];
    if (!gallery) {
        console.error('Gallery not found:', galleryId);
        return;
    }
    
    currentGallery = gallery;
    currentImageIndex = 0;
    
    const modal = document.getElementById('simpleGalleryModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    updateGalleryDisplay();
    createGalleryThumbnails();
}

// Close gallery
function closeSimpleGallery() {
    const modal = document.getElementById('simpleGalleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentGallery = null;
}

// Update gallery display
function updateGalleryDisplay() {
    if (!currentGallery) return;
    
    const mainImage = document.getElementById('galleryMainImage');
    const title = document.getElementById('galleryTitle');
    const currentIndex = document.getElementById('galleryCurrentIndex');
    const totalImages = document.getElementById('galleryTotalImages');
    
    const currentImage = currentGallery.images[currentImageIndex];
    
    mainImage.src = currentImage.src;
    mainImage.alt = currentImage.alt;
    title.textContent = currentGallery.title;
    currentIndex.textContent = currentImageIndex + 1;
    totalImages.textContent = currentGallery.images.length;
    
    updateThumbnailsActive();
}

// Create thumbnails
function createGalleryThumbnails() {
    if (!currentGallery) return;
    
    const thumbsContainer = document.getElementById('galleryThumbs');
    thumbsContainer.innerHTML = '';
    
    currentGallery.images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.className = 'gallery-thumb';
        thumb.onclick = () => {
            currentImageIndex = index;
            updateGalleryDisplay();
        };
        
        if (index === 0) thumb.classList.add('active');
        
        thumbsContainer.appendChild(thumb);
    });
}

// Update active thumbnail
function updateThumbnailsActive() {
    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Navigation functions
function nextGalleryImage() {
    if (!currentGallery) return;
    
    currentImageIndex = (currentImageIndex + 1) % currentGallery.images.length;
    updateGalleryDisplay();
}

function prevGalleryImage() {
    if (!currentGallery) return;
    
    currentImageIndex = currentImageIndex === 0 
        ? currentGallery.images.length - 1 
        : currentImageIndex - 1;
    updateGalleryDisplay();
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (document.getElementById('simpleGalleryModal').style.display === 'block') {
        switch(e.key) {
            case 'ArrowRight':
                nextGalleryImage();
                break;
            case 'ArrowLeft':
                prevGalleryImage();
                break;
            case 'Escape':
                closeSimpleGallery();
                break;
        }
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== INITIALIZING SIMPLE GALLERY ===');
    
    // Create modal
    createGalleryModal();
    console.log('Gallery modal created');
    
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        // Add click handlers to gallery triggers
        const galleryTriggers = document.querySelectorAll('[data-gallery]');
        console.log('Found gallery triggers:', galleryTriggers.length);
        
        // List all found triggers
        galleryTriggers.forEach((trigger, index) => {
            const galleryId = trigger.getAttribute('data-gallery');
            console.log(`Trigger ${index}: data-gallery="${galleryId}"`);
            
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('=== GALLERY CLICK DETECTED ===');
                console.log('Clicked element:', this);
                console.log('Gallery ID:', galleryId);
                
                alert('Gallery clicked: ' + galleryId); // Temporary alert for testing
                
                if (galleryId) {
                    openSimpleGallery(galleryId);
                } else {
                    console.error('No gallery ID found!');
                }
            });
            
            // Also add a visual indicator
            trigger.style.cursor = 'pointer';
            trigger.style.border = '2px solid red'; // Temporary visual indicator
        });
        
        console.log('Gallery event listeners attached');
    }, 500);
});

// Test function for manual testing
window.testGalleryOpen = function() {
    console.log('Manual test - opening bloom cafeo gallery');
    openSimpleGallery('design-bloom-cafeo');
}

console.log('Gallery system loaded successfully');
console.log('You can test gallery with: testGalleryOpen()');