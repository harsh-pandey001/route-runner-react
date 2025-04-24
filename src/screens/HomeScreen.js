
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatureCard from '../components/FeatureCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const features = [
    {
      icon: 'map-marker',
      title: 'Easy Location Selection',
      description: 'Select pickup and drop locations easily with our interactive map interface.',
    },
    {
      icon: 'truck-delivery',
      title: 'Multiple Vehicle Types',
      description: 'Choose from a range of vehicles that best suit your delivery needs.',
    },
    {
      icon: 'package-variant-closed',
      title: 'Secure Packaging',
      description: 'Your items are carefully handled and securely transported.',
    },
    {
      icon: 'clock-outline',
      title: 'Real-time Tracking',
      description: 'Track your delivery in real-time from pickup to drop-off.',
    },
    {
      icon: 'shield-check',
      title: 'Safe Delivery',
      description: 'Professional drivers ensure your goods reach safely.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#9b87f5" barStyle="light-content" />
      
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.userName}>User</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="bell-outline" size={24} color="#1A1F2C" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Fast & Reliable Delivery Service</Text>
          <Text style={styles.heroSubtitle}>
            Get your packages delivered quickly with our trusted logistics service
          </Text>
          
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => navigation.navigate('Booking')}
          >
            <Text style={styles.bookButtonText}>Book a Delivery</Text>
            <Icon name="arrow-right" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>Why Choose Our Service</Text>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featuresScroll}
          contentContainerStyle={styles.featuresContainer}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ScrollView>
        
        <Text style={styles.sectionTitle}>Recent Deliveries</Text>
        
        <View style={styles.emptyState}>
          <Icon name="package-variant" size={48} color="#D1D5DB" />
          <Text style={styles.emptyStateText}>No recent deliveries</Text>
          <Text style={styles.emptyStateSubtext}>Your completed deliveries will appear here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  greeting: {
    fontSize: 14,
    color: '#6B7280',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1F2C',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    backgroundColor: '#9b87f5',
    borderRadius: 16,
    padding: 20,
    margin: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#F3E8FF',
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: '#7E69AB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#1A1F2C',
  },
  featuresScroll: {
    paddingLeft: 20,
  },
  featuresContainer: {
    paddingRight: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
    marginTop: 12,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 4,
  },
});

export default HomeScreen;
