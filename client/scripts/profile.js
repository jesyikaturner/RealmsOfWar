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

const userList = document.querySelector('.users');

export const fillUsers = (currentUser, users) =>
{
  console.log(users);
  let html = '';
  // sort so most kills are at the top
  users.sort((a,b) => (a.totalPlayerKills > b.totalPlayerKills ? 1 : -1));
  const preTable = `<table>`;
  html+=preTable;
  for(var i = 0; i < users.length; i++)
  {
    const user = users[i];
    if(!currentUser){
      const li = `
          <tr>
          <td>${user.username}</td>
          <td><button class="btn blue lighten-2 z-depth-0" onclick='#("${user.firebase_token}")'type="button">View</button></td>
          </tr>
      `;
      html += li;
    }
    // make sure it doesn't display the current user
    else if(user.firebase_token != currentUser.firebase_token){
      const li = `
          <tr>
          <td>${user.username}</td>
          <td><button class="btn blue lighten-2 z-depth-0" onclick='#("${user.firebase_token}")' type="button">Attack</button></td>
          <td><button class="btn blue lighten-2 z-depth-0" onclick='#("${user.firebase_token}")'type="button">View</button></td>
          </tr>
      `;
      html += li;
    }
  }
  const postTable = `</table`;
  html+=postTable;

  userList.innerHTML = html;
}