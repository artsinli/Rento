import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import StandardTextField from '@/src/components/StandardTextField';
import StandardPressable from '@/src/components/StandardPressable';

export default function AddUser() {
  const [userName, setUserName] = useState('');
  // A function used for 
  function handleAddUser() {
    if (!userName.trim()) return;
    alert(`Congratulations ${userName}, you are logged.`);
    setUserName('');
  }

  return (
    <View style={styles.container}>
      <Text>Please input your username.</Text>
      <StandardTextField
        value={userName}
        onChangeText={setUserName}
        placeholder="User Name"
        returnKeyType="done"
        onSubmitEditing={handleAddUser}
      />
      <StandardPressable
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
    backgroundColor: '#bdf0cb'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

