import React, { useEffect } from 'react';
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import RoundButton from '../../components/Common/RoundButton';
import { lightTheme } from '../../assets/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/Common/BackButton';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Responsive';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'; // If using Firebase for authentication
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const ForgetPassword = ({ navigation }) => {

  GoogleSignin.configure({
    webClientId: '101531147191-ti2rnp0frtqf75d0e64vca3fca0ivn81.apps.googleusercontent.com', 
    scopes: ['email', 'profile'], 
  });
  

  const signIn = async () => {
    try {
      const hasServices = await GoogleSignin.hasPlayServices();
      console.log('Google Play Services available:', hasServices);
      if (!hasServices) {
        alert('Play services are not available or outdated.');
        return;
      }
  
      const signInResult = await GoogleSignin.signIn();
      console.log('Sign-In Result:', signInResult);  // Check the signInResult object for idToken
      
      const { idToken } = signInResult;
      if (!idToken) {
        throw new Error('No ID token found');
      }
  
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('bottomtabbar');
    } catch (error) {
      console.log('Google Sign-In error:', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User cancelled the login flow.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Sign-in is already in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play services are not available or outdated. Please update Google Play Services.');
      } else {
        alert('An unknown error occurred during sign-in. Please try again.');
      }
    }
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/images/dual-tone.png')}
          style={styles.imageStyle}
          resizeMode="cover">
          <BackButton navigation={navigation} />
          <View style={[styles.topContainer, styles.extraStyle]}>
            <View style={[styles.forgetContainer, { backgroundColor: '#fff' }]}>
              <Image
                source={require('../../assets/images/app-logo.png')}
                style={styles.logoImage}
              />
            </View>
          </View>
          <View style={[styles.topContainer, styles.nexStyle]}>
            <Text style={[styles.textStyle, styles.specialText]}>
              Forget Password
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <RoundButton
              buttonStyle={styles.inputLabel}
              label={'Email or Phone'}
              buttonColor={lightTheme.forgetColor}
              labelStyle={lightTheme.highlightTextColor}
            />
            <RoundButton
              buttonStyle={styles.inputLabel}
              label={'Reset Password'}
              buttonColor={lightTheme.backgroundColor}
              labelStyle={lightTheme.appColor}
            />
            <View style={styles.childContainer}>
              <Text style={styles.forgotPassword}>or Create New Account</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContent}>
          <View style={styles.childContainer}>
            <View
              style={[styles.iconContainer, { backgroundColor: lightTheme.facebookColor }]}>
              <Icon
                name="facebook"
                size={30}
                color={lightTheme.highlightTextColor}
                style={styles.Icon}
              />
            </View>
            <View
              style={[styles.iconContainer, { backgroundColor: lightTheme.googleColor }]}>
              <TouchableOpacity onPress={signIn}>
                <Icon
                  name="google"
                  size={30}
                  color={lightTheme.highlightTextColor}
                  style={styles.Icon}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[styles.iconContainer, { backgroundColor: lightTheme.twitterColor }]}>
              <Icon
                name="twitter"
                size={30}
                color={lightTheme.highlightTextColor}
                style={styles.Icon}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  forgetContainer: {
    width: horizontalScale(80),
    height: verticalScale(100),
    alignContent: 'center',
    paddingLeft: horizontalScale(15),
    justifyContent: 'center',
    borderRadius: moderateScale(50),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: horizontalScale(10),
    paddingRight: horizontalScale(10),
    marginTop: verticalScale(80),
    marginBottom: verticalScale(20),
  },
  logoImage: {
    justifyContent: 'center',
    width: horizontalScale(50),
    height: verticalScale(40),
  },
  extraStyle: {
    marginTop: verticalScale(120),
    marginBottom: verticalScale(10),
  },
  textStyle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  specialText: {
    fontSize: moderateScale(32),
    textTransform: 'capitalize',
    color: '#ffffff',
  },
  nexStyle: {
    marginTop: 0,
    marginBottom: verticalScale(30),
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
  inputLabel: {
    minWidth: moderateScale(230),
    marginTop: verticalScale(0),
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  forgotPassword: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
    fontSize: moderateScale(16),
    alignSelf: 'flex-start',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  iconContainer: {
    margin: moderateScale(12),
    minWidth: moderateScale(50),
    height: verticalScale(60),
    borderRadius: moderateScale(50),
  },
  Icon: {
    fontSize: moderateScale(25),
    padding: moderateScale(14),
    justifyContent: 'center',
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    width: '100%',
    height: moderateScale(550),
  },
});
