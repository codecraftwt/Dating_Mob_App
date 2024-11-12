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
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {lightTheme} from '../../assets/themes';
import RoundButton from '../../components/Common/RoundButton';
import Input from '../../components/Common/Input';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../Redux/slices/UserSlice';
import Toast from 'react-native-toast-message';
import BackButton from '../../components/Common/BackButton';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Responsive';

const {height, width} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state?.user?.isLoading);
  const [email, setEmail] = useState('akash1234567@gmail.com');
  const [password, setPassword] = useState('12345');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const validate = () => {
    const errors = {
      email: '',
      password: '',
    };
    if (email === '') {
      errors.email = 'Please Enter Email';
    } else if (!validateEmail(email)) {
      errors.email = 'Please Enter Valid Email';
    }
    if (password === '') {
      errors.password = 'Please Enter Password';
    } else if (password.length < 4) {
      errors.password = 'Please Enter Valid Password';
    }
    return errors;
  };

  const validateEmail = email => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    const validationErrors = validate();
    console.log('akashhhhhh');

    if (validationErrors.email === '' && validationErrors.password === '') {
      console.log(email, 'email');
      console.log(password, 'password');
      const data = {
        email: email,
        password: password,
        // mac_id: deviceId,
        // source: "app"
      };

      dispatch(loginUser({data})).then(({payload}) => {
        console.log(payload.status, 'payload.status');
        if (payload.status === 200) {
          console.log(payload.data.token, 'token');
          //  saveToken(payload.data.token);
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
            position: 'bottom',
          });
          navigation.navigate('bottomtabbar');
        }
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleNavigation = () => {
    navigation.navigate('Gender');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        </ImageBackground>
        <View style={styles.card}>
          <Text style={styles.signInText}>Login Account</Text>
          <Input
            placeholder={'Username'}
            onChangeText={text => setEmail(text)}
            value={email}
            // errors={errors.username}
            icon="user"
            choose={true}
          />
          {errors.email !== '' && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <Input
            placeholder={'Password'}
            onChangeText={text => setPassword(text)}
            value={password}
            // errors={errors.password}
            secureTextEntry={true}
            icon="key"
            choose={true}
            iconStyle={{transform: [{rotate: '80deg'}]}}
          />
          {errors.password !== '' && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <TouchableOpacity
            style={styles.forgetContainer}
            onPress={() => navigation.navigate('ForgetPass')}>
            <Text style={styles.forgetStyle} styleKey="appColor">
              Forget Password
            </Text>
          </TouchableOpacity>
          <View>
            <RoundButton
              buttonStyle={styles.signButton}
              label={'Login'}
              buttonColor={lightTheme.appColor}
              labelStyle={lightTheme.highlightTextColor}
              onPress={handleLogin}
            />
          </View>
          <View>
            <Text style={styles.text}>
              Don't have an account?{' '}
              <TouchableOpacity onPress={handleNavigation}>
                <Text style={styles.linkText}>Create One!</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  overallBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    height: height * 0.7,
  },
  card: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.48,
    width: '80%',
    alignSelf: 'center',
    padding: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(25),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
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
    paddingHorizontal: horizontalScale(10),
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
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: verticalScale(10),
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
  },
  signButton: {
    minWidth: horizontalScale(230),
    marginTop: verticalScale(30),
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

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: horizontalScale(10),
    paddingRight: horizontalScale(10),
    marginTop: verticalScale(80),
    marginBottom: verticalScale(20),
  },
  imageContainer: {
    marginTop: verticalScale(80),
    marginBottom: verticalScale(10),
  },
  logoImage: {
    justifyContent: 'center',
    width: horizontalScale(155),
    height: verticalScale(200),
  },
  errorText: {
    color: 'red',
  },
});
