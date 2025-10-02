document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});


const profileImg = document.querySelector('header img');
if (profileImg) {
    
    profileImg.addEventListener('click', function() {
    // Check if text already exists
    const existingText = document.querySelector('.profile-side-text');
    
    if (existingText) {
        // If text exists, remove it
        existingText.remove();
    } else {
        // Create text element to display beside photo
        const sideText = document.createElement('div');
        sideText.className = 'profile-side-text';
        sideText.innerHTML = '<em>Welcome! I am Khan Tehseen<br>CSE Undergraduate at NIT Srinagar</em>';
        
        // Style the text
        sideText.style.position = 'absolute';
        sideText.style.left = 'calc(50% + 90px)'; // Position to the right of the image
        sideText.style.top = '40%';
        sideText.style.transform = 'translateY(-50%)';
        sideText.style.color = 'white';
        sideText.style.fontStyle = 'italic';
        sideText.style.padding = '15px';
        sideText.style.backgroundColor = 'purple';
        sideText.style.borderRadius = '8px';
        sideText.style.zIndex = '10';
        sideText.style.maxWidth = '200px';
        sideText.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        sideText.style.animation = 'fadeIn 0.5s ease';
        
        // Make header relative positioned for absolute positioning of text
        const header = document.querySelector('header');
        header.style.position = 'relative';
        
        // Add to header
        header.appendChild(sideText);
        
        // Remove text after 10 seconds
        setTimeout(() => {
            if (sideText.parentNode) {
                sideText.style.animation = 'fadeOut 0.5s ease';
                setTimeout(() => {
                    if (sideText.parentNode) {
                        sideText.parentNode.removeChild(sideText);
                    }
                }, 500);
            }
        }, 5000);
    }
});

// Add fade animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-50%) translateX(-10px); }
        to { opacity: 1; transform: translateY(-50%) translateX(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(-50%) translateX(0); }
        to { opacity: 0; transform: translateY(-50%) translateX(-10px); }
    }
`;
document.head.appendChild(style);
    
    // Add subtle hover effect
    profileImg.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
    });
    
    profileImg.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
}

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

themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeButton.innerHTML = '☀️';
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'black';
        themeButton.style.backgroundColor = '#FFDAB9';
    } else {
        themeButton.innerHTML = '🌙';
        document.body.style.backgroundColor = '#FFDAB9';
        document.body.style.color = '#333';
        themeButton.style.backgroundColor = '#2c3e50';
    }
});


const footer = document.querySelector('footer');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML += ` | ${currentYear}`;
    
}

function enterCreativeRealm(){
     window.location.href = "creative-realm.html";
}
