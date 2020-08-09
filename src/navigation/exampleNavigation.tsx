import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExampleScreen from '../modules/example_screen';
const Stack = createStackNavigator();

const HomeNavigation: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Home'}}
        name="ExampleScreen"
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
