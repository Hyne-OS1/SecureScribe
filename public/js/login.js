// login form handler
// const login = async (event) => {
// even.preventDefault(); to stop auto page refresh
// collect values from login form using query selectors eg, email and password.
// if statement for (email && password) { send a post request with FETCH, link to api routes in this case user }


// signup form handler 
// async (event) => {
// event.preventDefault(); to stop auto page refresh
// const variables for name, email, password all tied to query selector.value.trim();
// if statemment for name email and password same as above for login using post method and FETCH api
// if okay .replace function onto profile.



// document queryselector and eventlistener for login form

// document queryselector and eventlistener for submit form

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#login-page')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#signup-page')
    .addEventListener('submit', signupFormHandler);
  
