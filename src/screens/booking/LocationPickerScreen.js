
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Card from '../../components/Card';

const LocationPickerScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const toast = useToast();
  
  // Get prefilled address if any
  const prefilledAddress = route.params?.prefilledAddress || {};
  
  const [locations, setLocations] = useState({
    pickup: prefilledAddress.pickup || '',
    dropoff: prefilledAddress.dropoff || '',
  });
  
  const [activeTab, setActiveTab] = useState('map');
  
  const handleLocationChange = (type, value) => {
    setLocations(prev => ({
      ...prev,
      [type]: value,
    }));
  };
  
  const handleCurrentLocation = () => {
    toast.show('Using current location', {
      type: 'success',
    });
    setLocations(prev => ({
      ...prev,
      pickup: '123 Current Street, Your City',
    }));
  };
  
  const handleContinue = () => {
    if (!locations.pickup || !locations.dropoff) {
      toast.show('Please set both pickup and drop-off locations', {
        type: 'danger',
      });
      return;
    }
    navigation.navigate('VehicleSelector', { locations });
  };

  // Mock suggested locations
  const suggestedLocations = [
    "123 Maple Street, Central City",
    "456 Oak Avenue, Downtown",
    "789 Pine Road, Westside",
    "101 Cedar Lane, Eastside",
  ];
  
  // Mock saved addresses
  const savedAddresses = [
    {
      id: 'home',
      name: 'Home',
      address: '123 Residential St',
      emoji: '🏠',
      bgColor: '#F3E8FF',
      textColor: '#9b87f5',
    },
    {
      id: 'office',
      name: 'Office',
      address: '456 Business Ave',
      emoji: '🏢',
      bgColor: '#E1F5FE',
      textColor: '#0288D1',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Set Locations" showBack />
      
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'map' && styles.activeTab]}
          onPress={() => setActiveTab('map')}
        >
          <Text style={[styles.tabText, activeTab === 'map' && styles.activeTabText]}>
            Map View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'list' && styles.activeTab]}
          onPress={() => setActiveTab('list')}
        >
          <Text style={[styles.tabText, activeTab === 'list' && styles.activeTabText]}>
            List View
          </Text>
        </TouchableOpacity>
      </View>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {activeTab === 'map' ? (
            <>
              {/* Map View (Mock) */}
              <View style={styles.mapContainer}>
                <Text style={styles.mapPlaceholder}>
                  Map View (Google Maps integration would go here)
                </Text>
              </View>
              
              <Card style={styles.locationsCard}>
                <View style={styles.locationsContainer}>
                  <View style={styles.routeIcons}>
                    <View style={[styles.routeIcon, styles.pickupIcon]}>
                      <Text style={styles.routeIconText}>A</Text>
                    </View>
                    <View style={styles.routeConnector} />
                    <View style={[styles.routeIcon, styles.dropIcon]}>
                      <Text style={styles.routeIconText}>B</Text>
                    </View>
                  </View>
                  
                  <View style={styles.inputsContainer}>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.inputLabel}>Pickup Location</Text>
                      <View style={styles.inputRow}>
                        <CustomInput
                          placeholder="Enter pickup address"
                          value={locations.pickup}
                          onChangeText={(value) => handleLocationChange('pickup', value)}
                          containerStyle={styles.locationInput}
                        />
                        <TouchableOpacity
                          style={styles.currentLocationButton}
                          onPress={handleCurrentLocation}
                        >
                          <Icon name="crosshairs-gps" size={20} color="#9b87f5" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                    <View style={styles.inputWrapper}>
                      <Text style={styles.inputLabel}>Drop Location</Text>
                      <CustomInput
                        placeholder="Enter drop-off address"
                        value={locations.dropoff}
                        onChangeText={(value) => handleLocationChange('dropoff', value)}
                      />
                    </View>
                  </View>
                </View>
              </Card>
              
              <Text style={styles.sectionTitle}>Suggested locations</Text>
              
              {suggestedLocations.map((location, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.suggestionItem}
                  onPress={() => handleLocationChange('dropoff', location)}
                >
                  <Icon name="map-marker-outline" size={18} color="#6B7280" />
                  <Text style={styles.suggestionText}>{location}</Text>
                </TouchableOpacity>
              ))}
            </>
          ) : (
            <>
              {/* List View */}
              <Card style={styles.locationsCard}>
                <View style={styles.listInputWrapper}>
                  <Text style={styles.inputLabel}>Pickup Location</Text>
                  <CustomInput
                    placeholder="Enter pickup address"
                    value={locations.pickup}
                    onChangeText={(value) => handleLocationChange('pickup', value)}
                    containerStyle={styles.marginBottom}
                  />
                  <TouchableOpacity
                    style={styles.currentLocationButtonFull}
                    onPress={handleCurrentLocation}
                  >
                    <Icon name="crosshairs-gps" size={18} color="#9b87f5" />
                    <Text style={styles.currentLocationText}>Use current location</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.directionIconContainer}>
                  <View style={styles.directionIcon}>
                    <Icon name="arrow-down" size={16} color="#6B7280" />
                  </View>
                </View>
                
                <View style={styles.listInputWrapper}>
                  <Text style={styles.inputLabel}>Drop Location</Text>
                  <CustomInput
                    placeholder="Enter drop-off address"
                    value={locations.dropoff}
                    onChangeText={(value) => handleLocationChange('dropoff', value)}
                  />
                </View>
              </Card>
              
              <Text style={styles.sectionTitle}>Saved addresses</Text>
              
              {savedAddresses.map((address) => (
                <Card key={address.id} style={styles.addressCard}>
                  <TouchableOpacity
                    style={styles.savedAddress}
                    onPress={() => handleLocationChange(
                      address.id === 'home' ? 'pickup' : 'dropoff',
                      `${address.name}: ${address.address}`
                    )}
                  >
                    <View style={[
                      styles.addressIcon,
                      { backgroundColor: address.bgColor }
                    ]}>
                      <Text>{address.emoji}</Text>
                    </View>
                    
                    <View style={styles.addressDetails}>
                      <Text style={styles.addressName}>{address.name}</Text>
                      <Text style={styles.addressText}>{address.address}</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.selectButton}>
                      <Text style={styles.selectButtonText}>Select</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </Card>
              ))}
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
      
      <View style={styles.footer}>
        <CustomButton
          title="Continue"
          onPress={handleContinue}
          disabled={!locations.pickup || !locations.dropoff}
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
  keyboardAvoidingView: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 4,
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#9b87f5',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  mapContainer: {
    height: 200,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  mapPlaceholder: {
    color: '#6B7280',
  },
  locationsCard: {
    marginBottom: 16,
  },
  locationsContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  routeIcons: {
    alignItems: 'center',
    width: 30,
    marginRight: 10,
  },
  routeIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickupIcon: {
    backgroundColor: '#F3E8FF',
  },
  dropIcon: {
    backgroundColor: '#E1F5FE',
  },
  routeIconText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9b87f5',
  },
  routeConnector: {
    height: 40,
    width: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 4,
  },
  inputsContainer: {
    flex: 1,
  },
  inputWrapper: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
  },
  locationInput: {
    flex: 1,
  },
  currentLocationButton: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1F2C',
    marginTop: 16,
    marginBottom: 8,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 8,
  },
  suggestionText: {
    fontSize: 14,
    color: '#1A1F2C',
    marginLeft: 8,
  },
  listInputWrapper: {
    padding: 16,
  },
  marginBottom: {
    marginBottom: 8,
  },
  currentLocationButtonFull: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  currentLocationText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#9b87f5',
    fontWeight: '500',
  },
  directionIconContainer: {
    alignItems: 'center',
  },
  directionIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -16,
    zIndex: 1,
  },
  addressCard: {
    marginBottom: 8,
  },
  savedAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  addressIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  addressDetails: {
    flex: 1,
  },
  addressName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1F2C',
  },
  addressText: {
    fontSize: 12,
    color: '#6B7280',
  },
  selectButton: {
    padding: 8,
  },
  selectButtonText: {
    color: '#9b87f5',
    fontSize: 14,
    fontWeight: '500',
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

export default LocationPickerScreen;
