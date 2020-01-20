const questList = document.querySelector('.quests');

// for some reason mongodb has arrays of objects, so a string of 10 is [0][0] = 1, [0][1] = 0.
// this function will convert it into a string
const convertObjectToString = (data) =>
{
  let temp = '';
  for(var index = 0; index < Object.keys(data).length; index++)
  {
    temp += data[index];
  }
  return temp;
}

//setup quests
const setupQuests = (data) => {
  // logged in
  if(data.length)
  {
    let tempData = data;
    let html = '';
    for(var i = 0; i < data.length; i++)
    {
      let quest = data[i];
      let li = `
          <b>${quest.name}</b></br>
          ${quest.description}</br>
          <span>Required Player Level: ${convertObjectToString(quest.required[0])}.</span>
          <span>Required Action Points: ${convertObjectToString(quest.required[1])}.</span>
          <span>Required Total Units: ${convertObjectToString(quest.required[3])}.</span>
          <span>Gold Reward: ${convertObjectToString(quest.reward[0],quest.reward[0])}.</span>
          <span>Unit Experience Reward: ${convertObjectToString(quest.reward[1],quest.reward[1])}.</span>
      `;
      html += li;
    }

    questList.innerHTML = html;
  }
}

//          <button class="btn blue lighten-2 z-depth-0" onclick='doQuest(${quest.requiredMelee},
//                                                                        ${quest.requiredRange},
//                                                                        ${quest.goldReward},
//                                                                        ${quest.experienceReward},
//                                                                        ${quest.requiredAction})'
//          type="button">Start Quest</button>
