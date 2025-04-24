
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './Card';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color="#9b87f5" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    padding: 16,
    marginRight: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1A1F2C',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default FeatureCard;
