// editing
// listing
// create account
// ONLY FOR CLIENT SIDE



// Event listener for the login button on the landing page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-page').addEventListener('click', () => {
        window.location.href = '/login'
    })
});

// Event listener for the sign-up button on the landing page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signup-page').addEventListener('click', () => {
        window.location.href = '/signup'
    });
});


const createAccountBtn = document.getElementById('create-an-account');

createAccountBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
  
    try {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            alert('You have successfully created an account!!');
            document.location.replace('/profile');
        } else {
            alert("Error!!");
            //console.error('Error creating new account!', response.statusText);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
});
// logout button functionality



        










