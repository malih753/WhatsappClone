import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from '../component/ChatBody';
import ChatBottom from './ChatBottom';
import wallpaper from '../assests/wal.jpg';
import firestore from '@react-native-firebase/firestore';

const ChatScreen = ({route}) => {
  const {userId, contactId} = route.params;

  const generateChatId = () => {
    const sortedUserIds = [userId, contactId].sort();
    const chatId = sortedUserIds.join('_');
    return chatId;
  };

  const chatId = generateChatId();
  const chatRef = firestore().collection('chats').doc(chatId);
  const userRef = firestore().collection('users').doc(userId);
  const contactRef = firestore().collection('users').doc(contactId);

  useEffect(() => {
    const createChatRoom = async () => {
      const chatSnap = await chatRef.get();
      if (!chatSnap.exists) {
        const participants = [userRef, contactRef];
        await chatRef.set(participants);
      }
    };

    createChatRoom();
  }, [chatRef, userRef, contactRef]);

  return (
    <>
      <ChatHeader contactRef={contactRef} />
      <ImageBackground source={wallpaper} style={styles.wallpaper}>
        <ChatBody chatId={chatId} userId={userId} />
      </ImageBackground>
      <ChatBottom chatRef={chatRef} userId={userId} />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    padding: 12,
  },
});
