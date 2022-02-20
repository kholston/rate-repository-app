import React from 'react';
import { Platform } from 'react-native';

const MyComponent = Platform.select({
  ios: {/* require(IOSComponentFileName) */},
  android:{/* require(AndriodComponentFileName) */},
})();

<MyComponent/>

/*
  Also use of .ios.jsx or .android.jsx can be 
  detected by bundler
*/

/* import Button from './Button */

const PlatformSpecificButton = () => {
  return(
    null
    /* <Button /> */
  )
};

<PlatformSpecificButton/>