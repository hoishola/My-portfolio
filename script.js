//Theme
function theme() {
  const lightBtn = document.getElementById('lightBtn');
  const darkBtn = document.getElementById('darkBtn');
  const body = document.body;

  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    lightBtn.style.display = 'none';
    darkBtn.style.display = 'inline-block';
  } else {
    lightBtn.style.display = 'inline-block';
    darkBtn.style.display = 'none';
  }
}
  
  const navItems = document.querySelectorAll('.nav p');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const sayHelloBtn = document.querySelector('.sayhello-btn');
sayHelloBtn.addEventListener('click', () => {
  window.location.href = 'mailto:hoishola973@gmail.com';
});