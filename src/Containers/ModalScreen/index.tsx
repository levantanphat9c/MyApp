import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const ModalScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>This is Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalScreen;
