import {StyleSheet} from 'react-native';
import {TEXT_TYPE} from './type';

const textStyle = StyleSheet.create({
  [TEXT_TYPE.BODY]: {
    fontSize: 16,
    fontWeight: '500',
  },
  [TEXT_TYPE.BUTTON_1]: {
    fontSize: 16,
    fontWeight: '700',
  },
  [TEXT_TYPE.BUTTON_2]: {
    fontSize: 14,
    fontWeight: '600',
  },
  [TEXT_TYPE.HEADING_1]: {
    fontSize: 32,
    fontWeight: '600',
  },
  [TEXT_TYPE.HEADING_2]: {
    fontSize: 24,
    fontWeight: '700',
  },
  [TEXT_TYPE.HEADING_3]: {
    fontSize: 20,
    fontWeight: '600',
  },
  [TEXT_TYPE.HEADING_4]: {
    fontSize: 18,
    fontWeight: '700',
  },
  [TEXT_TYPE.TITLE_1]: {
    fontSize: 16,
    fontWeight: '600',
  },
  [TEXT_TYPE.TITLE_2]: {
    fontSize: 12,
    fontWeight: '700',
  },
});

export default textStyle;
