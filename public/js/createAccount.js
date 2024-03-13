// create account button event listener on create account page
document.addEventListener('DOMContentLoaded', () => {
    const createAccountBtn = document.getElementById('create-account');

    createAccountBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        const formData = new FormData(document.querySelector('form'));
        try{
            const reponse = await fetch('/createAccount', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                window.location.href = '/profile';
            } else {
                console.error('Error creating new account!', reponse.statusText);
            }
            }
            catch (error) {
                console.error('Network error:', error);
            }
        });
});

