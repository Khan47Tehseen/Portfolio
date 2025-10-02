// Function to show/hide sections
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Update active button
            document.querySelectorAll('.realm-nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
        }

// Function to open photo modal with support for both single and multiple images
function openPhotoModel(imageParam) {
    const modal = document.getElementById('photoModal');
    const modalContent = document.querySelector('.modal-content');
    
    // Clear previous content
    modalContent.innerHTML = '';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = closePhotoModel;
    modalContent.appendChild(closeBtn);
    
    // Create image gallery container
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'image-gallery';
    
    // Handle both single string and array of images
    let images = [];
    
    if (typeof imageParam === 'string') {
        // Single image
        images = [imageParam];
    } else if (Array.isArray(imageParam)) {
        // Multiple images
        images = imageParam;
    }
    
    // Add images to gallery
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Poem image ' + (index + 1);
        img.className = 'modal-image';
        galleryContainer.appendChild(img);
    });
    
    modalContent.appendChild(galleryContainer);
    modal.classList.add('active');
}

// Function to close photo modal
function closePhotoModel() {
    document.getElementById('photoModal').classList.remove('active');
}


function isInViewport(element){
    const rect = element.getBoundingClientRect();

    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        
    );
}

function handleAchievementAnimations(){
    const achievements = document.querySelectorAll('.achieve');
    achievements.forEach((achieve, index) => {

    

    if (isInViewport(achieve) && 
            !achieve.classList.contains('animate-left') && 
            !achieve.classList.contains('animate-right')) {
                 if (index % 2 === 0) {
                    achieve.classList.add('animate-left');
            } else {
             achieve.classList.add('animate-right');
            }
        }
    });
}    


window.addEventListener('scroll', handleAchievementAnimations);
window.addEventListener('load', handleAchievementAnimations);


const themeButton = document.createElement('button');
themeButton.innerHTML='🌙';
themeButton.title = 'Dark mode';
themeButton.style.position = 'fixed';
themeButton.style.bottom = '20px';
themeButton.style.right = '20px';
themeButton.style.padding = '8px';
themeButton.style.zIndex = '100';
themeButton.style.width = '50px';
themeButton.style.borderRadius = '50%'; 
themeButton.style.backgroundColor = '#2c3e50';
themeButton.style.color = 'white';
themeButton.style.border = 'none';
themeButton.style.cursor = 'pointer';
themeButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
themeButton.style.fontSize = '24px';
themeButton.style.display = 'flex';
themeButton.style.alignItems = 'center';
themeButton.style.justifyContent = 'center';
themeButton.style.transition = 'all 0.3s ease';


document.body.appendChild(themeButton);

const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background: #1a1a1a !important;
        color: #ffffff !important;
        transition: all 0.3s ease;
    }
    
    .dark-mode .achieve {
        background: #2d2d2d !important;
        color: #e0e0e0 !important;
        border-left-color: #444 !important;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4) !important;
    }
    
    .dark-mode .achieve h3 {
        color: #bb86fc !important;
    }
    
    .dark-mode .achieve p {
        color: #e0e0e0 !important;
    }
    .dark-mode .realm-header,
    .dark-mode .realm-header h1,
    .dark-mode .realm-header p {
        color: #ffffff !important;
    }
    
    .dark-mode .section h2 {
        color: #bb86fc !important;
    }
    
    .dark-mode .poem-photo-card {
        background: #2d2d2d !important;
        color: #ffffff !important;
    }
`;    
document.head.appendChild(style);

themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeButton.innerHTML = '☀️';
        themeButton.style.backgroundColor = '#FFDAB9';
        themeButton.style.color = '#333';
    } else {
        themeButton.innerHTML = '🌙';
        themeButton.style.backgroundColor = '#2c3e50';
        themeButton.style.color = 'white';
    }
});

const footer = document.querySelector('footer');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML += ` | ${currentYear}`;
    
}