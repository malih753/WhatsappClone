import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';
import {getImage} from '../utils/Helper';
import {useNavigation} from '@react-navigation/native';

const ContactList = ({userId}) => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData()
      .then(res => setUsers(res))
      .catch(error => console.log(error));
  }, []);

  const getUserData = async () => {
    const userRef = await firestore().collection('users').get();
    console.log('userRef', userRef);

    const userData = Promise.all(
      userRef.docs
        .filter(item => {
          return item.id != userId;
        })
        .map(async item => {
          const id = item.id;
          const name = item.data().name;
          const profileUrl = item.data().profile;

          // Get the image URL using your getImage function
          const profile = await getImage(profileUrl);

          return {
            id,
            name,
            profile,
          };
        }),
    );

    console.log('userData', userData);
    return userData;
  };
  const onNavigate = contactId => {
    navigation.navigate('ChatScreen', {userId: userId, contactId: contactId});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts on Whatsapp</Text>
      {users.map(item => (
        <View key={item.id}>
          <TouchableOpacity
            style={styles.contact}
            onPress={() => onNavigate(item.id)}>
            <Image source={{uri: item.profile}} style={styles.img} />
            <Text style={styles.username}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d3e40',
    padding: 16,
    height: '100%',
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  username: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 10,
  },
  title: {
    fontSize: 12,
    color: 'grey',
    marginTop: 10,
    marginVertical: 5,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
});
