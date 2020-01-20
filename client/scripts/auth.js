/*axios({
  method: 'post',
  url: url,
  dataType: 'jsonp',
  data: data
});*/

let currentUser = '';
let selectedUser = '';

const getData = (route) => {
  return axios.get(route);
}

const getDataByToken = (route, token) => {
  const url = route + token;
  return axios.get(url);
}

const sendDataByToken = (route, token, data) => {
  const url = ''+route+token;
  return axios.post(url, data);
}

// listen for auth status changes
auth.onAuthStateChanged(user => {
  getData('/quest')
  .then((response) => {
    setupQuests(response.data);
  });


  // populate player list
  if(user) {
    // load current user
    const url = '/user/'+auth.currentUser.uid;
    let quests = '';

    // fill profile with user details
    //getData(url)
    //.then((response) => {
    //  currentUser = response.data;
    //  selectedUser = response.data;
    //  setupProfile(currentUser);
    //});

    // fill quest data

    //getData('/user')
    //.then((response) => {
    //  fillUsers(response.data);
    //});
  }else {
    // don't display quests
    //setupQuests([]);
    getData('/user')
    .then((response) => {
      fillUsers(response.data);
    });
  }
});

//signout
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
  document.location.reload();
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
