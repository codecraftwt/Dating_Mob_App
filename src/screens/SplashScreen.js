import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
    paddingBottom: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    minWidth: 200,
  },
  button2: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    minWidth: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignContent: 'flex-end',
    paddingRight: 30,
    paddingLeft: 40,
  },
  sloganContainer: {
    width: 245,
    paddingTop: 50,
  },
});
