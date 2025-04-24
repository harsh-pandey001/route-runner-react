
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Card from '../../components/Card';
import RadioGroup from '../../components/RadioGroup';

const BookingConfirmationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const toast = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [isLoading, setIsLoading] = useState(false);
  const [packageInfo, setPackageInfo] = useState({
    type: '',
    weight: '',
    instructions: '',
  });

  // Get booking details from route params
  const locations = route.params?.locations || {
    pickup: '123 Pickup Street',
    dropoff: '456 Delivery Avenue',
  };
  
  const vehicle = route.params?.vehicle || {
    name: 'Mini Truck',
    price: 25,
  };
  
  const handleInputChange = (field, value) => {
    setPackageInfo(prev => ({
      ...prev,
      [field]: value,
    }));
  };
  
  const handleConfirmBooking = () => {
    setIsLoading(true);
    
    // Simulate API call for booking
    setTimeout(() => {
      setIsLoading(false);
      toast.show('Booking Successful! Tracking ID: DL12345', {
        type: 'success',
      });
      navigation.navigate('OrderTracking', { orderId: 'DL12345' });
    }, 1500);
  };
  
  const paymentMethods = [
    { value: 'cash', label: 'Cash on Delivery' },
    { value: 'card', label: 'Credit/Debit Card' },
    { value: 'wallet', label: 'Digital Wallet' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Confirm Booking" showBack />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Delivery Details */}
        <Card style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="information-outline" size={18} color="#9b87f5" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Delivery Details</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Icon name="map-marker-outline" size={20} color="#6B7280" style={styles.detailIcon} />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Pickup Location</Text>
              <Text style={styles.detailValue}>{locations.pickup}</Text>
            </View>
          </View>
          
          <View style={styles.detailItem}>
            <Icon name="map-marker-outline" size={20} color="#6B7280" style={styles.detailIcon} />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Drop Location</Text>
              <Text style={styles.detailValue}>{locations.dropoff}</Text>
            </View>
          </View>
          
          <View style={styles.detailItem}>
            <Icon name="truck-outline" size={20} color="#6B7280" style={styles.detailIcon} />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Vehicle Type</Text>
              <Text style={styles.detailValue}>{vehicle.name}</Text>
            </View>
          </View>
          
          <View style={styles.detailItem}>
            <Icon name="clock-outline" size={20} color="#6B7280" style={styles.detailIcon} />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Estimated Time</Text>
              <Text style={styles.detailValue}>30 minutes</Text>
            </View>
          </View>
          
          <View style={styles.detailItem}>
            <Icon name="calendar-outline" size={20} color="#6B7280" style={styles.detailIcon} />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Delivery Date</Text>
              <Text style={styles.detailValue}>Today, ASAP</Text>
            </View>
          </View>
        </Card>
        
        {/* Package Information */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Package Information</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>Package Type</Text>
            <CustomInput
              placeholder="e.g. Furniture, Electronics, etc."
              value={packageInfo.type}
              onChangeText={(value) => handleInputChange('type', value)}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>Estimated Weight (kg)</Text>
            <CustomInput
              placeholder="Enter weight"
              keyboardType="numeric"
              value={packageInfo.weight}
              onChangeText={(value) => handleInputChange('weight', value)}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>Special Instructions</Text>
            <CustomInput
              placeholder="Any specific handling instructions..."
              multiline
              numberOfLines={3}
              textAlignVertical="top"
              style={styles.textArea}
              value={packageInfo.instructions}
              onChangeText={(value) => handleInputChange('instructions', value)}
            />
          </View>
        </Card>
        
        {/* Payment Method */}
        <Card style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="credit-card-outline" size={18} color="#9b87f5" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Payment Method</Text>
          </View>
          
          <RadioGroup
            options={paymentMethods}
            value={paymentMethod}
            onChange={(value) => setPaymentMethod(value)}
          />
          
          {paymentMethod === 'card' && (
            <View style={styles.cardDetails}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Card Number</Text>
                <CustomInput placeholder="1234 5678 9012 3456" />
              </View>
              
              <View style={styles.row}>
                <View style={[styles.formGroup, styles.flex1, styles.marginRight]}>
                  <Text style={styles.label}>Expiry Date</Text>
                  <CustomInput placeholder="MM/YY" />
                </View>
                <View style={[styles.formGroup, styles.flex1]}>
                  <Text style={styles.label}>CVV</Text>
                  <CustomInput placeholder="123" secureTextEntry />
                </View>
              </View>
            </View>
          )}
        </Card>
        
        {/* Order Summary */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Base fare</Text>
            <Text style={styles.summaryValue}>$20.00</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Distance fee (5.2 km)</Text>
            <Text style={styles.summaryValue}>$5.00</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Service fee</Text>
            <Text style={styles.summaryValue}>$2.00</Text>
          </View>
          
          <View style={[styles.summaryItem, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$27.00</Text>
          </View>
        </Card>
      </ScrollView>
      
      <View style={styles.footer}>
        <CustomButton
          title={isLoading ? "Processing..." : "Confirm Booking"}
          onPress={handleConfirmBooking}
          disabled={isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1F2C',
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  detailIcon: {
    marginTop: 3,
    marginRight: 12,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#1A1F2C',
    fontWeight: '500',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
    fontWeight: '500',
  },
  textArea: {
    height: 80,
    padding: 8,
  },
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  marginRight: {
    marginRight: 12,
  },
  cardDetails: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  summaryValue: {
    fontSize: 14,
    color: '#1A1F2C',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 8,
    marginTop: 4,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1F2C',
  },
  totalValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1F2C',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
});

export default BookingConfirmationScreen;
