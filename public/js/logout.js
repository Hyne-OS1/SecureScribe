//  const logout with async await function using FETCH post method
// if statement to check response else response status text
// document query selector for logout with addeventlistener click event logout

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);