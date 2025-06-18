import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextField } from '../../src/components/TextField';
import { Button } from '../../src/components/Button';

export default function AddUser() {
  const [userName, setUserName] = useState('');

  function handleAddUser() {
    if (!userName.trim()) return;
    Alert.alert('User Added', `Congratulations ${userName}!`);
    setUserName('');
  }

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      {/* <TextField
        value={userName}
        onChangeText={setUserName}
        placeholder="User Name"
        returnKeyType="done"
        onSubmitEditing={handleAddUser}
      /> */}
      <Button
        label="Add User"
        onPress={handleAddUser}
        disabled={!userName.trim()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overrideButton: {
    width: '50%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

