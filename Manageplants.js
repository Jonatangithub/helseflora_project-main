




// Search the plants.
function search() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Construct the URL with the search term as a query parameter
    var searchUrl = 'plant.html?search=' + encodeURIComponent(searchTerm);

    // Navigate to the search page
    window.location.href = searchUrl;
}

