import { useState } from 'react';
import testPng from '../assets/test.png';
// import testSvg from '../assets/react.svg';
// import { ReactComponent as TestSvgComponent } from '../assets/react.svg';
import SignIn from '@/pages/SignIn/SignIn';

const App = ({ message: initialMessage }) => {
  const [message] = useState(initialMessage ?? 'hello React *^^*');

  //❤️
  return (
    <div className="App">
      <SignIn />
    </div>
  );
};

export default App;
