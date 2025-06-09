import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Listing from '@features/listings/ListingDetails'
import { RateType, ListingParams, User } from 'features/commonl-lib';

export default function App() {
  
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
