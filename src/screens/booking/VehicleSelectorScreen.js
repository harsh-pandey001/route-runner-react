
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
import Card from '../../components/Card';

const VehicleSelectorScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const toast = useToast();
  
  const [selectedVehicle, setSelectedVehicle] = useState('');
  
  const locations = route.params?.locations || {
    pickup: '123 Pickup Street',
    dropoff: '456 Delivery Avenue',
  };
  
  const handleVehicleSelect = (vehicleId) => {
    setSelectedVehicle(vehicleId);
  };
  
  const handleContinue = () => {
    if (!selectedVehicle) {
      toast.show('Please select a vehicle to continue', {
        type: 'danger',
      });
      return;
    }
    navigation.navigate('BookingConfirmation', {
      locations,
      vehicle: vehicles.find(v => v.id === selectedVehicle),
    });
  };
  
  const vehicles = [
    {
      id: 'mini-truck',
      name: 'Mini Truck',
      icon: 'truck',
      capacity: 'Up to 1000 kg',
      description: 'Large items, furniture, appliances',
      price: 25,
      time: '45-60 min',
    },
    {
      id: 'pickup',
      name: 'Pickup Truck',
      icon: 'truck-pickup',
      capacity: 'Up to 500 kg',
      description: 'Medium-sized goods, partial moves',
      price: 20,
      time: '30-45 min',
    },
    {
      id: 'car',
      name: 'Car',
      icon: 'car',
      capacity: 'Up to 100 kg',
      description: 'Small packages, groceries, luggage',
      price: 15,
      time: '20-30 min',
    },
    {
      id: 'bike',
      name: 'Bike',
      icon: 'motorbike',
      capacity: 'Up to 30 kg',
      description: 'Documents, food delivery, small items',
      price: 10,
      time: '15-20 min',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Select Vehicle" showBack />
      
      <View style={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.introTitle}>Choose the right vehicle for your delivery</Text>
          <Text style={styles.introSubtitle}>
            Select based on package size and delivery requirements
          </Text>
        </View>
        
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {vehicles.map((vehicle) => (
            <TouchableOpacity
              key={vehicle.id}
              style={[
                styles.vehicleCard,
                selectedVehicle === vehicle.id && styles.selectedVehicleCard,
              ]}
              onPress={() => handleVehicleSelect(vehicle.id)}
            >
              <View style={styles.radioContainer}>
                <View style={styles.radioOuter}>
                  {selectedVehicle === vehicle.id && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </View>
              
              <View style={styles.vehicleInfoContainer}>
                <View style={styles.vehicleIconContainer}>
                  <Icon name={vehicle.icon} size={24} color="#9b87f5" />
                </View>
                
                <View style={styles.vehicleDetails}>
                  <Text style={styles.vehicleName}>{vehicle.name}</Text>
                  <Text style={styles.vehicleSpecs}>
                    {vehicle.capacity} • {vehicle.description}
                  </Text>
                </View>
                
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>${vehicle.price}</Text>
                  <Text style={styles.timeEstimate}>{vehicle.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          
          {selectedVehicle && (
            <Card style={styles.summaryCard}>
              <View style={styles.summaryContent}>
                <Text style={styles.summaryTitle}>Delivery Summary</Text>
                
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Pickup location:</Text>
                  <Text style={styles.summaryValue}>
                    {locations.pickup}
                  </Text>
                </View>
                
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Drop location:</Text>
                  <Text style={styles.summaryValue}>
                    {locations.dropoff}
                  </Text>
                </View>
                
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Distance:</Text>
                  <Text style={styles.summaryValue}>5.2 km</Text>
                </View>
                
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Estimated time:</Text>
                  <Text style={styles.summaryValue}>30 min</Text>
                </View>
                
                <View style={[styles.summaryItem, styles.totalPrice]}>
                  <Text style={styles.totalPriceLabel}>Total price:</Text>
                  <Text style={styles.totalPriceValue}>
                    ${vehicles.find(v => v.id === selectedVehicle)?.price || 0}
                  </Text>
                </View>
              </View>
            </Card>
          )}
        </ScrollView>
      </View>
      
      <View style={styles.footer}>
        <CustomButton
          title="Continue to Confirmation"
          onPress={handleContinue}
          disabled={!selectedVehicle}
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
  content: {
    flex: 1,
  },
  intro: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  introTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1F2C',
    marginBottom: 4,
  },
  introSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  vehicleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 12,
  },
  selectedVehicleCard: {
    borderColor: '#9b87f5',
    backgroundColor: '#F3E8FF',
  },
  radioContainer: {
    marginRight: 12,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#9b87f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9b87f5',
  },
  vehicleInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  vehicleIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  vehicleDetails: {
    flex: 1,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1F2C',
    marginBottom: 4,
  },
  vehicleSpecs: {
    fontSize: 12,
    color: '#6B7280',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1F2C',
    marginBottom: 4,
  },
  timeEstimate: {
    fontSize: 12,
    color: '#6B7280',
  },
  summaryCard: {
    marginTop: 16,
    marginBottom: 16,
  },
  summaryContent: {
    padding: 16,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1F2C',
    marginBottom: 12,
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
  totalPrice: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 8,
    marginTop: 4,
  },
  totalPriceLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1F2C',
  },
  totalPriceValue: {
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

export default VehicleSelectorScreen;
