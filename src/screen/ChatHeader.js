import {Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import {getImage} from '../utils/Helper';

const ChatHeader = ({contactRef}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getContactData();
  }, [contactRef]);
  const getContactData = async () => {
    const contactSnapShot = await contactRef.get();
    const data = contactSnapShot.data();
    const name = data.name;
    const profile = await getImage(data.profile);
    setUser({name, profile});
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerCont2}>
        <VectorIcon name="arrow-back" type="Ionicons" size={24} color="white" />
        {user?.profile && (
          <Image source={{uri: user.profile}} style={styles.profile} />
        )}
        {user?.name && <Text style={styles.txt}>{user.name}</Text>}
      </View>
      <View style={styles.innerCont1}>
        <VectorIcon name="videocam" type="Ionicons" size={24} color="white" />
        <VectorIcon
          name="phone-alt"
          type="FontAwesome5"
          size={20}
          color="white"
        />
        <VectorIcon
          name="dots-three-vertical"
          type="Entypo"
          size={20}
          color="white"
        />
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  container: {
    backgroundColor: '#1b1d24',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: 17,
    color: 'white',
    marginLeft: 10,
  },
  innerCont1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
  },
  innerCont2: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
  },
});
