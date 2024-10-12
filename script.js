// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle (Light/Dark Mode)
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerText = 'Toggle Theme';
themeToggleBtn.style.position = 'fixed';
themeToggleBtn.style.bottom = '20px';
themeToggleBtn.style.right = '20px';
themeToggleBtn.style.padding = '10px';
themeToggleBtn.style.backgroundColor = '#0077b6';
themeToggleBtn.style.color = 'white';
themeToggleBtn.style.border = 'none';
themeToggleBtn.style.cursor = 'pointer';
document.body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.innerText = 'Switch to Light Theme';
    } else {
        themeToggleBtn.innerText = 'Switch to Dark Theme';
    }
});

// Apply Dark Theme styles
const style = document.createElement('style');
style.innerHTML = `
    .dark-theme {
        background-color: #121212;
        color: #f4f4f4;
    }
    .dark-theme header {
        background-color: #1f1f1f;
    }
    .dark-theme footer {
        background-color: #1f1f1f;
    }
`;
document.head.appendChild(style);
