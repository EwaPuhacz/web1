
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// Function to change language
function changeLanguage(language) {
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/") + 1);

    // Map of language codes to corresponding HTML files
    var languageMap = {
        'es': 'index_es.html',
        'pl': 'index_pl.html',
        'en': 'index_en.html'
    };

    // Check if the selected language is in the map
    if (languageMap[language]) {
        window.location.href = baseUrl + languageMap[language];
    } else {
        console.error("Selected language not supported");
    }
}

// Add event listeners to language buttons after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.lang-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var language = button.getAttribute('data-lang');
            changeLanguage(language);
        });
    });
});
