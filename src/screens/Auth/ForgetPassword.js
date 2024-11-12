import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {StyleSheet} from 'react-native';
import RoundButton from '../../components/Common/RoundButton';
import {lightTheme} from '../../assets/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/Common/BackButton';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Responsive';

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
                source={require('../../assets/images/app-logo.png')}
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
  textStyle2: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: lightTheme.highlightTextColor,
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
  button: {
    backgroundColor: '#FF0000',
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    marginVertical: verticalScale(10),
    minWidth: moderateScale(200),
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
    alignContent: 'flex-start',
    alignItems: 'flex-start',
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
