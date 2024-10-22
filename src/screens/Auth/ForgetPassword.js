import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundButton from '../../components/Common/RoundButton';
import {lightTheme} from '../../assets/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/Common/BackButton';

const {height, width} = Dimensions.get('window');

const ForgetPassword = ({navigation}) => {
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
                source={require('../../assets/images/dual-tone.png')}
                style={styles.logoImage}
              />
            </View>
          </View>
          <View style={[styles.topContainer, styles.nexStyle]}>
            <Text
              styleKey="highlightTextColor"
              style={[styles.textStyle, styles.specialText]}>
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
              <Text style={styles.forgotPassword} styleKey="highlightTextColor">
                {'or Create New Account'}
              </Text>
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
              <Icon
                name="google"
                size={30}
                color={lightTheme.highlightTextColor}
                style={styles.Icon}
              />
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
    width: 100,
    height: 100,
    alignContent: 'center',
    paddingLeft: 25,
    justifyContent: 'center',
    borderRadius: 50,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
    marginBottom: 20,
  },
  logoImage: {
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  extraStyle: {
    marginTop: 120,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textStyle2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: lightTheme.highlightTextColor,
  },
  specialText: {
    fontSize: 32,
    textTransform: 'capitalize',
    color: '#ffffff',
  },
  nexStyle: {
    marginTop: 0,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    minWidth: 200,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputLabel: {
    minWidth: 230,
    marginTop: 0,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  forgotPassword: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  iconContainer: {
    margin: 12,
    minWidth: 50,
    height: 50,
    borderRadius: 50,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: 'center',
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    width: '100%',
    height: 550,
  },
});
