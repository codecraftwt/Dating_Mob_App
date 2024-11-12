import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import BackButton from '../components/Common/BackButton';
import {Image} from 'react-native-elements';
import {lightTheme} from '../assets/themes';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Responsive';

const ImagePath = require('../assets/images/payment.png');
const search = require('../assets/images/search.png');
const profile1 = require('../assets/images/new-boy.jpg');
const profile2 = require('../assets/images/new-profile.jpg');

const Nearby = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={ImagePath} style={styles.imageStyle}>
        <View style={styles.centerContainer}>
          <View style={styles.childContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.leftStyle} styleKey="lightBottomColor">
                discover
              </Text>
              <View style={[styles.rightContainer, {paddingRight: 0}]}>
                <Text style={styles.rightStyle} styleKey="highlightTextColor">
                  nearby
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <Image source={search} style={styles.searchStyle} />
          </View>
        </View>
        <ScrollView>
          <View style={styles.childContainer}>
            <View style={[styles.leftContainer, {paddingRight: 5,paddingLeft:10}]}>
              <View
                style={[
                  styles.container,
                  {backgroundColor: lightTheme.backgroundColor},
                ]}>
                <Image source={profile1} style={styles.profileStyle} />
                <Text style={styles.textStyle} styleKey="textColor">
                  Aaron
                </Text>
                <Text style={styles.smallStyle} styleKey="textColor">
                  26, los angles
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.rightContainer,
                {paddingRight: 10, paddingLeft: 5},
              ]}>
              <View
                style={[
                  styles.container,
                  {backgroundColor: lightTheme.backgroundColor},
                ]}>
                <Image source={profile2} style={styles.profileStyle} />
                <Text style={styles.textStyle} styleKey="textColor">
                  Jennifer
                </Text>
                <Text style={styles.smallStyle} styleKey="textColor">
                  2.1 Washington (88)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.childContainer}>
            <View style={[styles.leftContainer, {paddingRight: 5,paddingLeft:10}]}>
              <View
                style={[
                  styles.container,
                  {backgroundColor: lightTheme.backgroundColor},
                ]}>
                <Image source={profile1} style={styles.profileStyle} />
                <Text style={styles.textStyle} styleKey="textColor">
                  Aaron
                </Text>
                <Text style={styles.smallStyle} styleKey="textColor">
                  26, los angles
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.rightContainer,
                {paddingRight: 10, paddingLeft: 5},
              ]}>
              <View
                style={[
                  styles.container,
                  {backgroundColor: lightTheme.backgroundColor},
                ]}>
                <Image source={profile2} style={styles.profileStyle} />
                <Text style={styles.textStyle} styleKey="textColor">
                  Jennifer
                </Text>
                <Text style={styles.smallStyle} styleKey="textColor">
                  2.1 Washington (88)
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Nearby;

const styles = StyleSheet.create({
  container: {
    fontSize: moderateScale(16),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: moderateScale(20),
    marginTop: verticalScale(40),
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  leftContainer: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 0,
    justifyContent: 'flex-end',
    paddingRight: horizontalScale(20),
  },
  centerContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: verticalScale(10),
    paddingHorizontal:2
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    fontSize: moderateScale(25),
    paddingTop: verticalScale(20),
    paddingLeft: horizontalScale(20),
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal:2
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  searchStyle: {
    justifyContent: 'center',
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  textStyle: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: verticalScale(10),
  },
  smallStyle: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: verticalScale(15),
  },
  leftStyle: {
    fontSize: moderateScale(20),
    textAlign: 'left',
    paddingRight: horizontalScale(10),
    fontWeight: 'bold',
  },
  rightStyle: {
    fontSize: moderateScale(20),
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    paddingLeft: horizontalScale(10),
  },
  extraStyle: {
    marginLeft: horizontalScale(30),
    marginRight: horizontalScale(30),
    borderRadius: moderateScale(40),
    paddingBottom: verticalScale(40),
    height: verticalScale(200),
  },
  profileStyle: {
    width: horizontalScale(180),
    height: verticalScale(220),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
});
