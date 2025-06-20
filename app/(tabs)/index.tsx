import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import Listing from '@features/listings/ListingDetails'
import { RateType } from '@/src/commonlib';
import ListingMiniViewWindow from '@/src/components/ListingMiniViewWindow';
import useUserListings from '@/src/utils/useUserListings';

export default function App() {
  
  const { listings, loading, error } = useUserListings();
  //From the API call, will have the spinning indicator while loading the API call
  if (loading) return <ActivityIndicator/>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    //Returns a list of all 
    <FlatList
      data={listings}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ListingMiniViewWindow listing={item}/>
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