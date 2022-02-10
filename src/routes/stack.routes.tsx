import { createStackNavigator } from '@react-navigation/stack';

import { Disciplines } from '../screens/Disciplines';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Courses: undefined;
      Disciplines: undefined;
    }
  }
}

export function StackRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeStack" component={Home} />
      <Screen name="Disciplines" component={Disciplines} />
    </Navigator>
  );
}