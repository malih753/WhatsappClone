import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import {MsgData} from '../data/MsgData';
import firestore from '@react-native-firebase/firestore';

const ChatBody = ({chatId, userId}) => {
  const [message, setMessage] = useState([]);
  const ref = useRef();
  // const userId = '1';

  useEffect(() => {
    firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .orderBy('timestamp')
      .onSnapshot(snapShot => {
        const alMessage = snapShot.docs.map(snap => {
          return snap.data();
        });
        setMessage(alMessage);
      });
  }, []);
  const UserMessageView = ({message, time}) => {
    return (
      <View style={styles.user}>
        <View style={styles.inner}>
          <Text style={styles.txt}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name="check-double"
            type="FontAwesome5"
            size={12}
            color="#71d8eb"
            style={styles.double}
          />
        </View>
      </View>
    );
  };
  const OtherUserMessage = ({message, time}) => {
    return (
      <View style={styles.other}>
        <View style={styles.otherUser}>
          <Text style={styles.txt}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };
  const scrollToBottom = () => {
    ref.current.scrollToEnd({animated: true});
  };
  return (
    <>
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={scrollToBottom}>
        {message.map(msg => (
          <React.Fragment key={msg.id}>
            {msg.sender === userId ? (
              <UserMessageView
                message={msg.body}
                time={msg.timestamp?.toDate().toDateString()}
              />
            ) : (
              <OtherUserMessage
                message={msg.message}
                time={msg.timestamp?.toDate().toDateString()}
              />
            )}
          </React.Fragment>
        ))}
      </ScrollView>
      <View style={styles.ico}>
        <View style={styles.scroll}>
          <VectorIcon
            name="angle-dobule-down"
            type="Fontisto"
            size={12}
            color="white"
          />
        </View>
      </View>
    </>
  );
};

export default ChatBody;

const styles = StyleSheet.create({
  user: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginVertical: 5,
  },
  other: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  txt: {
    fontSize: 13,
    color: 'white',
  },
  inner: {
    backgroundColor: '#3a9c76',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 13,
    color: 'white',
    marginLeft: 5,
  },
  double: {
    marginLeft: 5,
  },
  otherUser: {
    backgroundColor: '#1f2e30',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  scroll: {
    backgroundColor: '#263029',
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ico: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
