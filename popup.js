let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = 'red';
    changeColor.setAttribute('value', 'red');
  });