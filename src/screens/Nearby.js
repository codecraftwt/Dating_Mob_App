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

const ImagePath = require('../assets/images/payment.png');
const search = require('../assets/images/search.png');
const profile1 = require('../assets/images/new-boy.jpg');
const profile2 = require('../assets/images/new-profile.jpg');

const Nearby = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={ImagePath} style={styles.imageStyle}>
        <BackButton navigation={navigation} />
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
            <View style={[styles.leftContainer, {paddingRight: 10}]}>
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
                {paddingRight: 0, paddingLeft: 10},
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
            <View style={[styles.leftContainer, {paddingRight: 10}]}>
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
                {paddingRight: 0, paddingLeft: 10},
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
    fontSize: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 20,
    marginTop: 40,
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
    paddingRight: 20,
  },
  centerContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 20,
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 20,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  searchStyle: {
    justifyContent: 'center',
    width: 20,
    height: 20,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },
  smallStyle: {
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: 15,
  },
  leftStyle: {
    fontSize: 20,
    textAlign: 'left',
    paddingRight: 10,
    fontWeight: 'bold',
  },
  rightStyle: {
    fontSize: 20,
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  extraStyle: {
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 40,
    paddingBottom: 40,
    height: 200,
  },
  profileStyle: {
    width: 180,
    height: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
