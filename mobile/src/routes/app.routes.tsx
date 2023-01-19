import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Habit } from '../screens/Habit';
import { Home } from '../screens/Home';
import { New } from '../screens/New';

export function AppRoutes() {

  const routers = {
    home: Home,
    new: New,
    habit: Habit
  }


  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {
        Object.entries(routers).map(([name, component]) => <Screen
          key={name}
          name={name}
          component={component}
        />)
      }
    </Navigator>
  )
}