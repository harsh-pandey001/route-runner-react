
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../../components/Card';

const BookingScreen = () => {
  const navigation = useNavigation();
  
  const bookingTypes = [
    {
      id: 'standard',
      title: 'Standard Delivery',
      description: 'Regular delivery within the city',
      icon: 'truck-delivery-outline',
      minPrice: 10,
    },
    {
      id: 'express',
      title: 'Express Delivery',
      description: 'Faster delivery for urgent packages',
      icon: 'timer-outline',
      minPrice: 15,
    },
    {
      id: 'bulky',
      title: 'Bulky Item Delivery',
      description: 'For large or heavy items',
      icon: 'package-variant-closed',
      minPrice: 20,
    },
  ];

  const handleBookingTypeSelect = (bookingType) => {
    navigation.navigate('LocationPicker', { bookingType });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Book a Delivery</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Select Delivery Type</Text>
          
          <View style={styles.bookingTypes}>
            {bookingTypes.map((type) => (
              <Card key={type.id} style={styles.bookingTypeCard}>
                <TouchableOpacity
                  style={styles.bookingTypeButton}
                  onPress={() => handleBookingTypeSelect(type)}
                >
                  <View style={styles.iconContainer}>
                    <Icon name={type.icon} size={24} color="#9b87f5" />
                  </View>
                  <View style={styles.bookingTypeInfo}>
                    <Text style={styles.bookingTypeTitle}>{type.title}</Text>
                    <Text style={styles.bookingTypeDescription}>{type.description}</Text>
                  </View>
                  <View style={styles.bookingTypePrice}>
                    <Text style={styles.pricePrefix}>from</Text>
                    <Text style={styles.price}>${type.minPrice}</Text>
                    <Icon name="chevron-right" size={20} color="#9CA3AF" />
                  </View>
                </TouchableOpacity>
              </Card>
            ))}
          </View>
          
          <Text style={styles.sectionTitle}>Recent Delivery Addresses</Text>
          
          <Card style={styles.recentAddressCard}>
            <TouchableOpacity
              style={styles.recentAddressButton}
              onPress={() => {
                navigation.navigate('LocationPicker', {
                  bookingType: bookingTypes[0],
                  prefilledAddress: {
                    pickup: 'Home: 123 Residential St',
                    dropoff: 'Office: 456 Business Ave',
                  },
                });
              }}
            >
              <View style={styles.addressRoute}>
                <View style={styles.addressDot} />
                <View style={styles.addressDotConnector} />
                <View style={[styles.addressDot, styles.addressDotBottom]} />
              </View>
              <View style={styles.addressInfo}>
                <Text style={styles.addressLabel}>Pickup</Text>
                <Text style={styles.addressText}>Home: 123 Residential St</Text>
                <View style={styles.addressDivider} />
                <Text style={styles.addressLabel}>Drop-off</Text>
                <Text style={styles.addressText}>Office: 456 Business Ave</Text>
              </View>
              <Icon name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </Card>
          
          <Text style={styles.sectionTitle}>Suggested Services</Text>
          
          <Card style={styles.suggestedServiceCard}>
            <TouchableOpacity style={styles.suggestedServiceContent}>
              <View style={styles.suggestedServiceIcon}>
                <Icon name="repeat" size={24} color="#9b87f5" />
              </View>
              <View style={styles.suggestedServiceInfo}>
                <Text style={styles.suggestedServiceTitle}>Schedule Recurring Deliveries</Text>
                <Text style={styles.suggestedServiceDescription}>
                  Set up regular deliveries for your business needs
                </Text>
              </View>
              <Icon name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </Card>
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
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1F2C',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 16,
    color: '#1A1F2C',
  },
  bookingTypes: {
    marginBottom: 8,
  },
  bookingTypeCard: {
    marginBottom: 12,
  },
  bookingTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingTypeInfo: {
    flex: 1,
    marginLeft: 12,
  },
  bookingTypeTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1F2C',
    marginBottom: 4,
  },
  bookingTypeDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  bookingTypePrice: {
    alignItems: 'flex-end',
  },
  pricePrefix: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1F2C',
    marginBottom: 4,
  },
  recentAddressCard: {
    marginBottom: 16,
  },
  recentAddressButton: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  addressRoute: {
    width: 24,
    alignItems: 'center',
    marginRight: 12,
  },
  addressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#9b87f5',
  },
  addressDotConnector: {
    width: 2,
    height: 30,
    backgroundColor: '#9b87f5',
    marginVertical: 4,
  },
  addressDotBottom: {
    backgroundColor: '#7E69AB',
  },
  addressInfo: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  addressText: {
    fontSize: 15,
    color: '#1A1F2C',
    marginBottom: 8,
  },
  addressDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  suggestedServiceCard: {
    marginBottom: 20,
  },
  suggestedServiceContent: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  suggestedServiceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  suggestedServiceInfo: {
    flex: 1,
  },
  suggestedServiceTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1F2C',
    marginBottom: 4,
  },
  suggestedServiceDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default BookingScreen;
