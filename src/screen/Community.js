import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Community = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assests/comu.png')} style={styles.img} />
      <Text style={styles.com}>Introducing communities</Text>
      <Text style={styles.com1}>
        Easily organixe your related groups and send announcements.Now, your
        communities or sschools ,can have their own space
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Start your community</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    tintColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#38403c',
  },
  com: {
    fontSize: 26,
    color: 'white',
    fontWeight: '500',
    marginTop: 40,
  },
  com1: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    lineHeight: 22,
    paddingHorizontal: 30,
  },
  btn: {
    backgroundColor: '#27915b',
    marginTop: 10,
    padding: 10,
    borderRadius: 30,
    width: '80%',
  },
  txt: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
});
