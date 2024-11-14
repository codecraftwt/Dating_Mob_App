import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackButton from '../components/Common/BackButton';
import {Image} from 'react-native-elements';
import UserItems from '../components/Common/UserItems';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Responsive';

const ImagePath = require('../assets/images/rectangle-3.png');
const search = require('../assets/images/search.png');
const add = require('../assets/images/add-message.png');
const user1 = require('../assets/images/call.jpg');
const user2 = require('../assets/images/new-profile.jpg');
const user3 = require('../assets/images/profile5.jpg');
const user4 = require('../assets/images/new-profile4.jpg');
const user5 = require('../assets/images/new-profile3.jpg');
const user6 = require('../assets/images/new-profile2.jpg');
const user7 = require('../assets/images/searching.jpg');

const Messsage = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={ImagePath} style={styles.imageStyle}>
        <View style={styles.centerContainer}>
          <BackButton navigation={navigation} />
          <Text style={styles.leftStyle} styleKey="highlightTextColor">
            message
          </Text>
          <View style={styles.rightContainer}>
            <Image source={search} style={styles.searchStyle} />
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={{marginBottom: 40}}>
        <View style={styles.childContainer}>
          <View style={[styles.rightContainer, styles.extraStyle]}>
            <TouchableOpacity>
              <Image source={add} style={styles.addStyle} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <UserItems
            image={user1}
            title="John Rhoades"
            content="Hey How are you ?"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <UserItems
            image={user2}
            title="ds Chiogna"
            content="Yeah, it’s been great! Are you enjoying it too?"
            notificationCount={1}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <UserItems
            image={user3}
            title="D Afzal-khan"
            content="love this song – do you like this kind of music?"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <UserItems
            image={user4}
            title="L Seheult"
            content="I loved visiting New York. Are there things you.."
            notificationCount={6}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <UserItems
            image={user5}
            title="F Casteris"
            content="So, what do you do for a living? ..."
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <UserItems
            image={user6}
            title="Michal Franci"
            content="These are great! I absolutely hate small talk, but "
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <UserItems
            image={user7}
            title="Moore Torff"
            content="do you like this kind of music? "
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Messsage;

const styles = StyleSheet.create({
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
    paddingRight: horizontalScale(25),
    paddingTop: verticalScale(27),
  },
  centerContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(20),
  },
  extraStyle: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backIcon: {
    fontSize: moderateScale(25),
    paddingTop: verticalScale(20),
    paddingLeft: horizontalScale(20),
  },
  imageStyle: {
    width: '100%',
    height: verticalScale(150),
  },
  searchStyle: {
    justifyContent: 'center',
    width: horizontalScale(15),
    height: verticalScale(20),
  },
  addStyle: {
    justifyContent: 'center',
    width: horizontalScale(30),
    height: verticalScale(38),
  },
  textStyle: {
    fontSize: moderateScale(24),
    paddingTop: verticalScale(10),
  },
  leftStyle: {
    fontSize: moderateScale(20),
    textAlign: 'left',
    paddingTop: verticalScale(20),
    paddingRight: horizontalScale(30),
    fontWeight: 'bold',
  },
});
