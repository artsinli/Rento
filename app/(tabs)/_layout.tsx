import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="AddUser" options={{ title: 'Add User'}} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
    </Tabs>
  );
}
