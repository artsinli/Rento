// GOAL
// To have a simple view window element for a person, and their respective wealth/monetary value
import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { Colors, Spacing, Radius } from '../theme';

type Props = PressableProps & {
  label: string,
  parentStyle?: ViewStyle
  buttonStyle?: ViewStyle,
  labelStyle?: TextStyle,
}

export default function StandardPressable({
  label,
  parentStyle,
  buttonStyle,
  labelStyle,
  ...rest //all the props from the rest of the pressableprops type
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        parentStyle,
        buttonStyle,
        pressed ? styles.pressed : null,
        rest.disabled ? styles.disabled : null,
      ]}
      {...rest}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    backgroundColor: '#aaa',
  },
  label: {
    color: Colors.text,
    textAlign: 'center',
    fontWeight: '600',
  },
});