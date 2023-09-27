import {StyleSheet, Text, View, Modal, Image} from 'react-native';
import React from 'react';
import img1 from '../assests/chat5.jpg';
import img2 from '../assests/chat3.jpg';
import VectorIcon from './VectorIcon';
import ProgressBar from './ProgressBar';

const FulModal = props => {
  const {showStatusModal, setShowStatusModal, item, setTimeUp} = props;
  const updateModalStatus = () => {
    setShowStatusModal(prev => ({...prev, [item.id]: false}));
  };

  return (
    <Modal
      visible={showStatusModal}
      animationType="fade"
      onRequestClose={() => updateModalStatus()}>
      <View style={styles.container}>
        <ProgressBar setTimeUp={setTimeUp} />
        <View style={styles.top}>
          <View style={styles.arrow}>
            <VectorIcon
              name="arrow-back"
              type="Ionicons"
              size={24}
              color="white"
              onPress={() =>
                setShowStatusModal(prev => ({...prev, [item.id]: false}))
              }
            />
            <Image source={img2} style={styles.profile} />
            <Text style={styles.username}>Ayesha</Text>
          </View>

          <VectorIcon
            name="dots-three-vertical"
            type="Entypo"
            size={20}
            color="white"
          />
        </View>

        <Image source={img1} style={styles.img} />
        <Text style={styles.name}>My Latest Art</Text>
        <View style={styles.reply}>
          <VectorIcon
            name="chevron-small-up"
            type="Entypo"
            size={24}
            color="white"
          />
          <Text style={styles.give}>Reply</Text>
        </View>
      </View>
    </Modal>
  );
};

export default FulModal;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '75%',
  },
  name: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    backgroundColor: '#3b3e40',
    height: '100%',
    justifyContent: 'space-between',
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  username: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  give: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  reply: {
    alignItems: 'center',
  },
});
