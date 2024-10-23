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
import {Icon, Image} from 'react-native-elements';
import {lightTheme} from '../assets/themes';
import RoundButton from '../components/Common/RoundButton';
// import {ScrollView} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/images/profile.png')}
        style={styles.imageStyle}>
        <BackButton navigation={navigation} />
        <View style={styles.childContainer}>
          <Image
            source={require('../assets/images/new-profile.jpg')}
            style={[
              styles.logoImage,
              {borderColor: lightTheme.backgroundColor},
            ]}
          />
        </View>
      </ImageBackground>
      <View style={[styles.childContainer, styles.nexStyle]}>
        <RoundButton
          buttonStyle={styles.inputLabel}
          label="edit profile"
          buttonColor={lightTheme.appColor}
          labelStyle={lightTheme.highlightTextColor}
          onPress={() => navigation.navigate('Edit_Profile')}
        />
      </View>
      <ScrollView>
        <TouchableOpacity
          style={[styles.backContainer, styles.title]}
          //   onPress={goToPremium}
        >
          <View style={styles.leftContainer}>
            <MaterialIcon
              name="search-web"
              size={30}
              color={lightTheme.inputColor}
              style={styles.backIcon}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text styleKey="inputColor" style={styles.textStyle}>
              Explore
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.backContainer, styles.title]}>
          <View style={styles.leftContainer}>
            <MaterialIcon
              name="gender-female"
              size={30}
              color={lightTheme.inputColor}
              style={styles.backIcon}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text styleKey="inputColor" style={styles.textStyle}>
              Matches
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backContainer, styles.title]}
          //   onPress={goToMessage}
        >
          <View style={styles.leftContainer}>
            <Image
              source={require('../assets/images/message.png')}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text styleKey="inputColor" style={styles.textStyle}>
              Chat
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.backContainer, styles.title]}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../assets/images/images.png')}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text styleKey="inputColor" style={styles.textStyle}>
              Images
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.backContainer, styles.title]}>
          <View style={styles.leftContainer}>
            <Icon
              name="play-circle"
              size={30}
              color={lightTheme.inputColor}
              style={[styles.backIcon, styles.Icon]}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text styleKey="inputColor" style={styles.textStyle}>
              Video
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backContainer, styles.title, styles.extraStyle]}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../assets/images/logout.png')}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text styleKey="inputColor" style={styles.textStyle}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {/* <FooterNavigation history={history} /> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 50,
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputLabel: {
    minWidth: 160,
    paddingTop: 10,
    minHeight: 20,
    marginTop: 0,
    borderRadius: 50,
    // marginBottom: 40,
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
  title: {
    marginLeft: 30,
    marginRight: 50,
    paddingBottom: 10,
  },
  Icon: {
    paddingLeft: 30,
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
    borderWidth: 5,
    borderRadius: 150,
    marginTop: 100,
  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  extraStyle: {
    paddingBottom: 70,
  },
  nexStyle: {
    marginTop: 100,
  },
  specialText: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  imageStyle: {
    width: '100%',
    height: 230,
  },
  iconImage: {
    width: 20,
    height: 20,
    marginLeft: 30,
    marginTop: 20,
  },
});
