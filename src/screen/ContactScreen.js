import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import ContactHeader from '../component/ContactHeader';
import ContactList from '../component/ContactList';

const ContactScreen = ({route}) => {
  const {userId} = route.params;
  return (
    <ScrollView style={styles.scrollView}>
      <ContactHeader />
      <ContactList userId={userId} />
    </ScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#3d3e40',
  },
});
