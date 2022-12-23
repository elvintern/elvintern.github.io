const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

document.addEventListener(
  'scroll',
  () => {
    if (window.scrollY >= 200) {
      nav.classList.add('nav--bar');
    } else if (window.scrollY < 200) {
      nav.classList.remove('nav--bar');
    }
  },
  { passive: true }
);

function sendEmail() {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'elvintern@gmail.com',
    Password: '6EDBE6B03E7FEA88BE99F13FB2E19486BF9C',
    To: 'elvintern@gmail.com',
    From: 'elvintern@gmail.com',
    Subject: 'New Contact From Portfolio Page',
    Body:
      'Name: ' +
      document.getElementById('name').value +
      '<br> Email: ' +
      document.getElementById('email').value +
      '<br> Message: ' +
      document.getElementById('message').value,
  }).then(() =>
    alert(
      'Thank you for getting in touch! I will get back in touch with you soon! Have a nice day :)'
    )
  );
}
