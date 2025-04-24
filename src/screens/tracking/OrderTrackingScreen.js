
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';

const OrderTrackingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [trackingProgress, setTrackingProgress] = useState(25);
  const [currentStatus, setCurrentStatus] = useState('Pickup');
  
  const orderId = route.params?.orderId || 'DL12345';
  
  const orderDetails = {
    orderId: orderId,
    driverName: 'John Smith',
    driverPhone: '+1 555-123-4567',
    vehicleType: 'Mini Truck',
    vehicleNumber: 'AB 1234 CD',
    estimatedDelivery: '12:45 PM',
  };
  
  // Mock tracking data
  const trackingSteps = [
    {
      id: 'order-placed',
      name: 'Order Placed',
      time: '11:30 AM',
      icon: 'package-variant',
      isCompleted: true,
    },
    {
      id: 'pickup',
      name: 'Pickup',
      time: '12:10 PM',
      icon: 'map-marker',
      isCompleted: true,
    },
    {
      id: 'in-transit',
      name: 'In Transit',
      time: '12:25 PM',
      icon: 'truck-delivery',
      isCompleted: false,
    },
    {
      id: 'delivered',
      name: 'Delivered',
      time: '-- : --',
      icon: 'check-circle',
      isCompleted: false,
    },
  ];
  
  // Simulate real-time progress updates
  useEffect(() => {
    const statusMap = {
      25: 'Pickup',
      50: 'In Transit',
      100: 'Delivered',
    };
    
    const timer = setTimeout(() => {
      if (trackingProgress < 100) {
        const newProgress = trackingProgress + 25;
        setTrackingProgress(newProgress);
        setCurrentStatus(statusMap[newProgress] || currentStatus);
        
        // Update tracking steps
        if (newProgress === 50) {
          trackingSteps[2].isCompleted = true;
        } else if (newProgress === 100) {
          trackingSteps[3].isCompleted = true;
          trackingSteps[3].time = '12:45 PM';
        }
      }
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [trackingProgress, currentStatus]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Track Order"
        showBack
        rightContent={
          <Text style={styles.orderNumber}>Order #{orderDetails.orderId}</Text>
        }
      />
      
      <ScrollView style={styles.scrollView}>
        {/* Status Card */}
        <Card style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <View>
              <Text style={styles.statusTitle}>{currentStatus}</Text>
              <Text style={styles.statusSubtitle}>
                Estimated delivery by {orderDetails.estimatedDelivery}
              </Text>
            </View>
            <View style={styles.statusIconContainer}>
              {trackingProgress === 100 ? (
                <Icon name="check-circle" size={28} color="#22C55E" />
              ) : (
                <Icon name="clock-outline" size={28} color="#9b87f5" />
              )}
            </View>
          </View>
          
          <View style={styles.progressBarContainer}>
            <ProgressBar progress={trackingProgress} />
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>Order placed</Text>
              <Text style={styles.progressLabel}>Pickup</Text>
              <Text style={styles.progressLabel}>In transit</Text>
              <Text style={styles.progressLabel}>Delivered</Text>
            </View>
          </View>
        </Card>
        
        {/* Map Area (Mock) */}
        <View style={styles.mapContainer}>
          <Text style={styles.mapPlaceholder}>
            Map View (Google Maps integration would go here)
          </Text>
        </View>
        
        {/* Driver Info */}
        <Card style={styles.driverCard}>
          <Text style={styles.cardTitle}>Delivery Agent</Text>
          
          <View style={styles.driverInfo}>
            <View style={styles.driverAvatar}>
              <Text style={styles.driverInitials}>
                {orderDetails.driverName.split(' ').map(n => n[0]).join('')}
              </Text>
            </View>
            
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>{orderDetails.driverName}</Text>
              <Text style={styles.vehicleDetails}>
                {orderDetails.vehicleType} • {orderDetails.vehicleNumber}
              </Text>
            </View>
            
            <View style={styles.contactButtons}>
              <TouchableOpacity style={styles.contactButton}>
                <Icon name="phone" size={16} color="#9b87f5" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactButton}>
                <Icon name="message-text" size={16} color="#9b87f5" />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        
        {/* Tracking Steps */}
        <Card style={styles.trackingCard}>
          <Text style={styles.cardTitle}>Tracking Details</Text>
          
          <View style={styles.trackingSteps}>
            {trackingSteps.map((step, index) => {
              const isActive = index === trackingSteps.findIndex(s => !s.isCompleted) - 1;
              
              return (
                <View key={step.id} style={styles.trackingStep}>
                  <View style={styles.stepIconColumn}>
                    <View
                      style={[
                        styles.stepIconContainer,
                        step.isCompleted && styles.completedStepIcon,
                        isActive && styles.activeStepIcon,
                      ]}
                    >
                      <Icon
                        name={step.icon}
                        size={16}
                        color={
                          step.isCompleted
                            ? '#22C55E'
                            : isActive
                              ? '#9b87f5'
                              : '#9CA3AF'
                        }
                      />
                    </View>
                    {index < trackingSteps.length - 1 && (
                      <View
                        style={[
                          styles.stepConnector,
                          step.isCompleted && styles.completedStepConnector,
                        ]}
                      />
                    )}
                  </View>
                  
                  <View style={styles.stepContent}>
                    <View style={styles.stepHeader}>
                      <Text style={styles.stepName}>{step.name}</Text>
                      <Text style={styles.stepTime}>{step.time}</Text>
                    </View>
                    <Text style={styles.stepDescription}>
                      {step.id === 'order-placed' && 'Your order has been placed successfully.'}
                      {step.id === 'pickup' && 'Your package has been picked up.'}
                      {step.id === 'in-transit' && 'Your package is on its way to the destination.'}
                      {step.id === 'delivered' && 'Your package has been delivered successfully.'}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </Card>
      </ScrollView>
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
  orderNumber: {
    fontSize: 14,
    color: '#F3E8FF',
  },
  statusCard: {
    margin: 16,
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1F2C',
    marginBottom: 4,
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    marginBottom: 10,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: '#6B7280',
    flex: 1,
    textAlign: 'center',
  },
  mapContainer: {
    height: 200,
    margin: 16,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    color: '#6B7280',
  },
  driverCard: {
    margin: 16,
    marginTop: 0,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1F2C',
    marginBottom: 16,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  driverInitials: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1F2C',
    marginBottom: 4,
  },
  vehicleDetails: {
    fontSize: 14,
    color: '#6B7280',
  },
  contactButtons: {
    flexDirection: 'row',
  },
  contactButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  trackingCard: {
    margin: 16,
    marginTop: 0,
    marginBottom: 32,
  },
  trackingSteps: {
    
  },
  trackingStep: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  stepIconColumn: {
    alignItems: 'center',
    width: 32,
  },
  stepIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedStepIcon: {
    backgroundColor: '#DCFCE7',
  },
  activeStepIcon: {
    backgroundColor: '#F3E8FF',
  },
  stepConnector: {
    width: 2,
    height: 40,
    backgroundColor: '#E5E7EB',
    marginVertical: 4,
  },
  completedStepConnector: {
    backgroundColor: '#86EFAC',
  },
  stepContent: {
    flex: 1,
    marginLeft: 12,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  stepName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1F2C',
  },
  stepTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  stepDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default OrderTrackingScreen;
