import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CallLink from '../component/CallLink';
import RecentCalls from '../component/RecentCalls';

const CallList = () => {
  return (
    <ScrollView style={styles.container}>
      <CallLink />
      <RecentCalls />
    </ScrollView>
  );
};

export default CallList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d3e40',
    padding: 16,
  },
});
