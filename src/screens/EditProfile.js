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
    paddingTop: 80,
    // paddingRight: 30,
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
    height: 45,
    paddingLeft: 10,
    fontSize: 18,
  },
  layoutContainer: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 25,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 50,
  },
  extraContainer: {
    marginTop: 25,
    marginBottom: 50,
  },
  inputLabel: {
    minWidth: 150,
    paddingTop: 10,
    minHeight: 30,
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
  title: {
    marginLeft: 30,
    marginRight: 50,
    paddingBottom: 10,
  },
  inputStyle: {
    paddingTop: 0,
    flex: 3,
    paddingLeft: 5,
  },
  labelStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
  },
  Icon: {
    paddingLeft: 30,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: lightTheme.backgroundColor,
    borderRadius: 50,
    padding: 5,
  },
  logoImage: {
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderWidth: 5,
    borderRadius: 150,
    marginTop: 70,
  },
  specialStyle: {
    marginLeft: 180,
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
    marginTop: 60,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 40,
    borderRadius: 10,
  },
  modalTitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
  optionText: {fontSize: 16, marginVertical: 10},
  cancelText: {fontSize: 16, color: 'red', marginTop: 20, textAlign: 'center'},
});
