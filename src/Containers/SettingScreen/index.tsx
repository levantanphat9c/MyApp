import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
