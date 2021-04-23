import React from 'react';
import ProthomAloLandingPage from './components/prothomAloLandingPage';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import "./App.scss"

dayjs.extend(relativeTime)

function App() {
  return (
    <div className="App">
      <ProthomAloLandingPage/>
    </div>
  );
}

export default App;
