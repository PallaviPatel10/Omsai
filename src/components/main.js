window.onload = function() {
    fetch('../Front-end/src/components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Fetch and insert Landing page content
        fetch('../Front-end/src/components/landingpage.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main').innerHTML = data;
        });
        
        // Fetch and insert footer content
        fetch('../Front-end/src/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
    });
};
