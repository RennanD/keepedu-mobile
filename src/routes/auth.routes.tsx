import { createStackNavigator } from '@react-navigation/stack';

import { Intro } from '../screens/Intro';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      Intro: undefined;
    }
  }
}

export function AuthRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Intro" component={Intro} />
    </Navigator>
  );
}
