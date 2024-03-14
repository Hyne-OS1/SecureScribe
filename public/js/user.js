// editing
// listing
// create account
// ONLY FOR CLIENT SIDE

// create account button event listener on create account page
//document.addEventListener('DOMContentLoaded', () => {
    console.log("whatttttttttt");
    const createAccountBtn = document.getElementById('create-account');

    createAccountBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const formData = new FormData(document.querySelector('form'));
        console.log(formData);
        try{
            console.log("herererer");
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
            
            if (response.ok) { alert('you have successfully created an account!!')
                document.location.replace('/profile');
                //window.location.href = '/profile';
            } else {
                alert("Error!!")
                //console.error('Error creating new account!', response.statusText);
            }
            }
            catch (error) {
                console.error('Network error:', error);
            }
        });
//});

// 