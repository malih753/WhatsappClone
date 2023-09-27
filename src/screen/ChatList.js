import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatCom from '../component/ChatCom';
import VectorIcon from '../utils/VectorIcon';
import {useNavigation} from '@react-navigation/native';
import {getDeviceId} from '../utils/Helper';

const ChatList = () => {
  const [userId, SetUser] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    getDeviceId().then(id => SetUser(id));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatCom userId={userId} />
      </ScrollView>

      <TouchableOpacity
        style={styles.contact}
        onPress={() => {
          navigation.navigate('ContactScreen', {userId: userId});
        }}>
        <VectorIcon
          name="message-reply-text"
          type="MaterialCommunityIcons"
          size={22}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  contact: {
    backgroundColor: '#14b585',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#3b3d3c',
  },
});
