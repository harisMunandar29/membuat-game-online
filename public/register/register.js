// tangkpa form
let form_register = document.getElementById('form_register');

// tambahkan event listener
form_register.onsubmit = (event) => {
  event.preventDefault();

  let username = event.target.username.value;
  let money = event.target.money.value;

  // set money to integer

  if (!username || !money) {
    return alert('Sialakan isi data dengan benar');
  }

  if (money < 10000) {
    return alert('Masukan minimal 10.000');
  }

  // console.info({ username, money });

  // generate object for use
  let userData = {
    id: Date.now(),
    username: username,
    money: money,
  };

  // set localstorager for pakong_user
  localStorage.setItem('pakong_user', JSON.stringify(userData));

  window.location.href = '/dashboard';
};
