import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={View} />
    </Navigator>
  );
}
