import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ViewData} from '../data/ViewData';

const ViewStatus = () => {
  return (
    <View>
      <Text style={styles.recent}>ViewStatus</Text>
      {ViewData.map(itm => {
        return (
          <View style={styles.stat}>
            <View style={styles.imgstory}>
              <Image source={itm.storyImg} style={styles.img} />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{itm.name}</Text>
              <Text style={styles.time}>{itm.time}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ViewStatus;

const styles = StyleSheet.create({
  img: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  recent: {
    fontSize: 14,
    color: 'grey',
    paddingBottom: 10,
    paddingTop: 20,
  },
  imgstory: {
    width: 50,
    height: 50,
    backgroundColor: '#252e28',
    borderColor: '#23633b',
    borderWidth: 2,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  time: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '500',
    marginTop: 3,
  },
  stat: {
    flexDirection: 'row',
    marginTop: 15,
  },
  info: {
    marginLeft: 15,
  },
});
