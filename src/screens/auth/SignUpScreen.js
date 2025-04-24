
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
import { useToast } from 'react-native-toast-notifications';
import { useAuth } from '../../contexts/AuthContext';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Checkbox from '../../components/Checkbox';

const SignUpScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const toast = useToast();
  const { signup } = useAuth();

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSignUp = async () => {
    if (!agreeTerms) {
      toast.show('You must agree to the terms and conditions', {
        type: 'danger',
      });
      return;
    }

    if (!Object.values(formData).every(field => field)) {
      toast.show('Please fill in all required fields', {
        type: 'danger',
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await signup(formData);
      if (result.success) {
        toast.show('Account created successfully!', {
          type: 'success',
        });
        navigation.navigate('Login');
      }
    } catch (error) {
      toast.show('Sign up failed: ' + (error.message || 'Please try again'), {
        type: 'danger',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>RR</Text>
            </View>
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
              Already have an account?{' '}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate('Login')}
              >
                Sign in
              </Text>
            </Text>
          </View>

          <View style={styles.form}>
            <CustomInput
              label="Full Name"
              placeholder="John Doe"
              value={formData.fullName}
              onChangeText={(value) => handleChange('fullName', value)}
            />

            <CustomInput
              label="Email address"
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(value) => handleChange('email', value)}
            />

            <CustomInput
              label="Phone Number"
              placeholder="(123) 456-7890"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(value) => handleChange('phone', value)}
            />

            <CustomInput
              label="Password"
              placeholder="••••••••"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleChange('password', value)}
              helperText="Password must be at least 8 characters"
            />

            <Checkbox
              label={
                <Text>
                  I agree to the{' '}
                  <Text style={styles.link}>terms and conditions</Text>
                </Text>
              }
              checked={agreeTerms}
              onValueChange={setAgreeTerms}
              style={styles.checkbox}
            />

            <CustomButton
              title={isLoading ? "Creating account..." : "Create account"}
              onPress={handleSignUp}
              disabled={isLoading}
            />

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or sign up with</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialButtons}>
              <CustomButton
                title="Google"
                onPress={() => {}}
                variant="outline"
                style={styles.socialButton}
              />
              <CustomButton
                title="Facebook"
                onPress={() => {}}
                variant="outline"
                style={styles.socialButton}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9b87f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: '#1A1F2C',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 8,
    color: '#6B7280',
    textAlign: 'center',
  },
  link: {
    color: '#9b87f5',
    fontWeight: '500',
  },
  form: {
    marginTop: 20,
    marginBottom: 20,
  },
  checkbox: {
    marginVertical: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#6B7280',
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 0.48,
  },
});

export default SignUpScreen;
