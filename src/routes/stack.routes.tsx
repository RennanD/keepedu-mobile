import { createStackNavigator } from '@react-navigation/stack';
import { Classes } from '../screens/Classes';
import { Contents } from '../screens/Contents';

import { Disciplines } from '../screens/Disciplines';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Courses: undefined;
      Disciplines: {
        course_period_id: string;
        course_title: string;
      };
      Contents: {
        course_discipline_id: string;
        discipline_title: string;
      };
      Classes: {
        content_id: string;
      };
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
      <Screen name="Contents" component={Contents} />
      <Screen name="Classes" component={Classes} />
    </Navigator>
  );
}
