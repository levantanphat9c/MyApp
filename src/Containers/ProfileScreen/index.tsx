import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {ROUTE_NAME} from '@/Navigation/RouteName';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTE_NAME.MODAL_SCREEN);
        }}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
