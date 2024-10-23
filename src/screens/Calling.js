import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackButton from '../components/Common/BackButton';
import { lightTheme } from '../assets/themes';
import { Image } from 'react-native-elements';
import Ions from 'react-native-vector-icons/MaterialIcons';

const ImagePath = require("../assets/images/gender.png");
const Call = require("../assets/images/call.jpg");

const Calling = ({navigation}) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground source={ImagePath} style={styles.imageStyle}>
          <BackButton navigation={navigation}/>
          <View style={[styles.topContainer, styles.extraStyle]}>
            <View
              style={[
                styles.forgetContainer,
                {borderColor: lightTheme.backgroundColor},
              ]}>
              <Image source={Call} style={styles.logoImage} />
            </View>
          </View>
          <View style={[styles.topContainer, styles.nexStyle]}>
            <Text
              styleKey="highlightTextColor"
              style={[styles.textStyle, styles.specialText]}>
              John Rhoades
            </Text>
          </View>
          <View style={styles.childContainer}>
            <Text
              style={styles.forgotPassword}
              styleKey="highlightTextColor">
              calling
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContent}>
          <View style={styles.childContainer}>
            <TouchableOpacity
            //  onPress={goToVideo}
             >
              <View style={[styles.iconContainer, {backgroundColor: 'green'}]}>
                <Ions
                  name="call"
                  size={50}
                  color={lightTheme.highlightTextColor}
                  style={styles.Icon}
                />
              </View>
              <Text style={styles.genderStyle} styleKey="textColor">
                Confirm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor:lightTheme.googleColor},
                ]}>
                <Ions
                  name="call-end"
                  size={50}
                  color={lightTheme.highlightTextColor}
                  style={styles.IconExtra}
                />
              </View>
              <Text style={styles.genderStyle} styleKey="textColor">
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Calling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
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
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 20,
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputLabel: {
    minWidth: 230,
    paddingTop: 20,
    minHeight: 60,
    marginTop: 0,
    borderRadius: 50,
    marginBottom: 30,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 17,
    paddingLeft: 5,
  },
  forgotPassword: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  genderStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  forgetContainer: {
    width: 170,
    height: 170,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 170,
    borderWidth: 10,
  },
  title: {
    marginTop: 10,
  },
  iconContainer: {
    margin: 12,
    marginLeft: 40,
    marginRight: 40,
    minWidth: 80,
    height: 80,
    borderRadius: 50,
    padding: 15,
  },
  Icon: {
    justifyContent: 'center',
    paddingLeft: 5,
  },
  IconExtra: {
    justifyContent: 'center',
    paddingLeft: 7,
    transform: [{rotate: '135deg'}],
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  logoImage: {
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  extraStyle: {
    marginTop: 80,
    marginBottom: 10,
  },
  nexStyle: {
    marginTop: 30,
    marginBottom: 5,
  },
  specialText: {
    fontSize: 36,
    textTransform: 'capitalize',
  },
  imageStyle: {
    width: '100%',
    height: 450,
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 50,
  },
});
