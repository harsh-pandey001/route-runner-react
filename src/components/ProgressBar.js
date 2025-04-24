
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress = 0 }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#9b87f5',
    borderRadius: 4,
  },
});

export default ProgressBar;
