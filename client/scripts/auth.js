
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
  /*axios({
    method: 'post',
    url: url,
    dataType: 'jsonp',
    data: data
  });*/

  console.log(data);
  return axios.post(url, data);
}

// listen for auth status changes
auth.onAuthStateChanged(user => {
  // populate player list


  if(user) {
    // load current user
    const url = '/user/'+auth.currentUser.uid;
    let quests = '';

    // fill profile with user details
    getData(url)
    .then((response) => {
      currentUser = response.data;
      selectedUser = response.data;
      setupProfile(currentUser);
    });

    // fill quest data
    getData('/quest')
    .then((response) => {
      setupQuests(response.data);
    });
    getData('/user')
    .then((response) => {
      fillUsers(response.data);
    });
  }else {
    // don't display quests
    setupQuests([]);
    getData('/user')
    .then((response) => {
      fillUsers(response.data);
    });
  }
});

// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  // prevent page refresh
  e.preventDefault();
  // get user info
  const username = signupForm['signup-username'].value;
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    }).then( () => {
    auth.currentUser.getIdToken(/* forceRefresh */ false).then(function(idToken) {
      //console.log(idToken);
      // create user account in mongodb database
      let token = auth.currentUser.uid;
      console.log(token);
      let data = {"firebase_token" : token,
                  "username" : username,
                  "avatar_url": "",
                  "gold" : 100,
                  "playerKills" : 0,
                  "meleeUnits" : 1,
                  "rangedUnits" : 1,
                  "action_points": 20,
                  "level": 1,
                  "experience": 0};
      let url = '/user';
      sendDataByToken('/user','',data);
    }).catch(function(error) {
      // Handle error
    });
  });


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
