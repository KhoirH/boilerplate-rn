import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Redux from '../redux/store';
import SplashScreen from '../modules/splash_screen';
import TabsNavitaion from './tabsNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const App: React.FC<{}> = () => {
  const [splash, setSpalsh] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpalsh(false);
    }, 1000);
  }, []);
  if (splash) {
    return <SplashScreen />;
  }
  return (
    <Provider store={Redux.store}>
      <PersistGate loading={null} persistor={Redux.persistor}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsNavitaion} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
