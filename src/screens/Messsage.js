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
        <BackButton navigation={navigation} />
        <View style={styles.centerContainer}>
          <View style={styles.childContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.leftStyle} styleKey="highlightTextColor">
                message
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Image source={search} style={styles.searchStyle} />
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
        <UserItems
          image={user1}
          title="John Rhoades"
          content="Hey How are you ?"
        />
        <UserItems
          image={user2}
          title="ds Chiogna"
          content="Yeah, it’s been great! Are you enjoying it too?"
          notificationCount={1}
        />
        <UserItems
          image={user3}
          title="D Afzal-khan"
          content="love this song – do you like this kind of music?"
        />
        <UserItems
          image={user4}
          title="L Seheult"
          content="I loved visiting New York. Are there things you.."
          notificationCount={6}
        />
        <UserItems
          image={user5}
          title="F Casteris"
          content="So, what do you do for a living? ..."
        />
        <UserItems
          image={user6}
          title="Michal Franci"
          content="These are great! I absolutely hate small talk, but "
        />
        <UserItems
          image={user7}
          title="Moore Torff"
          content="do you like this kind of music? "
        />
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
    paddingTop: 20,
  },
  extraStyle: {
    flex: 1,
    alignItems: 'flex-end',
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
    width: '100%',
    height: 130,
  },
  searchStyle: {
    justifyContent: 'center',
    width: 20,
    height: 20,
  },
  addStyle: {
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  textStyle: {
    fontSize: 24,
    paddingTop: 10,
  },
  leftStyle: {
    fontSize: 20,
    textAlign: 'left',
    paddingRight: 10,
    fontWeight: 'bold',
  },
});
