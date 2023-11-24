// Function to handle the plant addition form submission
function submitPlantForm() {
    const formData = new FormData(document.getElementById('addPlantForm'));

    // Get the admin token (replace 'yourAdminToken' with the actual token)
    const adminToken = localStorage.getItem("admintoken");
    console.log(adminToken); 

    // Construct API endpoint
    const apiUrl = 'https://helseflora.herokuapp.com/webshop/plants?key=BQPHVM69';

    // Make the API request
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': adminToken,
        },
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log('Plant added successfully:', data);
            // You may want to redirect to a different page or show a success message
        })
        .catch(error => {
            console.error('Failed to add plant:', error);
            // Handle the error, e.g., display an error message to the user
        });
}
