import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
    TextStyle,
    ViewStyle,
} from 'react-native';

import { Colors, Spacing, Radius } from '../theme';

type Props = TouchableOpacityProps & {
    label: string,
    buttonStyle?: ViewStyle,
    labelStyle?: TextStyle,
}

export function Button({
    label,
    style,
    buttonStyle,
    labelStyle,
    ...rest
}: Props){
  return(
    <TouchableOpacity
        style={[styles.button, buttonStyle, style]}
        {...rest}
    >
        <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
} 

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.md,
  },
  label: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});