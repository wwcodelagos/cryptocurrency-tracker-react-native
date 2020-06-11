const URL = 'http://api.coincap.io/v2/assets';

const getRequest = () => {
  const getData = fetch(URL)
  .then(response => response.json())
  .then(data => data)
  return getData
}

export default getRequest

