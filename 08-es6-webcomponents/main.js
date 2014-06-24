require('platform/platform');

require('./normalize.css');
require('./styles.css');

window.onload = function () {
  let inp = document.querySelector('#username');
  let frm = document.querySelector('#create-card');
  let output = document.querySelector('#cards');

  frm.addEventListener('submit', function (event) {
    var user = inp.value,
      github;
    event.preventDefault();
    if (user === '') {
      return false;
    }
    github = document.createElement('github-card');
    github.setAttribute('user', user);
    output.innerHTML = '';
    output.appendChild(github);
  }, true);
};
