import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {ROUTE_NAME} from '@/Navigation/RouteName';
import {HomeStackScreenProps} from '@/Navigation/NavigationType';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {CounterActions, CounterReducerSelectors} from '@/ReduxSaga/Counter';

const HomeScreen = ({
  navigation,
}: HomeStackScreenProps<ROUTE_NAME.HOME_SCREEN>) => {
  const value = useSelector(CounterReducerSelectors.selectCount);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(CounterActions.incrementSaga());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTE_NAME.SETTING_SCREEN, {
            userId: '123',
          });
        }}>
        <Text>Go to Setting Screen</Text>
        <Text>{Config.API_URL}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onIncrement}>
        <Text>Increment</Text>
        <Text>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
