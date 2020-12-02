// BANKIST APP

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-11-25T14:11:59.604Z',
    '2020-11-28T17:01:17.194Z',
    '2020-11-29T23:36:17.929Z',
    '2020-11-30T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-11-27T14:43:26.374Z',
    '2020-11-25T18:49:59.371Z',
    '2020-11-30T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// +('any number in string format') =  Number('Any number in string format')

const formatMovementsDate = function(date, locale) {
  const calcDaysPassed = (date1, date2) => 
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  
  const dayPassed = calcDaysPassed(new Date(), date)

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days ago`;
  else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth()+ 1}`.padStart(2, 0) ;
  //   const year =  date.getFullYear();
  //   return `${day}/${month}/${year}`

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurr = function(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
};

const displayMovements = function(account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);
    displayDate = formatMovementsDate(date, account.locale);
  
    const formattedMov = formatCurr(mov, account.locale, account.currency);
    
    const html = `
      <div class="movements__row">
        <div class="movements__date">${displayDate}</div>
        
        <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `; 
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
};

const calcDisplayBalance =  function(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurr(account.balance, account.locale, account.currency);
};


const calcDisplaySummary = function(account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(incomes, account.locale, account.currency);

  const out = account.movements 
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(Math.abs(out), account.locale, account.currency);

  // We have a interest of 1.2% for each deposit (positive value)
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .filter((int, i, arr) => { // We just add the value, if interest is >= 1
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurr(interest, account.locale, account.currency);
};


const createUsername =  function(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
};
createUsername(accounts);

const updateUI = function(account) {
  //Display movements
  displayMovements(account);

  // Display balance
  calcDisplayBalance(account);

  //Display summary
  calcDisplaySummary(account);
};

const startLogoutTimer = function () {

  const tick = function() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if(time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started'
    }
    ;
    // Decrease one second
    time--;
  };

  // Set Time to 5 minutes
  let time = 300;

  // Call the timer every second
  // You have to call tick, in order to achieve that it starts at the time that you set.
  tick();
  // you call tick every second.
  const timer = setInterval(tick, 1000);
  return timer;
};

// Event Handler

// LOGIN 
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function(e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  // Optianal chaining, if the currentAccount existis then it looks for pin
  if(currentAccount?.pin === +(inputLoginPin.value)) {

    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', //'long' '2-digit'
      year: 'numeric', // '2-digit'
      // weekday: 'long', // 'short', 'narrow'
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)
    
    // Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth()+ 1}`.padStart(2, 0) ;
    // const year =  now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);;
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`
    
    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // to remove the click, to lose the focus on the pin field

    // Timer
    // This will clear the timer if a user log in before. 
    if (timer) clearInterval(timer);
    // If timer does not exists, then it is assisgned to the timer, that's why we return timer in startLogoutTimer.
    timer = startLogoutTimer();
    
    updateUI(currentAccount);
  };
});

// MAKE A TRANSFER 
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const ammount = +(inputTransferAmount.value);
  const receiverAcc = accounts
    .find(acc => acc.username === inputTransferTo.value);
  console.log(ammount, receiverAcc);

  if (
    ammount > 0 
    && receiverAcc 
    && ammount <= currentAccount.balance
    && receiverAcc.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-ammount);
    receiverAcc.movements.push(ammount);
    
    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
  inputTransferTo.value = inputTransferAmount.value = '';
});

// REQUEST A BANK LOAN
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    setTimeout(function() {
      // Add the movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }  
  inputLoanAmount.value = '';
  
  // Reset timer
  clearInterval(timer);
  timer = startLogoutTimer();
});


// DELETE AN ACCOUNT
btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value 
    && currentAccount.pin === +(inputClosePin.value)
  ) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted
});