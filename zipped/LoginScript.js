// Your existing JavaScript code for toggling between login and registration forms
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const bntpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

bntpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Function to create Basic authentication string
function createBasicAuthString(username, password) {
    let combinedStr = username + ":" + password;
    let b64Str = btoa(combinedStr);
    return "basic " + b64Str;
}

// Function to handle the admin login form submission
function submitAdminLoginForm() {
    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;

    // Check if entered credentials match the administrator credentials
    if (adminUsername === "carlvonlinne@helseflora.no" && adminPassword === "pollendust") {
        // Use the provided function to create the Basic authentication string
        const authString = createBasicAuthString(adminUsername, adminPassword);

        // Make a POST request to the admin login endpoint
        fetch("https://helseflora.herokuapp.com/users/adminlogin?key=BQPHVM69", {
            method: "POST",
            headers: {
                "Authorization": authString,
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data, which includes the token
                console.log("Admin Login successful:", data);
                const adminUser = true 
                const token = data.logindata.token;
                // Save the token for future use (e.g., when adding, changing, and deleting plants)
                // You may want to store the token securely, such as in a session or local storage
                // For example: localStorage.setItem("adminToken", token);

                // Redirect to a new page after successful login
                window.location.href = "index.html"; // Change to the desired page


                localStorage.setItem("adminLogin", adminUser);
                localStorage.setItem("admintoken",token);
                
            })
            .catch(error => {
                console.error("Admin Login failed:", error);
                // Handle the error, e.g., display an error message to the user
            });
    } else {
        // Failed login due to invalid credentials
        console.error("Admin Login failed: Invalid credentials");
        // You may want to show an error message to the user
    }
}
