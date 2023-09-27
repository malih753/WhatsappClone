import {StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import firestore from '@react-native-firebase/firestore';
const ChatBottom = ({userId, chatRef}) => {
  const [msg, setMsg] = useState('');
  const [Enable, setEnable] = useState(false);
  const onChange = value => {
    setMsg(value);
    setEnable(true);
  };
  const onSend = async () => {
    try {
      // Add the message to Firestore and await the promise
      const chat = await chatRef.collection('messages').add({
        body: msg,
        sender: userId,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      // Once the message is sent successfully, clear the message input and disable the send button
      setMsg('');
      setEnable(false);

      console.log('Message sent successfully:', chat);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.row}>
          <VectorIcon
            name="emoji-emotions"
            type="MaterialIcons"
            size={24}
            color="white"
          />
          <TextInput
            placeholder="Message"
            style={styles.msg}
            placeholderTextColor="grey"
            onChangeText={value => onChange(value)}
            value={msg}
          />
        </View>
        <View style={styles.row}>
          <VectorIcon name="attachment" type="Entypo" size={18} color="white" />

          {!Enable && (
            <>
              <VectorIcon
                name="rupee"
                type="FontAwesome"
                size={18}
                color="white"
                style={styles.icon}
              />
              <VectorIcon
                name="camera"
                type="FontAwesome"
                size={18}
                color="white"
              />
            </>
          )}
        </View>
      </View>
      <View style={styles.right}>
        {Enable ? (
          <VectorIcon
            name="send"
            type="MaterialCommunityIcons"
            size={25}
            color="white"
            onPress={onSend}
          />
        ) : (
          <VectorIcon
            name="microphone"
            type="MaterialCommunityIcons"
            size={25}
            color="white"
          />
        )}
      </View>
    </View>
  );
};

export default ChatBottom;

const styles = StyleSheet.create({
  msg: {
    fontSize: 17,
    color: 'white',
    marginLeft: 5,
  },
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    width: '85%',
    flexDirection: 'row',
    backgroundColor: '#48484a',
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 20,
  },
  right: {
    backgroundColor: '#24825e',
    padding: 10,
    borderRadius: 50,
  },
});
