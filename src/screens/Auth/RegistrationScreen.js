import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../components/Common/Input';
import RoundButton from '../../components/Common/RoundButton';
import {lightTheme} from '../../assets/themes';
import {
  clearRegistration,
  registerUser,
  setFields,
} from '../../Redux/slices/UserRegisterSlice';
import {useDispatch, useSelector} from 'react-redux';
import BackButton from '../../components/Common/BackButton';
import Toast from 'react-native-toast-message';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Responsive';

const {height, width} = Dimensions.get('window');

const RegistrationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const data = useSelector(state => state.userRegister.data);

  const handleRegister = async () => {
    if (!username || !email || !phone || !password || !confirmPassword) {
      alert('Please fill all the fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const formData = {
      username: username,
      email: email,
      mobile: phone,
      password: password,
      confirmPassword: confirmPassword,
    };
    const mergedData = {
      ...data,
      ...formData,
    };
    dispatch(setFields(formData));
    await handleSignIn(mergedData);
  };

  const handleSignIn = async mergedData => {
    try {
      dispatch(registerUser(mergedData)).then(({payload}) => {
        if (payload && payload.status == 201) {
          dispatch(clearRegistration());
          Toast.show({
            type: 'success',
            text1: 'Registration Successful',
            position: 'bottom',
          });
          navigation.navigate('bottomtabbar');
        }
      });
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  useEffect(() => {
    console.log('Updated Redux Data:', data);
  }, [data]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={require('../../assets/images/dual-tone.png')}
          style={styles.background}
          resizeMode="cover">
          <BackButton navigation={navigation} />
          <View style={[styles.topContainer, styles.imageContainer]}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logoImage}
            />
          </View>
          <View style={[styles.topContainer, styles.titleContainer]}>
            <Text
              styleKey="highlightTextColor"
              style={[styles.textStyle, styles.titleStyle]}>
              RECRAFT DATING
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.card}>
          <Text style={styles.signInText}>Sign Up Account</Text>
          <Input
            placeholder="Username"
            onChangeText={text => setUserName(text)}
            value={username}
            icon="user"
            choose={true}
          />
          <Input
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            icon="email"
            choose={false}
          />
          <Input
            placeholder="Phone"
            onChangeText={text => setPhone(text)}
            value={phone}
            icon="mobile1"
            choose={true}
          />
          <Input
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            icon="key"
            choose={true}
            iconStyle={{transform: [{rotate: '80deg'}]}}
          />
          <Input
            placeholder="Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            secureTextEntry={true}
            icon="key"
            confirmIcon={true}
          />
          <View style={[styles.searchContainer, styles.checkContainer]}>
            <View style={styles.iconStyle}>
              <TouchableOpacity>
                <MaterialIcon
                  name={'checkbox-blank-outline'}
                  size={15}
                  color={''}
                  style={{marginBottom: 6}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.checkText} styleKey="textColor">
                I agree terms of use and privacy policy
              </Text>
            </View>
          </View>
          <RoundButton
            buttonStyle={styles.signButton}
            label="SignUp"
            buttonColor={lightTheme.appColor}
            labelStyle={lightTheme.highlightTextColor}
            onPress={handleRegister}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: height * 0.7,
  },
  card: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.35,
    width: '80%',
    alignSelf: 'center',
    padding: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(25),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: moderateScale(0.2),
    shadowRadius: moderateScale(2),
  },
  signInText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: verticalScale(50),
    borderWidth: moderateScale(1),
    borderColor: 'gray',
    borderRadius: moderateScale(10),
    paddingHorizontal: 10,
    marginBottom: verticalScale(10),
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: horizontalScale(10),
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(10),
  },
  text: {
    marginTop: verticalScale(20),
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  searchContainer: {
    borderBottomWidth: horizontalScale(0.5),
    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop: 10,
    paddingBottom: verticalScale(0),
  },
  iconStyle: {
    flex: 0,
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 2,
    height: verticalScale(35),
    paddingLeft: horizontalScale(10),
    marginTop: verticalScale(5),
  },
  button2: {
    backgroundColor: '#FF0000',
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    marginVertical: verticalScale(10),
    minWidth: horizontalScale(200),
  },
  buttonText2: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  forgetStyle: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
    fontSize: moderateScale(12),
  },
  forgetContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  checkContainer: {
    borderBottomWidth: 0,
    paddingTop: verticalScale(10),
  },
  signButton: {
    minWidth: horizontalScale(230),
    marginTop: verticalScale(40),
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: horizontalScale(20),
  },
  imageContainer: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  titleContainer: {
    marginTop: verticalScale(0),
    marginBottom: verticalScale(30),
  },
  textStyle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: lightTheme.highlightTextColor,
  },
  titleStyle: {
    fontSize: moderateScale(32),
    textTransform: 'capitalize',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: horizontalScale(10),
    paddingRight: horizontalScale(10),
    marginTop: verticalScale(80),
    marginBottom: verticalScale(20),
  },
  logoImage: {
    justifyContent: 'center',
    width: horizontalScale(120),
    height: verticalScale(155),
  },
});
