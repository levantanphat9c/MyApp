import {ROUTE_NAME} from './RouteName';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';

export type RootStackParamList = {
  [ROUTE_NAME.BOTTOM_TAB]: undefined;
  [ROUTE_NAME.SETTING_SCREEN]: {userId: string};
  [ROUTE_NAME.MODAL_SCREEN]: {sort: 'latest' | 'top'} | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeStackParamList = {
  [ROUTE_NAME.HOME_SCREEN]: undefined;
} & RootStackParamList;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

export type ProfileStackParamList = {
  [ROUTE_NAME.PROFILE_SCREEN]: undefined;
} & RootStackParamList;

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  NativeStackScreenProps<ProfileStackParamList, T>;

export type TabStackParamList = {
  [ROUTE_NAME.HOME_STACK]: undefined;
  [ROUTE_NAME.PROFILE_STACK]: undefined;
};
