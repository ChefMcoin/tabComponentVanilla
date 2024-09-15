const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');
const tabFunctions = document.querySelectorAll('.tab-function');
const functionPanel = document.querySelectorAll('.function-panel');
const switchButton = document.getElementById('switchButton');
const switchUp = document.getElementById('switchUp');

let isOn = false;

switchButton.addEventListener('click', () => {
  isOn = !isOn;
  if (isOn) {
    switchButton.classList.add('on');
  } else {
    switchButton.classList.remove('on');
  }
});

let isOnn = false;

switchUp.addEventListener('click', () => {
  isOnn = !isOnn;
  if (isOnn) {
    switchUp.classList.add('on-up');
  } else {
    switchUp.classList.remove('on-up');
  }
});

//Function to switch tabs
function switchTab(e) {
  const targetTab = e.target.dataset.tab;

  //Remove active class from all buttons and panel
  tabButtons.forEach(button => button.classList.remove('active'));
  tabPanels.forEach(panel => panel.classList.remove('active'));

  //Add active class to the clicked button and corresponding panel
  e.target.classList.add('active');
  document.getElementById(`tab-${targetTab}`).classList.add('active');
}

// attach click event to all tab buttons
tabButtons.forEach(button => button.addEventListener('click', switchTab));

function switchCallTab(e) {
  const callTab = e.target.dataset.tab;

  tabFunctions.forEach(button => button.classList.remove('active'));
  functionPanel.forEach(panel => panel.classList.remove('active'));

  e.target.classList.add('active');
  document.getElementById(`function-${callTab}`).classList.add('active');
}

tabFunctions.forEach(button => button.addEventListener('click', switchCallTab));
