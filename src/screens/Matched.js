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

const ImagePath = require('../assets/images/gender.png');
const girl = require('../assets/images/new-girl.jpg');
const boy = require('../assets/images/new-boy.jpg');

const Matched = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground source={ImagePath} style={styles.imageStyle}>
          <BackButton navigation={navigation} />
          <View style={[styles.topContainer, styles.nexStyle]}>
            <Text style={[styles.textStyle, styles.specialText]}>matched</Text>
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
              Matching
            </Text>
          </View>
        </ImageBackground>
        <RoundButton
          buttonStyle={styles.inputLabel}
          label='Matching'
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
          label='Matching'
          buttonColor={lightTheme.backgroundColor}
          labelStyle={lightTheme.appColor}
          //   onPress={goToCalling}
        />
      </ScrollView>
      {/* <FooterNavigation history={history} /> */}
    </View>
  );
};

export default Matched;

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
    marginTop: 20,
    // marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  inputLabel: {
    minWidth: 230,
    paddingTop: 20,
    minHeight: 60,
    marginTop: 40,
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
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  leftMatchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'relative',
    left: 15,
  },
  title: {
    marginTop: 10,
    marginBottom: 100,
    borderWidth: 1,
  },
  iconContainer: {
    minWidth: 190,
    height: 190,
    borderRadius: 150,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  logoImage: {
    justifyContent: 'center',
    width: 130,
    height: 130,
    margin: 32,
    borderRadius: 130,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightMatchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'relative',
    right: 15,
  },
  nexStyle: {
    marginTop: 20,
    // marginBottom: 30,
  },
  specialText: {
    fontSize: 32,
  },
  imageStyle: {
    width: '100%',
    height: 480,
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  messageContent: {
    width: 180,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
});
