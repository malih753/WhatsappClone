import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assests/whatsapp.png')} style={styles.logo} />
      <View style={styles.iconSearch}>
        <VectorIcon type="Feather" name="camera" color={'grey'} size={20} />
        <VectorIcon
          type="Ioncons"
          name="search"
          color={'grey'}
          size={24}
          style={styles.icon}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={'grey'}
          size={20}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    width: 31,
    height: 31,
  },
  container: {
    backgroundColor: '#3b3d3c',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSearch: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 22,
  },
});
