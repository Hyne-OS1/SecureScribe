// new scribe entry handler - post 

const newFormHandler = async (event) => {
    event.preventDefault();

const title = document.querySelector('#title').value.trim();
const content = document.querySelector('#content').value.trim();


if (title && content) {
    const response = await fetch(`/api/scribes`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/scribes');
    } else {
      alert('ERROR: scribe not able to be entered');
    }
  }
};

// edit post method

const updateFormHandler = async (event) => {
  event.preventDefault();

  //localhost:3001/scribes/1
const name = document.querySelector('#scribe-name').value.trim();
const description = document.querySelector('#scribe-desc').value.trim();

const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

if (name && description) {
  const response = await fetch(`/api/scribes/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, description }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/scribes');
  } else {
    alert('ERROR: scribe not able to be entered');
  }
}
};

// delete scribe fucntion 

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('tear-out')) {
      const id = event.target.getAttribute('tear-out');
  
      const response = await fetch(`/api/scribes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/scribes');
      } else {
        alert('ERROR: failed to delete scribe entry');
      }
    }
  };

// submit scribe entry functionality for button handler, will repopulate cards on screen
// ADD REPOPULATE CARD FEATURE TO SCREEN - ASK TA
const submitButtonHandler = async (event) => {
  if (event.target.hasAttribute('submit')) {
    const id = event.target.getAttribute('submit');

    const response = await fetch(`/scribes/${id}`, {
      method: 'POST',
    });

    if (response.ok) {
      document.location.replace('/scribes');
    } else {
      alert('ERROR: failed to submit scribe entry');
    }
  }
};

// POPULATE CARD FUNCTION - 


//   document handlers

// CHECK IF THIS IS CORRECT FOR PASSING TITLE ALONG WITH CONTENT ID BELOW - ASK TA
document
.querySelector('#title')
.addEventListener('submit', newFormHandler);

document
.querySelector('#content')
.addEventListener('submit', newFormHandler);

document
.querySelector('#tear-out')
.addEventListener('click'. delButtonHandler);

// submitbuttonhandler document query selector and addeventlistener - ASK TA