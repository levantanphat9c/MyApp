import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE_NAME} from '../RouteName';
import {ProfileStackParamList} from '../NavigationType';
import ProfileScreen from '@/Containers/ProfileScreen';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_NAME.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
