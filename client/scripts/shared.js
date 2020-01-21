export const getData = (route) => {
  return axios.get(route);
}

export const sendDataByToken = (route, token, data) => {
  const url = ''+route+token;
  return axios.post(url, data);
}

// for some reason mongodb has arrays of objects, so a string of 10 is [0][0] = 1, [0][1] = 0.
// this function will convert it into a string
export const convertObjectToString = (data) =>
{
  let temp = '';
  for(var index = 0; index < Object.keys(data).length; index++)
  {
    temp += data[index];
  }
  return temp;
}

/*axios({
  method: 'post',
  url: url,
  dataType: 'jsonp',
  data: data
});*/
