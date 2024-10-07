
let intervalId;

window.onload = () => {
  const connectButton = document.createElement('button');
  connectButton.textContent = 'Connect with All';
  connectButton.style.position = 'fixed';
  connectButton.style.bottom = '20px';
  connectButton.style.right = '20px';
  connectButton.style.padding = '10px 20px';
  connectButton.style.backgroundColor = '#0073b1';
  connectButton.style.color = 'white';
  connectButton.style.border = 'none';
  connectButton.style.borderRadius = '5px';
  connectButton.style.cursor = 'pointer';
  connectButton.style.zIndex = '1000';
  document.body.appendChild(connectButton);

  const stopButton = document.createElement('button');
  stopButton.textContent = 'Stop';
  stopButton.style.position = 'fixed';
  stopButton.style.bottom = '20px';
  stopButton.style.right = '150px';
  stopButton.style.padding = '10px 20px';
  stopButton.style.backgroundColor = 'red';
  stopButton.style.color = 'white';
  stopButton.style.border = 'none';
  stopButton.style.borderRadius = '5px';
  stopButton.style.cursor = 'pointer';
  stopButton.style.zIndex = '1000'; 
  document.body.appendChild(stopButton);

  connectButton.addEventListener('click', connectWithAll);
  stopButton.addEventListener('click', stopConnecting);
};

function connectWithAll() {
  const buttons = document.querySelectorAll('button');
  let connectButtons = Array.from(buttons).filter(btn => btn.textContent.includes('Connect'));

  if (connectButtons.length === 0) {
    alert('No connectable profiles found');
    return;
  }

  let index = 0;

  intervalId = setInterval(() => {
    if (index < connectButtons.length) {
      connectButtons[index].click();
      index++;
    } else {
      clearInterval(intervalId); 
      alert('All connection requests sent!');
    }
  }, Math.random() * 2000 + 1000); 
}

function stopConnecting() {
  clearInterval(intervalId);
  alert('Connection process stopped.');
}
