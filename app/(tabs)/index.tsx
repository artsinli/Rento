import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Listing from '@features/listings/ListingDetails'
import { RateType } from '@/src/commonlib';
import ListingMiniViewWindow from '@/src/components/ListingMiniViewWindow';


export default function App() {
  
  const listings = [
    new Listing({
      owner: { name: "Terry" },
      price: 2222,
      rateType: RateType.DAILY,
    }),
    new Listing({
      owner: { name: "Alex" },
      price: 3500,
      rateType: RateType.DAILY,
    }),
    new Listing({
      owner: { name: "Sam" },
      price: 1200,
      rateType: RateType.DAILY,
    }),
  ];

  // 2) convert it into an array for FlatList
  const data = listings.map((listing, index) => ({
    key: index.toString(),
    listing,
  }));

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <ListingMiniViewWindow listing={item.listing}/>
      )}
      ListHeaderComponent={<StatusBar style="auto" />}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 6,
  },
  value: {
    flex: 1,
  },
});