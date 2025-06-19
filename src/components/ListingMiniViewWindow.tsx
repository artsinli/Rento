import { View, Text, StyleSheet } from 'react-native'
import Listing from '@/features/listings/ListingDetails';

//TODO - MiniViewWindow is a component that displays data and information in a mini card, needs listing details imported 
// For now this can be almost like a postgres database viewer.

type Props = {
    listing: Listing,
};

export default function ListingMiniViewWindow({ listing }: Props) {
    
    return(
        <View style={styles.container}>
            <Text style={styles.id}>{listing.id}</Text>
            <View style={styles.row}>
                <Text style={styles.label}>{listing.owner.name}</Text>
                <Text style={styles.price}>{listing.price.toLocaleString()}</Text>
            </View>
        </View>
    )
}

//TODO - Consider adding these to the Theme section
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    margin: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  id: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
    color: '#3368bd',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#222',
  },
  price: {
    fontSize: 16,
    color: '#3368bd',
    fontWeight: 'bold',
  },
});