import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';

export default function App() {
  // Bakery items (FlatList data)
  const bakeryItems = [
    { id: '1', name: 'Fresh Bread', price: 'RWF 1,500', image: 'https://i.pinimg.com/1200x/07/7d/97/077d9796ae20cfc3e1efb330a788503c.jpg' },
    { id: '2', name: 'Cupcake', price: 'RWF 800', image: 'https://i.pinimg.com/1200x/0b/c1/59/0bc159ffdf1fd39282c9ef3ba7413d6a.jpg' },
    { id: '3', name: 'Donut', price: 'RWF 1,000', image: 'https://i.pinimg.com/1200x/66/75/fe/6675fe80cec7c9ae75aedeb53a20134d.jpg' },
    { id: '4', name: 'Baguette', price: 'RWF 1,200', image: 'https://i.pinimg.com/1200x/ab/b0/4d/abb04d59089b98a08d6b7608d2b83ab1.jpg' },
    { id: '5', name: 'Cookies', price: 'RWF 700', image: 'https://i.pinimg.com/1200x/e8/84/9c/e8849c97c7deea6af0f11e6e304b3bc4.jpg' },
    { id: '6', name: 'Cheesecake', price: 'RWF 3,000', image: 'https://i.pinimg.com/736x/70/ee/b7/70eeb708526507e5e666287c9388e27b.jpg' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>🥐 Samuella’s Bakery</Text>
        </View>

        {/* FlatList for bakery items */}
        <Text style={styles.sectionTitle}>Our Products</Text>
        <FlatList
          data={bakeryItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 15,
  },
  header: {
    padding: 20,
    backgroundColor: '#D2691E', // Chocolate color
    borderRadius: 15,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 15,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#D2691E',
    marginVertical: 5,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#D2691E',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  offerBox: {
    backgroundColor: '#f0fff0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  offerText: {
    fontSize: 16,
    color: 'green',
    marginVertical: 5,
  },
});
