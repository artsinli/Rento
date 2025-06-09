import { StyleSheet, Text, View } from 'react-native';

export default function About(){
    return(
        <View style={styles.container}>
            <Text>This is my first app.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    }
})
   