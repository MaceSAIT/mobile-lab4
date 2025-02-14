import { View, StyleSheet, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import VacationDestinations from '@/constants/list_items'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.listText} >{VacationDestinations[0].location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  listText: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
