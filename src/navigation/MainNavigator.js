
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';

// Auth Screens
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

// Tab Navigator
import TabNavigator from './TabNavigator';

// Booking Flow
import LocationPickerScreen from '../screens/booking/LocationPickerScreen';
import VehicleSelectorScreen from '../screens/booking/VehicleSelectorScreen';
import BookingConfirmationScreen from '../screens/booking/BookingConfirmationScreen';
import OrderTrackingScreen from '../screens/tracking/OrderTrackingScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isAuthenticated ? (
        // Auth Screens
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        // Main App Screens
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="LocationPicker" component={LocationPickerScreen} />
          <Stack.Screen name="VehicleSelector" component={VehicleSelectorScreen} />
          <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
          <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
