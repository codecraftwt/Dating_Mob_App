import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Responsive';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleNavigationToRegister = () => {
    navigation.navigate('Gender');
  };

  const handleNavigationToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground
      source={require('../assets/images/main-banner.jpg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <View style={styles.sloganContainer}>
            <Text style={styles.title}>Meet And Share Every Moment</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button2}
            onPress={handleNavigationToLogin}>
            <Text style={styles.buttonText2}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigationToRegister}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(50),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    color: '#fff',
    marginBottom: verticalScale(20),
    fontStyle: 'italic',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
  button: {
    backgroundColor: '#FF0000',
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    marginVertical: verticalScale(10),
    minWidth: horizontalScale(200),
  },
  button2: {
    backgroundColor: '#ffffff',
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    marginVertical: verticalScale(10),
    minWidth: horizontalScale(200),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#000',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignContent: 'flex-end',
    paddingRight: horizontalScale(30),
    paddingLeft: horizontalScale(40),
  },
  sloganContainer: {
    width: horizontalScale(245),
    paddingTop: verticalScale(50),
  },
});
