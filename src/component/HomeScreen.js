import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import Topbar from '../navigation/Topbar';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Topbar />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
