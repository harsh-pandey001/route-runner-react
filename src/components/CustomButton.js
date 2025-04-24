
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const getButtonStyles = () => {
    let buttonStyles = [styles.button, style];
    
    if (variant === 'primary') {
      buttonStyles.push(styles.primaryButton);
    } else if (variant === 'outline') {
      buttonStyles.push(styles.outlineButton);
    } else if (variant === 'ghost') {
      buttonStyles.push(styles.ghostButton);
    }
    
    if (disabled || loading) {
      buttonStyles.push(styles.disabledButton);
    }
    
    return buttonStyles;
  };
  
  const getTextStyles = () => {
    let textStyles = [styles.buttonText, textStyle];
    
    if (variant === 'primary') {
      textStyles.push(styles.primaryButtonText);
    } else if (variant === 'outline') {
      textStyles.push(styles.outlineButtonText);
    } else if (variant === 'ghost') {
      textStyles.push(styles.ghostButtonText);
    }
    
    if (disabled || loading) {
      textStyles.push(styles.disabledButtonText);
    }
    
    return textStyles;
  };

  return (
    <TouchableOpacity
      style={getButtonStyles()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'primary' ? '#FFFFFF' : '#9b87f5'} 
        />
      ) : (
        <Text style={getTextStyles()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#9b87f5',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  outlineButtonText: {
    color: '#1A1F2C',
  },
  ghostButtonText: {
    color: '#9b87f5',
  },
  disabledButtonText: {
    color: '#9CA3AF',
  },
});

export default CustomButton;
