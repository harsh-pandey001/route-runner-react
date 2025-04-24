
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RadioGroup = ({ options, value, onChange }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.option}
          onPress={() => onChange(option.value)}
        >
          <View style={styles.radioContainer}>
            <View style={styles.radioOuter}>
              {value === option.value && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>{option.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  option: {
    marginBottom: 12,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#9b87f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9b87f5',
  },
  radioLabel: {
    fontSize: 16,
    color: '#1A1F2C',
  },
});

export default RadioGroup;
