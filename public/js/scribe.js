// new scribe entry handler - post 

const newFormHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#scribe-name').value.trim();
const description = document.querySelector('#scribe-desc').value.trim();

if (name && description) {
    const response = await fetch(`/api/scribe`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/scribe');
    } else {
      alert('ERROR: scribe not able to be entered');
    }
  }
};

// edit post method



// delete scribe fucntion 

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/scribe/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/scribe');
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