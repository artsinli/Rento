import { View, ViewStyle, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

type Props = {
    style?: ViewStyle,
    children: ReactNode,
}
/**
 * A default container with a center alignment,
 * @param param0 
 * @returns 
 */
export function CenterContainer({children, style}: Props){
    return(
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});