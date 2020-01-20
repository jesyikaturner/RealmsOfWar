const newUserData =
{
    "firebase_token": 'empty',
    "username": 'empty',
    "level": 1,
    "experience": 0,
    "actionPoints": 20,
    "totalPlayerKills": 0,
    "gold": 100
};

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
      let data = newUserData.slice();
      data.firebase_token = token;
      data.username = username;
      let url = '/user';
      sendDataByToken('/user','',data);
    }).catch(function(error) {
      // Handle error
    });
  });
});
