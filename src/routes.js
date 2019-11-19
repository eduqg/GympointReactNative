import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Sign from '~/pages/Sign';
import HelpOrders from '~/pages/HelpOrders';
import Checkin from '~/pages/Checkin';

// Switch navigator = apenas carrega uma página por vez
export default createAppContainer(
  createSwitchNavigator({
    Sign,
    HelpOrders,
    Checkin,
  })
);
