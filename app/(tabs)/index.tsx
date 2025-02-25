import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, Switch } from 'react-native';
import VacationDestinations from '@/constants/list_items'


export default function HomeScreen() {

  return (
    <View style={styles.container}>
        <Text style={styles.textSubHeader}>Choose the destinations you would like a quote for.</Text>


    <ScrollView>
      {VacationDestinations.map(({location, price, average_yearly_temperature}) => {
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
        return (
          <View style={styles.whiteBox}>
            <Text style={styles.textButtons} >{location}</Text>
            <Text style={styles.textButtons} >${price}</Text>
            <Text style={styles.textButtons} >{average_yearly_temperature}</Text>
            <Switch
              style={styles.switch}
              trackColor={{false: '#767577', true: '#5F8575'}}
              thumbColor={isEnabled ? '#50C878' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        )
      })}
    </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F3F2F8',
    //alignItems: 'center',
    justifyContent: 'flex-start',
  },
  whiteBox: { // Style for white button boxes
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  whiteBoxLine: { // Style for white button lines
    backgroundColor: '#C6C5CA',
    borderWidth: 0,
    width: 300,
    height: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  switch: {
    marginBottom: 10,
  },
  loginBox: { // Style for grey search bar
    backgroundColor: '#E4E3E9',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  textHeader: { // Style for the "Folders" header
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginLeft: 40,
    marginTop: 100,
  },
  textSubHeader: { // Style for the "iCloud" sub header
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginLeft: 40,
    marginTop: 60,
    marginBottom: 10,
  },
  textLogin: { // Style for search bar text
    fontWeight: 'regular',
    fontSize: 20,
    color: '#807F85',
    marginLeft: 20,
  },
  textButtons: { // Style for button text
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  }
  // Orange icons are #E4AF0B
  // White box lines are #C6C5CA
});
