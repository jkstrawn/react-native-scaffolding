/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { GestureResponderEvent, Text as DefaultText, TextStyle, View as DefaultView } from 'react-native';
import { Button as PaperButton, TextInput as PaperInput } from 'react-native-paper';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ButtonProps = ThemeProps & { title: string, onPress: (() => void) };
export type InputProps = ThemeProps & { label: string, style?: TextStyle };

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}


export function Button(props: ButtonProps) {
  return <PaperButton
    style={{
      backgroundColor: Colors.rosemarkPurple,
      borderRadius: 3,
    }}
    // containerStyle={{
    //   width: 200,
    //   marginHorizontal: 50,
    //   marginVertical: 10,
    // }}
    onPress={props.onPress}
  >
    {props.title}
  </PaperButton>
}

export function TextInput(props: InputProps) {
  return <PaperInput
    // leftIcon={props.icon}
    label={props.label}
    selectionColor={Colors.rosemarkPurple}
    style={{ color: 'white', ...props.style }}
    autoComplete={false}
  />
}