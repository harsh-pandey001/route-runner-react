
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Checkbox = ({ checked, onValueChange, label, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onValueChange(!checked)}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Icon name="check" size={16} color="#FFFFFF" />}
      </View>
      <View style={styles.labelContainer}>
        {label}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#9b87f5',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#9b87f5',
  },
  labelContainer: {
    flex: 1,
    paddingTop: 2,
  },
});

export default Checkbox;
