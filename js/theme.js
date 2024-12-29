document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
        } else {
            const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', systemTheme);
            updateThemeIcon(systemTheme);
        }
    }

    // Update theme icon
    function updateThemeIcon(theme) {
        const lightIcon = document.querySelector('.light-icon');
        const darkIcon = document.querySelector('.dark-icon');
        
        if (theme === 'dark') {
            lightIcon.style.display = 'block';
            darkIcon.style.display = 'none';
        } else {
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
        }
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        // Add animation class
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    }

    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    prefersDarkScheme.addEventListener('change', initTheme);

    // Initialize theme on load
    initTheme();
});
