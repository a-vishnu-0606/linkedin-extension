
window.onload = () => {
  const button = document.createElement('button');
  button.textContent = 'Connect with All';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#0073b1';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '1000'; 
  document.body.appendChild(button);

  button.addEventListener('click', connectWithAll);
};

function connectWithAll() {
  const buttons = document.querySelectorAll('button'); 
  let connectButtons = Array.from(buttons).filter(btn => btn.textContent.includes('Connect')); 

  if (connectButtons.length === 0) {
    alert('No connectable profiles found');
    return;
  }

  let index = 0;

  const intervalId = setInterval(() => {
    if (index < connectButtons.length) {
      connectButtons[index].click();
      index++;
    } else {
      clearInterval(intervalId); 
      alert('All connection requests sent!');
    }
  }, Math.random() * 2000 + 1000); 
}
