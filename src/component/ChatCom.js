import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import {ChatData} from '../data/ChatData';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {getImage} from '../utils/Helper';

const ChatCom = ({userId}) => {
  const [chatList, setChatList] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getChatList()
      .then(chatData => {
        setChatList(chatData);
      })
      .catch(error => {
        console.log('chta error ', error);
      });
  }, []);
  const getChatList = async () => {
    const userRef = firestore().collection('users').doc(userId);
    const allChatDoc = await firestore()
      .collection('chats')
      .where('participants', 'array-contains', userId)
      .get();

    // Get use data from user data with reference chat
    const chatData = await Promise.all(
      allChatDoc.docs.map(async chat => {
        const data = chat.data();
        const participants = Promise.all(
          data.participants
            .filter(item => {
              return item.id != userId;
            })
            .map(async user => {
              const userDoc = await user.get();
              const userData = userDoc.data();
              const id = user.id;
              const name = userData?.name;
              const profile = await getImage(userData?.profile);
              return {id, name, profile};
            }),
        );
        const chatDocRef = chat.ref;
        const lastMsg = await chatDocRef
          .collection('messages')
          .orderBy('timestamp', 'desc')
          .limit(1)
          .get();

        const lastMessage = lastMsg?.docs?.length ? lastMsg.docs[0].data() : {};
        return {lastMessage, otherUser: participants[0]};
      }),
    );
    return chatData;
  };
  return (
    <>
      {ChatData.map(item => {
        return (
          <View key={item.id}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                navigation.navigate('ChatScreen', {chatId: item.chatId});
              }}>
              <View style={styles.chatCont}>
                <Image source={item.profile} style={styles.profileimg} />
                <View style={styles.chat}>
                  <Text style={styles.txt}>{item.name}</Text>
                  <Text style={styles.msg}>{item.message}</Text>
                </View>
              </View>
              <View style={styles.right}>
                <Text style={styles.timestamp}>09:42 P.M</Text>
                {item.mute && (
                  <VectorIcon
                    type="MaterialCommunityIcons"
                    name="volume-variant-off"
                    size={22}
                    color={'grey'}
                    style={styles.mute}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

export default ChatCom;

const styles = StyleSheet.create({
  profileimg: {
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 15,
  },
  container: {
    backgroundColor: '#3b3d3c',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    color: 'grey',
    fontSize: 16,
  },
  msg: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
  },
  chat: {},
  chatCont: {
    flexDirection: 'row',
  },
  timestamp: {
    color: 'grey',
    fontSize: 12,
  },
  right: {},
  mute: {
    marginTop: 5,
    marginLeft: 20,
  },
});
