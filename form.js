document.getElementById('contactForm').addEventListener('submit', SendMail);

function SendMail(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var comment = document.getElementById('comment').value;

  if (name === '' || email === '' || comment === '') {
    alert('Please fill in all the fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }


  var templateParams = {
    name: name,
    email: email,
    comment: comment
  };

  emailjs.send('service_tzs4ubs', 'template_338gcnl', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully.');
      document.getElementById('contactForm').reset(); // Clear the form
    },
    (error) => {
      console.log('FAILED...', error);
      alert('Failed to send your message.');
    }
  );
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}