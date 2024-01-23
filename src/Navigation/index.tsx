import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabStack from './Stack/TabStack';
import SettingScreen from '@/Containers/SettingScreen';
import ModalScreen from '@/Containers/ModalScreen';
import {ROUTE_NAME} from './RouteName';
import {RootStackParamList} from './NavigationType';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTE_NAME.BOTTOM_TAB}
          component={TabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAME.SETTING_SCREEN}
          component={SettingScreen}
        />

        {/* Common ModalSlideFromBottomIOS */}
        <Stack.Group
          screenOptions={{presentation: 'modal', headerShown: false}}
          navigationKey="Modal">
          <Stack.Screen
            name={ROUTE_NAME.MODAL_SCREEN}
            component={ModalScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
