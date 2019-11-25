import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import SplitsScreen from './screens/SplitsScreen';
import PopularGamesScreen from './screens/PopularGamesScreen';

const SplitsStack = createStackNavigator(
  {
    Splits: SplitsScreen,
  },
);

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Splits: SplitsStack ,
    PopularGames: PopularGamesScreen,
  },
  {
    initialRouteName: 'Splits',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

export default createAppContainer(AppNavigator);