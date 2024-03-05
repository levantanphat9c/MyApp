import withMemo from '@/HOC/withMemo';
import React, {useMemo} from 'react';
import {TextProps} from 'react-native';
import {TEXT_TYPE} from './type';
import textStyle from './styles';
import ParsedText, {ParseShape} from 'react-native-parsed-text';
import {isNilOrEmpty} from 'ramda-adjunct';
import Animated, {AnimatedProps} from 'react-native-reanimated';

interface IProps
  extends TextProps,
    Pick<AnimatedProps<TextProps>, 'entering' | 'exiting' | 'layout'> {
  type?: keyof typeof TEXT_TYPE;
  color?: string;
  parse?: ParseShape[];
}

const AppText = (props: IProps) => {
  const {
    children,
    type = 'BODY',
    color = 'black',
    parse,
    style,
    ...rest
  } = props;

  const finalStyle = useMemo(() => {
    return {
      style,
      color,
      ...textStyle[type],
    };
  }, []);

  const isParse = isNilOrEmpty(parse);

  const TextComponent = isParse ? ParsedText : Animated.Text;

  return (
    <TextComponent
      {...rest}
      style={finalStyle}
      allowFontScaling={false}
      parse={parse}>
      {children}
    </TextComponent>
  );
};

export default withMemo(AppText);
