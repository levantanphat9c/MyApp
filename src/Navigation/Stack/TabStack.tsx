import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTE_NAME} from '../RouteName';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import {TabStackParamList} from '../NavigationType';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack = () => {
  console.log('TabStack');
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={ROUTE_NAME.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={ROUTE_NAME.PROFILE_STACK} component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabStack;
