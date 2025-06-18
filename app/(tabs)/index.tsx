import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Listing from '@features/listings/ListingDetails'
import { RateType, ListingParams, User } from '@/src/commonlib';
//TODO - Divide my (tabs) files into modular components.
//TODO - Comment all my components and code.

export default function App() {
  
  // Hello world equivalent of my listing details class.4
  let HelloListing = new Listing({
    owner: { name: "Terry"},
    price: 2222,
    rateType: RateType.DAILY,
  })

  return (
    <View style={styles.container}>
      <Text>{HelloListing.DisplayListing()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
