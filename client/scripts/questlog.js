import {
    sendDataByToken,
    convertObjectToString
  } from './shared.js';

const questList = document.querySelector('.quests');
let currentUser = null;

// going to randomly select a number of quests based on level of player to display.
const setupRandomQuests = (data) =>
{

}

//setup quests
export const setupQuests = (user, data) => {
    currentUser = user;
  // logged in
  if(data.length)
  {
    let html = '';
    for(var i = 0; i < data.length; i++)
    {
      let quest = data[i];
      let li = `
        <b>${quest.name}</b></br>
        ${quest.description}</br>
        <span>Required Player Level: ${quest.required[0].playerLevel}.</span>
        <span>Required Action Points: ${quest.required[0].playerActionPoints}.</span>
        <span>Required Total Units: ${quest.required[0].totalUnits}.</span>
        <span>Gold Reward: ${quest.reward[0].gold}.</span>
        <span>Unit Experience Reward: ${quest.reward[0].totalUnitExperience}.</span>
        <button id= "${quest.id}" class="btn blue lighten-2 z-depth-0">Start Quest</button>
        <br>
      `;
      html += li;
    }
    questList.innerHTML = html;
  } else {
    questList.innerHTML = '<h5 class="center-align">Login to view quests</h5>';
  }
}

export const doQuest = (user, questID) =>
{
  console.log(questID);
    let data = [{
        token: user,
        qid: questID
    }];
    sendDataByToken('/performQuest','',data)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
}

questList.addEventListener('click', (e) => {
    // adding event listeners to the button themselves, just executes them instantly
    // this will execute the doQuest function when clicking on the buttons
    if(e.target && e.target.tagName == "BUTTON")
    {
        if(currentUser)
        {
            doQuest(currentUser.uid, e.target.id);
        }
    }
});