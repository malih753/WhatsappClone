import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RecentData} from '../data/RecentData';

import FulModal from '../utils/FulModal';

const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState({});

  const setTimeUp = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}));
  };

  const ViewStatus = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: true}));
  };

  return (
    <View>
      <Text style={styles.recent}>Recent status</Text>
      {RecentData.map(itm => (
        <React.Fragment key={itm.id}>
          <TouchableOpacity onPress={() => ViewStatus(itm.id)}>
            <View style={styles.stat}>
              <View style={styles.imgstory}>
                <Image source={itm.storyImg} style={styles.img} />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{itm.name}</Text>
                <Text style={styles.time}>{itm.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FulModal
            showStatusModal={showStatusModal[itm.id] || false}
            setTimeUp={() => setTimeUp(itm.id)}
            item={itm}
            setShowStatusModal={value =>
              setShowStatusModal(prev => ({...prev, [itm.id]: value}))
            }
          />
        </React.Fragment>
      ))}
    </View>
  );
};

export default RecentStatus;

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
