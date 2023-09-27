import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';

const CallLink = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBg}>
        <VectorIcon name="link" type="Fontisto" siz={24} color="white" />
      </View>

      <View style={styles.link}>
        <Text style={styles.calllink}>Create Call link</Text>
        <Text style={styles.share}>Share a link for yoour Whatsapp call</Text>
      </View>
    </View>
  );
};

export default CallLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconBg: {
    backgroundColor: '#56bf79',
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calllink: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  share: {
    fontSize: 13,
    color: 'grey',
    marginTop: 3,
  },
  link: {
    marginLeft: 15,
  },
});
