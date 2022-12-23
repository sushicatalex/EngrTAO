fetch('navigation-subpage.html')
    .then(response => response.text())
    .then(html => {
        // The HTML content is stored in the 'html' variable
    });

fetch('navigation-subpage.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navigation-bar').innerHTML = html;
    });