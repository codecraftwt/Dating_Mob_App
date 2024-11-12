import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../components/Common/BackButton';
import {lightTheme} from '../assets/themes';
import { Image } from 'react-native-elements';
import RoundButton from '../components/Common/RoundButton';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Responsive';

const ImagePath = require('../assets/images/gender.png');
const girl = require('../assets/images/new-girl.jpg');
const boy = require('../assets/images/new-boy.jpg');

const Matched = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
        <ImageBackground source={ImagePath} style={styles.imageStyle}>
          <BackButton navigation={navigation} />
          <View style={[styles.topContainer, styles.nexStyle]}>
            <Text style={[styles.textStyle, styles.specialText]}>Its a Match!</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomContent}>
              <View style={styles.childContainer}>
                <View style={[styles.iconContainer, styles.leftMatchContainer]}>
                  <Image source={girl} style={styles.logoImage} />
                </View>
                <View
                  style={[styles.iconContainer, styles.rightMatchContainer]}>
                  <Image source={boy} style={styles.logoImage} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.childContainer}>
            <Text style={[styles.forgotPassword, styles.messageContent]}>
              You and Jessica have liked each other
            </Text>
          </View>
        </ImageBackground>
        <RoundButton
          buttonStyle={styles.inputLabel}
          label='Send Message'
          buttonColor={lightTheme.appColor}
          labelStyle={lightTheme.highlightTextColor}
          //   onPress={goToSearching}
        />
        <RoundButton
          buttonStyle={[
            styles.inputLabel,
            styles.title,
            {borderColor: lightTheme.inputColor},
          ]}
          label='Send Gifts'
          buttonColor={lightTheme.backgroundColor}
          labelStyle={lightTheme.appColor}
          //   onPress={goToCalling}
        />
      {/* <FooterNavigation history={history} /> */}
    </View>
  );
};

export default Matched;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: horizontalScale(35),
    paddingRight: horizontalScale(35),
    fontSize: moderateScale(16),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: horizontalScale(10),
    paddingRight: horizontalScale(10),
    marginTop: verticalScale(20),
    // marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop:verticalScale(10),
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: horizontalScale(20),
  },
  inputLabel: {
    minWidth: horizontalScale(230),
    paddingTop: verticalScale(20),
    minHeight: verticalScale(60),
    marginTop: verticalScale(40),
    borderRadius: moderateScale(50),
    marginBottom: verticalScale(30),
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent:'center',
    alignSelf:'center'
  },
  leftContainer: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: verticalScale(17),
    paddingLeft: horizontalScale(5),
  },
  forgotPassword: {
    marginTop: verticalScale(7),
    marginBottom: verticalScale(2),
    fontSize: moderateScale(16),
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  leftMatchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'relative',
    left: horizontalScale(15),
  },
  title: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(100),
    borderWidth: moderateScale(1),
  },
  iconContainer: {
    minWidth: horizontalScale(150),
    height: verticalScale(190),
    borderRadius: moderateScale(150),
  },
  Icon: {
    fontSize: moderateScale(25),
    padding: horizontalScale(15),
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: moderateScale(25),
    paddingTop: verticalScale(20),
    paddingLeft: horizontalScale(25),
  },
  logoImage: {
    justifyContent: 'center',
    width: horizontalScale(110),
    height: verticalScale(130),
    margin: moderateScale(25),
    borderRadius: moderateScale(130),
  },
  textStyle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  rightMatchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'relative',
    right: horizontalScale(15),
  },
  nexStyle: {
    marginTop: verticalScale(20),
  },
  specialText: {
    fontSize: moderateScale(24),
    color:lightTheme.highlightTextColor,
    textTransform: "uppercase"
  },
  imageStyle: {
    width: '100%',
    height: verticalScale(380),
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  messageContent: {
    width: horizontalScale(180),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: verticalScale(10),
    color:lightTheme.highlightTextColor
  },
});
