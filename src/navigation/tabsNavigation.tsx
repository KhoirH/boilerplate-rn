import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {GetIcon} from '../public/helpers/icon/iconHelper';
import {Text, StyleSheet} from 'react-native';
import ExampleNavigation from './exampleNavigation';

const Tab = createBottomTabNavigator();

const TabsNavigation: React.FC<{}> = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => {
        const name = route.name.split('Tab').join('');
        return {
          tabBarIcon: ({focused, color}) => {
            const getIcon = GetIcon(name, focused);
            return <Icon name={getIcon} size={14} color={color} />;
          },
          tabBarLabel: ({focused, color}) => {
            if (focused) {
              return <Text style={[{color}, styles.fontLabel]}>{name}</Text>;
            }
            return null;
          },
        };
      }}
      tabBarOptions={{
        activeTintColor: '#03a9f4',
        inactiveTintColor: 'gray',
        style: {
          height: 70,
          paddingVertical: 5,
        },
        allowFontScaling: true,
      }}
      lazy={true}>
      <Tab.Screen name="HomeTab" component={ExampleNavigation} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  fontLabel: {
    paddingBottom: 10,
  },
});
export default React.memo(TabsNavigation);
