import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'; // Make sure you have this installed

const CustomButton = ({ title, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      disabled={isLoading}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <Text style={styles.buttonText}>Loading...</Text>
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8157DD',
    height: RFValue(45),
    width: '100%',
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(10),
  },
  buttonText: {
    color: '#FFFFFF', // Change text color as needed
    fontSize: RFValue(16), // Adjust font size as needed
  },
});

export default CustomButton;
