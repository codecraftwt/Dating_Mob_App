import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackButton from '../components/Common/BackButton';
import {Icon, Image} from 'react-native-elements';
import {lightTheme} from '../assets/themes';
import RoundButton from '../components/Common/RoundButton';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getUserData} from '../utils/StorageUtils';
import {useDispatch, useSelector} from 'react-redux';
import {userProfile} from '../Redux/slices/ProfileSlice';
import {logoutUser} from '../Redux/slices/UserSlice';
import Toast from 'react-native-toast-message';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Responsive';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const user = useSelector(state => state?.profile?.profileData?.data?.user);

  console.log(user, 'user');

  const fetchUserData = async () => {
    try {
      const userdata = await getUserData();
      const userdataa = JSON.parse(userdata);
      setUserData(userdataa || {});
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData && userData._id) {
      dispatch(userProfile(userData._id));
    }
  }, [userData, dispatch]);

  const handleLogout = () => {
    console.log('handleLogout');
    dispatch(logoutUser()).then(({payload}) => {
      if (payload.status == 200) {
        Toast.show({
          type: 'success',
          text1: payload.message,
          position: 'bottom',
        });
        navigation.navigate('LoginSelect');
      }
    });
  };

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
          <TouchableOpacity
            style={styles.rightContainer}
            onPress={handleLogout}>
            <Text styleKey="inputColor" style={styles.textStyle}>
              Sign Out
            </Text>
          </TouchableOpacity>
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
    paddingRight: horizontalScale(50),
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputLabel: {
    minWidth: horizontalScale(160),
    paddingTop: verticalScale(10),
    minHeight: verticalScale(20),
    marginTop: verticalScale(0),
    borderRadius: moderateScale(50),
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
    paddingTop: verticalScale(17),
    paddingLeft: horizontalScale(5),
  },
  title: {
    marginLeft: horizontalScale(30),
    marginRight: horizontalScale(50),
    paddingBottom: verticalScale(10),
  },
  Icon: {
    paddingLeft: horizontalScale(30),
  },
  backIcon: {
    fontSize: moderateScale(25),
    paddingTop: verticalScale(20),
    paddingLeft: horizontalScale(25),
  },
  logoImage: {
    justifyContent: 'center',
    width: horizontalScale(120),
    height: verticalScale(150),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(150),
    marginTop: verticalScale(130),
  },
  textStyle: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    paddingLeft: horizontalScale(10),
  },
  extraStyle: {
    paddingBottom: verticalScale(70),
  },
  nexStyle: {
    marginTop: verticalScale(100),
  },
  specialText: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  imageStyle: {
    width: '100%',
    height: verticalScale(275),
  },
  iconImage: {
    width: horizontalScale(20),
    height: verticalScale(20),
    marginLeft: horizontalScale(30),
    marginTop: verticalScale(20),
  },
});
