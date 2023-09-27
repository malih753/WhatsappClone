import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import MyStatus from '../component/MyStatus';
import RecentStatus from '../component/RecentStatus';
import ViewStatus from '../component/ViewStatus';

const StatusList = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <MyStatus />
      <RecentStatus />
      <ViewStatus />
    </ScrollView>
  );
};

export default StatusList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252e28',
    padding: 16,
  },
});
