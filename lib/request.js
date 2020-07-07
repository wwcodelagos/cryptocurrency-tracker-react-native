const URL = 'http://api.coincap.io/v2/assets';

export const getRequest = () => {
  const getData = fetch(URL)
  .then(response => response.json())
  .then(data => data.data)
  return getData
};

export const getHistoryData = (coinId) => {
  const getData = fetch(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`)
  .then(response => response.json())
  .then(data => data.data
  )
  return getData
};