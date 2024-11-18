import React, {useEffect} from 'react';
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
import {lightTheme} from '../../assets/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/Common/BackButton';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Responsive';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'; // If using Firebase for authentication
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const ForgetPassword = () => {
  const WEB_CLIIENT_ID =
    '809433838577-f3dtkftpj04qe12b7im6o92r4nff72nl.apps.googleusercontent.com';
  GoogleSignin.configure({
    webClientId: WEB_CLIIENT_ID,
  });
  const signInWithGoogle = async () => {
    console.log('signIn Button pressed');
    try {
      await GoogleSignin.hasPlayServices();
      console.log('hello');
      const userInfo = await GoogleSignin.signIn();
      console.log('hello');
      const {idToken} = userInfo.data;

      console.log(idToken, 'idToken');
      // dispatch(signIn(idToken)).then(action => {
      //   console.log(action.payload)
      //   if (action.payload.user) {
      //     if(!action.payload.user.nickName){
      //       navigation.navigate('Nikname')
      //     }else if(!action.payload.user.gender){
      //       navigation.navigate('Gender')
      //     }else if(!action.payload.user.dob){
      //       navigation.navigate('Birthdate')
      //     }else{
      //       navigation.navigate('BottomNavigation', { screen: 'Chats' } );
      //     }
      //   }
      // });
      navigation.navigate('bottomtabbar');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/images/dual-tone.png')}
          style={styles.imageStyle}
          resizeMode="cover">
          <BackButton navigation={navigation} />
          <View style={[styles.topContainer, styles.extraStyle]}>
            <View style={[styles.forgetContainer, {backgroundColor: '#fff'}]}>
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
              style={[
                styles.iconContainer,
                {backgroundColor: lightTheme.facebookColor},
              ]}>
              <Icon
                name="facebook"
                size={30}
                color={lightTheme.highlightTextColor}
                style={styles.Icon}
              />
            </View>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: lightTheme.googleColor},
              ]}>
              <TouchableOpacity onPress={signInWithGoogle}>
                <Icon
                  name="google"
                  size={30}
                  color={lightTheme.highlightTextColor}
                  style={styles.Icon}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: lightTheme.twitterColor},
              ]}>
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
