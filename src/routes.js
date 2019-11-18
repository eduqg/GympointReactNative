import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Sign from '~/Sign';
import Checkin from '~/Checkin';

// Switch navigator = apenas carrega uma página por vez
export default createAppContainer(
  createSwitchNavigator({
    Sign,
    Checkin,
  })
);
