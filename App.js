import React, { useEffect } from 'react';
import AppNavigator from './AppNavigator';
import getRequest from './lib/request'

function App() {
  useEffect(() => {
    getRequest()
      .then(data => console.log(data))
  }, [])

  return (
    <AppNavigator />
  );
}

export default App;