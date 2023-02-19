import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HymnList from './HymnList';
import HymnDetails from './HymnDetails';
import Header from './Header';
import SearchBar from './SearchBar';
import hymnsData from '../data/hymns.json';

const Stack = createStackNavigator();


const HymnalApp = () => {
  const [hymns, setHymns] = React.useState([]);

  React.useEffect(() => {
    fetch('https://example.com/hymns')
      .then((response) => response.json())
      .then((data) => setHymns(data))
      .catch((error) => console.error(error));
  }, []);

  const HymnCard = ({ hymn }) => {
    return (
      <TouchableOpacity style={styles.hymnCard} onPress={() => console.log(`Pressed ${hymn.title}`)}>
        <Text style={styles.hymnCardNumber}>{hymn.number}</Text>
        <Text style={styles.hymnCardTitle}>{hymn.title}</Text>
        <Icon name="chevron-right" size={24} color="#666" />
      </TouchableOpacity>
    );
  };

  const renderHymnCard = ({ item }) => <HymnCard hymn={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hymnal</Text>
        <Icon name="search" size={24} color="#666" />
      </View>
      <FlatList data={hymns} renderItem={renderHymnCard} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hymnCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  hymnCardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginRight: 8,
  },
  hymnCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
});

export default HymnalApp;