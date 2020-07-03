import React from 'react';
import './App.scss';

// component imports
import Image from './Image/Image';

// other imports
import profile from '../../public/images/profile.jpg';

const App = () => {
  return (
    <div>
      <span>Hello World</span>
      <Image 
        src={profile}
        alt="hero"
        height="400"
        width="400"
      />
    </div>
  );
};

export default App;
