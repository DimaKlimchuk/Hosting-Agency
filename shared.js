var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNotButton = document.querySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function () {
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNotButton) {
  modalNotButton.addEventListener('click', closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
