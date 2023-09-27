import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';
import {useNavigation} from '@react-navigation/native';

const ContactHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <VectorIcon
          name="arrow-back"
          type="Ionicons"
          size={24}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View>
          <Text style={styles.name}>Select Contact</Text>
          <Text style={styles.count}>23 Contact</Text>
        </View>
      </View>
      <View style={styles.header}>
        <VectorIcon
          name="search"
          type="Ionicons"
          color="white"
          size={20}
          style={styles.iconstyle}
        />
        <VectorIcon
          name="dots-three-vertical"
          type="Entypo"
          color="white"
          size={18}
        />
      </View>
    </View>
  );
};

export default ContactHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d3e40',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 17,
    color: 'white',
    marginLeft: 20,
  },
  count: {
    fontSize: 12,
    color: 'white',
    marginLeft: 20,
  },
  iconstyle: {
    marginHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
