import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';

const MyStatus = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assests/chat8.jpg')} style={styles.img} />
      <View style={styles.icon}>
        <VectorIcon
          name="pluscircle"
          type="AntDesign"
          size={20}
          color="#5c8a6d"
        />
      </View>

      <View style={styles.side}>
        <Text style={styles.mystatus}>Status</Text>
        <Text style={styles.addstatus}>Tap to add status update</Text>
      </View>
    </View>
  );
};

export default MyStatus;

const styles = StyleSheet.create({
  img: {
    borderRadius: 50,
    height: 45,
    width: 45,
  },
  container: {
    flexDirection: 'row',
    position: 'relative',
  },
  mystatus: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  addstatus: {
    fontSize: 13,
    color: 'grey',
  },
  side: {
    marginLeft: 15,
    marginTop: 3,
  },
  icon: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    left: 30,
  },
});
