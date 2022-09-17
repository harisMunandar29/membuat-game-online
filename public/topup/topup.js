let form_topup = document.getElementById('form_topup');
form_topup.addEventListener('submit', (event) => {
  // stop reload
  event.preventDefault();

  let nominal = event.target.nominal.value;
  let pakong_user = JSON.parse(localStorage.getItem('pakong_user'));

  // add money
  pakong_user.money = parseInt(pakong_user.money) + parseInt(nominal);

  // update local storage
  localStorage.setItem('pakong_user', JSON.stringify(pakong_user));

  window.location.href = '/dashboard';
});
