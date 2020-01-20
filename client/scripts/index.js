// const questList = document.querySelector('.quests');
// const userList = document.querySelector('.users');
// const profileList = document.querySelector('.profile');
// const commentDiv = document.querySelector('.comment');
// const DateTime = luxon.DateTime;
//
// // setup profile
// const setupProfile = (user) => {
//   let imgSrc = 'img/logo.png';
//   let html = '';
//   //const totalExperience = selectedUser.level * 100;
//   if(currentUser)
//   {
//     const profileHtml = `
//       <div style="
//           overflow: hidden;
//           after{
//           content:"";
//           display: table;
//           clear: both;}">
//         <div align="center">
//             <a href="#" class="black-text modal-trigger" data-target="modal-picture"><img class="circle" src="${imgSrc}"/></a>
//           <h4>${currentUser.username}</h4>
//         </div>
//     `;
//     html += profileHtml;
//   }else {
//     const profileHtml = `
//       <div style="
//           overflow: hidden;
//           after{
//           content:"";
//           display: table;
//           clear: both;}">
//         <div align="center">
//             <a href="#" class="black-text modal-trigger"><img class="circle" src="${imgSrc}"/></a>
//           <h4>${user.username}</h4>
//         </div>
//     `;
//     html += profileHtml;
//   }
//
//   const preMessageWall = `
//       <div style="float:left; width:50%; padding-bottom: 100%; margin-bottom:-100%;">
//         <table>
//           <tr>
//             <td><b>Level</b></td>
//             <td>${user.level}</td>
//           </tr>
//           <tr>
//             <td><b>Experience</b></td>
//             <td>${user.experience}</td>
//           </tr>
//           <tr>
//             <td><b>Action Points</b></td>
//             <td>${user.action_points}</td>
//           </tr>
//           <tr>
//             <td><b>Melee</b></td>
//             <td>${user.meleeUnits}</td>
//           </tr>
//           <tr>
//             <td><b>Ranged</b></td>
//             <td>${user.rangedUnits}</td>
//           </tr>
//           <tr>
//             <td><b>Player Kills</b></td>
//             <td>${user.playerKills}</td>
//           </tr>
//           <tr>
//             <td><b>Gold</b></td>
//             <td>${user.gold}</td>
//           </tr>
//         </table>
//       </div>
//       <div style="float:left; width:50%; padding-left:10px; padding-bottom: 100%; margin-bottom:-100%;">
//       <div id ="messageWall" style="overflow-y:scroll; height:320px">
//   `;
//   html += preMessageWall;
//   console.log(user.messages.length);
//   for(var i = 0; i < user.messages.length; i++){
//
//     let newTime = DateTime.fromISO(user.messages[i].date).toFormat("ff");
//     const message = `
//       <p>[${newTime}] <b>${user.messages[i].from}</b> said: "${user.messages[i].text}"</p>
//     `
//     html += message;
//   }
//
//   if(user)
//   {
//     const postMessageWall = `
//     </div>
//       <div class="center-align" style="padding-top:5%; padding-bottom:5%"><button class="btn blue lighten-2 z-depth-0" onclick="showCommentInput()" type="button">Comment</button></div>
//     </div>
//     `;
//     html += postMessageWall;
//   } else {
//     const postMessageWall = `
//     </div>
//       <div class="center-align" style="padding-top:5%; padding-bottom:5%"><button class="btn blue lighten-2 z-depth-0" type="button">Comment</button></div>
//     </div>
//     `;
//     html += postMessageWall;
//   }
//   profileList.innerHTML = html;
// }
//
// const showCommentInput = () => {
//   if(commentDiv.style.visibility == "hidden")
//   {
//     commentDiv.style.visibility = "visible";
//     commentDiv.style.display = "block";
//   }else {
//     commentDiv.style.visibility = "hidden";
//     commentDiv.style.display = "none";
//   }
// }
//
// const commentSubmit = document.querySelector("#comment-button");
// commentSubmit.addEventListener('click', (e) => {
//   e.preventDefault();
//   if(currentUser)
//   {
//     let comment = document.querySelector("#comment-text");
//
//     getDataByToken('/user/',selectedUser.firebase_token)
//     .then((response)=>{
//       console.log(response.data);
//       console.log(response.data.firebase_token);
//       let data = {"messages": {
//         "from": currentUser.username,
//         "text": comment.value
//       }};
//       let url = '/user/'+response.data.firebase_token;
//       axios.put(url, data);
//       comment.value = '';
//       setupProfile(response.data)
//     });
//   }
//
// });
//
// //setup quests
// const setupQuests = (data) => {
//   // logged in
//   if(data.length)
//   {
//     let html = '';
//     for(var i = 0; i < data.length; i++)
//     {
//       const quest = data[i];
//       const li = `
//           <b>${quest.name}</b></br>
//           ${quest.description}</br>
//           <span>Required Melee: ${quest.requiredMelee}.</span>
//           <span>Required Range: ${quest.requiredRange}.</span>
//           <span>Reward: ${quest.goldReward}.</span>
//           <button class="btn blue lighten-2 z-depth-0" onclick='doQuest(${quest.requiredMelee},
//                                                                         ${quest.requiredRange},
//                                                                         ${quest.goldReward},
//                                                                         ${quest.experienceReward},
//                                                                         ${quest.requiredAction})'
//           type="button">Start Quest</button>
//       `;
//       html += li;
//     }
//
//     questList.innerHTML = html;
//   } else {
//     // logged out
//     questList.innerHTML = '<h5 class="center-align">Login to view quests</h5>';
//   }
// }
//
// const fillUsers = (users) =>
// {
//   let html = '';
//   // sort so most kills are at the top
//   users.sort((a,b) => (a.playerKills > b.playerKills ? 1 : -1));
//   const preTable = `<table>`;
//   html+=preTable;
//   for(var i = 0; i < users.length; i++)
//   {
//     const user = users[i];
//     if(!currentUser){
//       const li = `
//           <tr>
//           <td>${user.username}</td>
//           <td><button class="btn blue lighten-2 z-depth-0" onclick='viewPlayer("${user.firebase_token}")'type="button">View</button></td>
//           </tr>
//       `;
//       html += li;
//     }
//     // make sure it doesn't display the current user
//     else if(user.firebase_token != currentUser.firebase_token){
//       const li = `
//           <tr>
//           <td>${user.username}</td>
//           <td><button class="btn blue lighten-2 z-depth-0" onclick='attackPlayer("${user.firebase_token}")' type="button">Attack</button></td>
//           <td><button class="btn blue lighten-2 z-depth-0" onclick='viewPlayer("${user.firebase_token}")'type="button">View</button></td>
//           </tr>
//       `;
//       html += li;
//     }
//   }
//   const postTable = `</table`;
//   html+=postTable;
//
//   userList.innerHTML = html;
// }
//
// // setup shop
// const setUpShop = () => {
//   let html = '';
//   let li = '';
// }
//
// const attackPlayer = (uid) => {
//   //let otherPlayer = getDataByToken(dbUserSettings,"/"+uid);
//   let url = '/user/'+uid;
//   axios.get(url)
//   .then((response) => {
//     let otherPlayer = response.data;
//     let attackResult = determineWinner(currentUser.meleeUnits, currentUser.rangedUnits,
//                                     otherPlayer.meleeUnits, otherPlayer.rangedUnits);
//
//       console.log(attackResult);
//       if(attackResult == true){
//         let currentGold = currentUser.gold;
//         let currentExperience = currentUser.experience;
//         let currentAction = currentUser.action_points;
//
//         currentGold += 10;
//         currentAction -= 2;
//         currentExperience += 10;
//
//         let data = {"firebase_token":currentUser.firebase_token,
//                     "gold" : currentGold,
//                     "action_points": currentAction,
//                     "experience" : currentExperience};
//         let url = '/user/'+currentUser.firebase_token;
//         axios.put(url, data);
//
//       }else {
//         // randomly kill some units
//       }
//   });
//   // get result
//
//
//
//
// }
//
// const viewPlayer = (uid) => {
//   getDataByToken('/user/',uid)
//   .then((response) => {
//     selectedUser = response.data;
//     setupProfile(selectedUser);
//     let instance = M.Collapsible.getInstance(document.querySelectorAll('.collapsible')[0]);
//     instance.open(0);
//   })
// }
//
// const doQuest = (requiredMelee, requiredRanged, goldReward, experienceReward, requiredAction) => {
//   let currentGold = currentUser.gold;
//   let currentExperience = currentUser.experience;
//   let currentAction = currentUser.action_points;
//   let currentMelee = currentUser.meleeUnits;
//   let currentRanged = currentUser.rangedUnits;
//   // current(M,R) v required(M,R)
//   let questResult = determineWinner(currentMelee,currentRanged,requiredMelee,requiredRanged);
//
//   if(questResult == true) {
//     currentGold += goldReward;
//     currentAction -= requiredAction;
//     currentExperience += experienceReward;
//
//     let data = {"firebase_token":currentUser.firebase_token,
//                 "gold" : currentGold,
//                 "action_points": currentAction,
//                 "experience" : currentExperience};
//     let url = '/user/'+currentUser.firebase_token;
//     axios.put(url, data);
//     //sendDataByToken(data,dbUserSettings,"/"+currentUser.firebase_token);
//   } else {
//     // randomly kill some units, let the player know they failed
//   }
//   getUserAgain();
//   let instance = M.Collapsible.getInstance(document.querySelectorAll('.collapsible')[0]);
//   instance.open(0);
// }
//
// const determineWinner = (currentMelee,currentRanged,requiredMelee,requiredRanged) => {
//   let result = false;
//   let diff = 0, percentage = 0, successRate = 0, random = 0;
//   if(requiredMelee > currentMelee){
//     diff = requiredMelee - currentMelee;
//     percentage = 10 * diff;
//     successRate = 100 - percentage;
//     random = Math.random() * (100 - 1) + 1;
//     if(random <= successRate){
//       result = true;
//     } else {
//       result = false;
//     }
//   }
//   if(requiredRanged > currentRanged){
//     diff = requiredRanged - currentRanged;
//     percentage = 10 * diff;
//     successRate = 100 - percentage;
//     random = Math.random() * (100 - 1) + 1;
//     if(random <= successRate){
//       result = true;
//     } else {
//       result = false;
//     }
//   }
//   if(currentMelee >= requiredMelee && currentRanged >= requiredRanged) {
//     result = true;
//   }
//   return result;
// }
//
// const handleLevelUp = (user) => {
//   let data = '';
//   if(user.experience > (user.level*100))
//   {
//     let newLevel = user.level+1;
//     data = {"firebase_token":user.firebase_token,
//             "level" : newLevel,
//             "experience" : 0};
//     sendDataByToken(data,dbUserSettings,"/"+user.firebase_token);
//   }
//   return getDataByToken(dbUserSettings, "/"+user.firebase_token);
// }
//
// const getUserAgain = () => {
//   currentUser = getDataByToken(dbUserSettings, "/"+auth.currentUser.uid);
//   //currentUser = handleLevelUp(currentUser);
//   setupProfile(currentUser);
//   commentDiv.style.visibility = "hidden";
//   commentDiv.style.display = "none";
// }
//
document.addEventListener('DOMContentLoaded', function() {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});
