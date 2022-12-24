fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navigation-bar').innerHTML = html;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });