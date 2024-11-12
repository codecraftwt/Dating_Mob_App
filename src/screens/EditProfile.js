import {
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackButton from '../components/Common/BackButton';
import {lightTheme} from '../assets/themes';
import RoundButton from '../components/Common/RoundButton';
import {Image} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getUserData} from '../utils/StorageUtils';
import {editUserProfile, userProfile} from '../Redux/slices/ProfileSlice';
import {number} from 'prop-types';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Responsive';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [imageUri, setImageUri] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleImageSelect = async type => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    try {
      if (type === 'camera') {
        const result = await launchCamera(options);
        if (!result.didCancel && result.assets) {
          setImageUri(result.assets[0].uri);
        }
      } else if (type === 'gallery') {
        const result = await launchImageLibrary(options);
        if (!result.didCancel && result.assets) {
          setImageUri(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    } finally {
      setShowModal(false);
    }
  };

  const handleSave = () => {
    const payload = {};

    const fields = [
      {
        key: 'profilePhoto',
        newValue: imageUri,
        oldValue: user.profilePhoto,
      },
      {key: 'firstName', newValue: name, oldValue: user.firstName},
      {key: 'userName', newValue: userName, oldValue: user.userName},
      {key: 'gender', newValue: gender, oldValue: user.gender},
      {key: 'email', newValue: email, oldValue: user.email},
      {key: 'mobile', newValue: phone, oldValue: user.mobile},
    ];

    fields.forEach(field => {
      switch (field.key) {
        case 'profilePhoto':
          if (field.newValue !== field.oldValue && imageUri != '')
            payload.profilePhoto = field.newValue;
          break;
        case 'firstName':
          if (field.newValue !== field.oldValue && name != '')
            payload.firstName = field.newValue;
          break;
        case 'userName':
          if (field.newValue !== field.oldValue && userName != '')
            payload.userName = field.newValue;
          break;
        case 'gender':
          if (field.newValue !== field.oldValue && gender != '')
            payload.gender = field.newValue;
          break;
        case 'email':
          if (field.newValue !== field.oldValue && email != '')
            payload.email = field.newValue;
          break;
        case 'mobile':
          if (field.newValue !== field.oldValue && phone != '')
            payload.mobile = field.newValue;
          break;
        default:
          break;
      }
    });

    if (Object.keys(payload).length > 0) {
      dispatch(editUserProfile({id: userData._id, payload})).then(
        ({payload}) => {
          console.log(payload, 'payload');
        },
      );
    } else {
      console.log('No changes detected');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/images/profile.png')}
          style={styles.imageStyle}>
          <BackButton navigation={navigation} />
          <View style={styles.centerContainer}>
            <View style={styles.childContainer}>
              <Image
                source={
                  user.profilePhoto
                    ? {uri: user.profilePhoto}
                    : require('../assets/images/new-profile.jpg')
                }
                style={[
                  styles.logoImage,
                  {borderColor: lightTheme.backgroundColor},
                ]}
              />
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <FeatherIcon
                  name="camera"
                  size={35}
                  color={lightTheme.textColor}
                  style={styles.cameraIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.childContainer, styles.nexStyle]}>
          <Text styleKey="textColor" style={styles.textStyle}>
            {user.firstName}
          </Text>
        </View>
        <ScrollView>
          <View
            style={[
              styles.backContainer,
              styles.layoutContainer,
              {marginTop: 20, backgroundColor: lightTheme.profileColor},
            ]}>
            <View style={[styles.leftContainer, styles.addContainer]}>
              <Text styleKey="profileTextColor" style={styles.labelStyle}>
                Name
              </Text>
            </View>
            <View style={[styles.centerContainer, styles.inputStyle]}>
              <TextInput
                onChangeText={text => setName(text)}
                placeholder="John manson"
                placeholderTextColor={lightTheme.profileTextColor}
                style={[
                  styles.textContainer,
                  {color: lightTheme.profileTextColor},
                ]}>
                {user.firstName} {user.lastName}
              </TextInput>
            </View>
          </View>
          <View
            style={[
              styles.backContainer,
              styles.layoutContainer,
              {backgroundColor: lightTheme.profileColor},
            ]}>
            <View style={[styles.leftContainer, styles.addContainer]}>
              <Text styleKey="profileTextColor" style={styles.labelStyle}>
                UserName
              </Text>
            </View>
            <View style={[styles.centerContainer, styles.inputStyle]}>
              <TextInput
                onChangeText={text => setUserName(text)}
                placeholder="Add username"
                placeholderTextColor={lightTheme.profilePlaceholder}
                style={[
                  styles.textContainer,
                  {color: lightTheme.profileTextColor},
                ]}>
                {user.email}
              </TextInput>
            </View>
          </View>
          <View
            style={[
              styles.backContainer,
              styles.layoutContainer,
              {backgroundColor: lightTheme.profileColor},
            ]}>
            <View style={[styles.leftContainer, styles.addContainer]}>
              <Text styleKey="profileTextColor" style={styles.labelStyle}>
                Gender
              </Text>
            </View>
            <View style={[styles.centerContainer, styles.inputStyle]}>
              <TextInput
                onChangeText={text => setGender(text)}
                placeholder="Male/Female"
                placeholderTextColor={lightTheme.profilePlaceholder}
                style={[
                  styles.textContainer,
                  {color: lightTheme.profileTextColor},
                ]}>
                {user.gender}
              </TextInput>
            </View>
          </View>
          <View
            style={[
              styles.backContainer,
              styles.layoutContainer,
              {backgroundColor: lightTheme.profileColor},
            ]}>
            <View style={[styles.leftContainer, styles.addContainer]}>
              <Text styleKey="profileTextColor" style={styles.labelStyle}>
                Email
              </Text>
            </View>
            <View style={[styles.centerContainer, styles.inputStyle]}>
              <TextInput
                onChangeText={text => setEmail(text)}
                placeholder="Johnmanson@gmail.com"
                placeholderTextColor={lightTheme.profilePlaceholder}
                style={[
                  styles.textContainer,
                  {color: lightTheme.profileTextColor},
                ]}>
                {user.email}
              </TextInput>
            </View>
          </View>
          <View
            style={[
              styles.backContainer,
              styles.layoutContainer,
              {backgroundColor: lightTheme.profileColor},
            ]}>
            <View style={[styles.leftContainer, styles.addContainer]}>
              <Text styleKey="profileTextColor" style={styles.labelStyle}>
                Phone
              </Text>
            </View>
            <View style={[styles.centerContainer, styles.inputStyle]}>
              <TextInput
                onChangeText={text => setPhone(text)}
                placeholder="6358789523"
                placeholderTextColor={lightTheme.profilePlaceholder}
                style={[
                  styles.textContainer,
                  {color: lightTheme.profileTextColor},
                ]}>
                {user.mobile}
              </TextInput>
            </View>
          </View>

          <View style={[styles.childContainer, styles.extraContainer]}>
            <RoundButton
              onPress={handleSave}
              buttonStyle={styles.inputLabel}
              label="Save Changes"
              buttonColor={lightTheme.appColor}
              labelStyle={lightTheme.highlightTextColor}
            />
          </View>
        </ScrollView>
      </View>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose an Option</Text>
            <TouchableOpacity onPress={() => handleImageSelect('camera')}>
              <Text style={styles.optionText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImageSelect('gallery')}>
              <Text style={styles.optionText}>Choose from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: verticalScale(100),
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specialContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  addContainer: {
    flex: 1.5,
  },
  textContainer: {
    height: verticalScale(45),
    paddingLeft: horizontalScale(10),
    fontSize: moderateScale(18),
  },
  layoutContainer: {
    marginLeft: horizontalScale(40),
    marginRight: horizontalScale(40),
    marginTop: verticalScale(25),
    padding: moderateScale(10),
    paddingLeft: horizontalScale(20),
    borderRadius: moderateScale(50),
  },
  extraContainer: {
    marginTop: verticalScale(25),
    marginBottom: verticalScale(50),
  },
  inputLabel: {
    minWidth: horizontalScale(150),
    paddingTop: verticalScale(10),
    minHeight: verticalScale(30),
    marginTop: verticalScale(0),
    borderRadius: moderateScale(50),
    marginBottom: verticalScale(30),
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
  inputStyle: {
    paddingTop: verticalScale(0),
    flex: 3,
    paddingLeft: horizontalScale(5),
  },
  labelStyle: {
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
    fontSize: moderateScale(18),
  },
  Icon: {
    paddingLeft: horizontalScale(30),
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: horizontalScale(0),
    backgroundColor: lightTheme.backgroundColor,
    borderRadius: moderateScale(50),
    padding: moderateScale(5),
  },
  logoImage: {
    justifyContent: 'center',
    width: horizontalScale(110),
    height: verticalScale(150),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(150),
    marginTop: verticalScale(90),
  },
  specialStyle: {
    marginLeft: horizontalScale(180),
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
    marginTop: verticalScale(60),
  },
  specialText: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  imageStyle: {
    width: '100%',
    height: verticalScale(280),
  },
  iconImage: {
    width: horizontalScale(20),
    height: verticalScale(20),
    marginLeft: horizontalScale(30),
    marginTop: verticalScale(20),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: moderateScale(20),
    margin: moderateScale(40),
    borderRadius: moderateScale(10),
  },
  modalTitle: {fontSize: moderateScale(18), fontWeight: 'bold', marginBottom: moderateScale(20)},
  optionText: {fontSize: moderateScale(16), marginVertical: verticalScale(10)},
  cancelText: {fontSize: moderateScale(16), color: 'red', marginTop: verticalScale(20), textAlign: 'center'},
});
