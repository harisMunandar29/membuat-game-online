console.info('hello');

window.onload = () => {
  renderUser();
};

// render user
function renderUser() {
  let user_username = document.getElementById('user_username');
  let user_money = document.getElementById('user_money');

  let userData = localStorage.getItem('pakong_user');

  // jika user belum ada
  if (!userData) {
    window.location.href = '/';
  }

  userData = JSON.parse(userData);

  user_username.innerHTML = userData.username;
  user_money.innerHTML = 'Rp' + userData.money;
}

// select binatang

let select_image = document.querySelectorAll('.select_image');

// add click image
select_image.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    selectBinatang(event);
  });
});

// function select binatang

function selectBinatang(event) {
  // console.info(event.target.id);
  localStorage.setItem('selected_binatang', event.target.id);
}

//pilih taruhan

let taruhan = document.getElementById('taruhan');
let totalTaruhan;

taruhan.oninput = (event) => {
  totalTaruhan = parseInt(event.target.value);
};

// mulai bermain
let play = document.getElementById('play');
play.onclick = () => {
  if (!totalTaruhan || totalTaruhan == undefined) {
    return false;
  }

  let arrayBinatang = ['Ular', 'Macan', 'Kambing', 'Burung'];
  let randomNumber = Math.floor(Math.random() * arrayBinatang.length);
  let winner = arrayBinatang[randomNumber];
  let modal = document.getElementById('modal');
  let result_status = document.getElementById('result_status');
  let result_money = document.getElementById('result_money');

  let selectedBinatang = localStorage.getItem('selected_binatang');
  let userData = JSON.parse(localStorage.getItem('pakong_user'));

  if (userData.money < totalTaruhan) {
    return alert('Mohon maaf uang anda tidak cukup, silahkan top up');
  }
  // show modal
  modal.style.display = 'flex';

  // jika player menang
  showWinnerBinatang(winner);

  // jika menang
  if (selectedBinatang == winner) {
    userData.money += totalTaruhan;

    // set modal status
    result_status.innerHTML = 'Menang';
    result_money.innerHTML = totalTaruhan;

    // update data
    localStorage.setItem('pakong_user', JSON.stringify(userData));
    renderUser();
    return;
  }

  //jika kalah
  userData.money -= totalTaruhan;

  // set modal status
  result_status.innerHTML = 'Kalah';
  result_money.innerHTML = totalTaruhan;

  localStorage.setItem('pakong_user', JSON.stringify(userData));
  renderUser();

  // console.info(winner[randomNumber]);
  // alert('Silakan Coba lagi...., yang keluar ' + winner);
};

// show binatang
function showWinnerBinatang(binatang) {
  let modal_image = document.getElementById('modal_image');

  switch (binatang) {
    case 'Ular':
      modal_image.src =
        'https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1';
      return;
    case 'Kambing':
      modal_image.src =
        'https://images.pexels.com/photos/86594/goat-animal-horns-black-and-white-86594.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1';
      return;
    case 'Macan':
      modal_image.src =
        'https://images.pexels.com/photos/302304/pexels-photo-302304.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1';
      return;
    case 'Burung':
      modal_image.src =
        'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1';
      return;
  }
}

// button back
let btn_back = document.getElementById('btn_back');

btn_back.addEventListener('click', () => {
  window.location.reload();
});

// button menu toggle

let menu_toggle = document.getElementById('menu_toggle');
menu_toggle.addEventListener('click', () => {
  let main_menu = document.getElementById('main_menu');

  if (main_menu.style.display == 'none') {
    main_menu.style.display = 'flex';
    return;
  }
  main_menu.style.display = 'none';

  console.log(main_menu);
});
