// new scribe entry handler - post 

const newFormHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#scribe-name').value.trim();
const description = document.querySelector('#scribe-desc').value.trim();

if (name && description) {
    const response = await fetch(`/api/scribes`, {
      method: 'POST',
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
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
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



//   document handlers
document
.querySelector('.scribe-entry')
.addEventListener('submit', newFormHandler);

document
.querySelector('.tear-out')
.addEventListener('click'. delButtonHandler);