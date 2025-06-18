import {
    TextInput,
    TextInputProps,
    StyleSheet,
    ViewStyle,
} from 'react-native';

import { Spacing, Colors, Radius } from '../theme';

type Props = TextInputProps &{
    containerStyle?: ViewStyle,
};

export default function StandardTextField({ style, containerStyle, ...rest }: Props){
    return(
        <TextInput
            style={[styles.input, style]}
            placeholderTextColor={Colors.border}
            {...rest}
        />
    );
}
const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    padding: Spacing.sm,
    marginBottom: Spacing.md,
    color: Colors.text,
  },
});