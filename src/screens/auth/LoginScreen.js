
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const toast = useToast();
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.show('Please enter email and password', {
        type: 'danger',
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await login(email, password);
      if (result.success) {
        toast.show('Login successful', {
          type: 'success',
        });
      }
    } catch (error) {
      toast.show('Login failed: ' + (error.message || 'Please check your credentials'), {
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
            <Text style={styles.title}>Sign in to your account</Text>
            <Text style={styles.subtitle}>
              Or{' '}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate('SignUp')}
              >
                create a new account
              </Text>
            </Text>
          </View>

          <View style={styles.form}>
            <CustomInput
              label="Email address"
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <CustomInput
              label="Password"
              placeholder="••••••••"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              rightLabel="Forgot password?"
              onRightLabelPress={() => {
                // Handle forgot password
                toast.show('Password reset functionality will be implemented soon', {
                  type: 'info',
                });
              }}
            />

            <CustomButton
              title={isLoading ? "Signing in..." : "Sign in"}
              onPress={handleLogin}
              disabled={isLoading}
            />

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or continue with</Text>
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

export default LoginScreen;
