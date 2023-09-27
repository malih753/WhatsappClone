import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';
import {RecentCallsLinks} from '../data/RecentLinks';

const RecentCalls = () => {
  return (
    <>
      <Text style={styles.recent}>Recent</Text>
      {RecentCallsLinks.map(item => {
        return (
          <View style={styles.container} key={item.id}>
            <View style={styles.row}>
              <Image source={item.image} style={styles.img} />

              <View style={styles.link}>
                <Text style={styles.calllink}>{item.name}</Text>
                <View style={styles.row}>
                  {item.incoming && (
                    <VectorIcon
                      name="arrow-down-left"
                      type="Feather"
                      size={16}
                      color="red"
                    />
                  )}
                  {item.outgoing && (
                    <VectorIcon
                      name="arrow-up-right"
                      type="Feather"
                      size={16}
                      color="green"
                    />
                  )}

                  <Text style={styles.share}>{item.time}</Text>
                </View>
              </View>
            </View>
            {item.video && (
              <VectorIcon
                name="videocam"
                type="Ionicons"
                size={24}
                color="#56bf79"
              />
            )}
            {item.audio && (
              <VectorIcon
                name="phone-alt"
                type="FontAwesome5"
                size={16}
                color="#56bf79"
              />
            )}
          </View>
        );
      })}
    </>
  );
};

export default RecentCalls;

const styles = StyleSheet.create({
  recent: {
    marginTop: 20,
    fontSize: 14,
    color: 'grey',
    paddingBottom: 10,
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 50,
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
