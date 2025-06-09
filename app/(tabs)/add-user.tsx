import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from 'react';
export default function AddUser() {
    const [userName, setUserName] = useState('');

    function handleAddUser() {
        alert(`Congratulations ${userName}, you are logged.`);
        setUserName('');
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={userName}
                onChangeText={setUserName}
                onSubmitEditing={handleAddUser}
                placeholder="User Name"
                returnKeyType="done"
            />
            <Button title="Add User" onPress={handleAddUser} disabled={!userName.trim()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        width: '80%',
        marginBottom: 16,
    },
})