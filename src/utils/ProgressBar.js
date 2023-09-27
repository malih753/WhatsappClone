import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const ProgressBar = ({setTimeUp}) => {
  const progreeAnimation = useRef(new Animated.Value(0)).current;
  const animateProgress = () => {
    Animated.timing(progreeAnimation, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setTimeUp();
        console.log('Animation stopped and progress bar is full');
      }
    });
  };
  useEffect(() => {
    animateProgress();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <Animated.View
          style={[
            styles.animate,
            {
              width: progreeAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  animate: {
    width: '100%',
    height: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  container: {
    marginTop: 10,
  },
  progress: {
    width: '100%',
    height: 5,
    backgroundColor: '#708090',
    borderRadius: 5,
  },
});
