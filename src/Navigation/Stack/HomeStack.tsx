import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '@/Containers/HomeScreen';
import {ROUTE_NAME} from '../RouteName';
import {HomeStackParamList} from '../NavigationType';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE_NAME.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
