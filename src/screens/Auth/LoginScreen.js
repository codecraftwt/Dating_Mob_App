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
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {lightTheme} from '../../assets/themes';
import RoundButton from '../../components/Common/RoundButton';
import Input from '../../components/Common/Input';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../Redux/slices/UserSlice';
import Toast from 'react-native-toast-message';
import { saveToken } from '../../utils/StorageUtils';

const {height, width} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state?.user?.isLoading);
  const [email, setEmail] = useState('trupti02@yopmail.com');
  const [password, setPassword] = useState('Trupti@123');
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
      console.log(email,'email')
      console.log(password,'password')
      const data = {
        email: email,
        password: password,
        // mac_id: deviceId,
        // source: "app"
      };

      dispatch(loginUser({data})).then(({payload})=>{
        console.log(payload.status,'payload.status')
        if (payload.status === 200) {
          console.log(payload.data.token,"token")
        //  saveToken(payload.data.token);
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
            position: 'bottom',
          });
          navigation.navigate('Gender');
        }
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleNavigation = () => {
    navigation.navigate('Gender');
  };

  const backButton = () => {
    navigation.navigate('LoginSelect');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/dual-tone.png')}
          style={styles.background}
          resizeMode="cover">
          <TouchableOpacity style={styles.backContainer} onPress={backButton}>
            <View style={styles.leftContainer}>
              <MaterialIcon
                name="chevron-left-circle-outline"
                size={30}
                color={lightTheme.highlightTextColor}
                style={styles.backIcon}
              />
            </View>
            <View style={styles.rightContainer}>
              <Text styleKey="highlightTextColor" style={styles.textStyle}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.forgetContainer}>
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
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  signInText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
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
    paddingTop: 10,
    paddingBottom: 0,
  },
  iconStyle: {
    flex: 0,
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 2,
    height: 35,
    paddingLeft: 10,
  },
  signButton: {
    minWidth: 230,
    marginTop: 30,
  },
  forgetStyle: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 15,
    fontSize: 12,
  },
  forgetContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  leftContainer: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 17,
    paddingLeft: 5,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: lightTheme.highlightTextColor,
  },
  imageContainer: {
    marginTop: 80,
    marginBottom: 10,
  },
  logoImage: {
    justifyContent: 'center',
    width: 150,
    height: 150,
  },
  errorText: {
    color: 'red',
  },
});
