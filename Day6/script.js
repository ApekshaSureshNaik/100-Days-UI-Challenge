let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.left-part');

btn.onclick = function () {
   sidebar.classList.toggle('active');
};