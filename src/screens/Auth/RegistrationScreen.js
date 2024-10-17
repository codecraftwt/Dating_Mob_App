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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../components/Common/Input';
import RoundButton from '../../components/Common/RoundButton';
import {lightTheme} from '../../assets/themes';

const {height, width} = Dimensions.get('window');

const RegistrationScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleNavigation = () => {
    navigation.navigate('Registration');
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const submitLogin = () => {
    // Handle login submission
  };

  const goToHome = () => {
    console.log('goToHome');
  };

  const backButton = () => {
    console.log('backButton');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
            // onChangeText={onChangeUsername}
            // value={username}
            // errors={errors.username}
            icon="user"
            choose={true}
          />
          <Input
            placeholder="Email"
            // onChangeText={onChangeEmail}
            // value={email}
            // errors={errors.email}
            icon="email"
            choose={false}
          />
          <Input
            placeholder="Phone"
            // onChangeText={onChangePhone}
            // value={phone}
            // errors={errors.phone}
            icon="mobile1"
            choose={true}
          />
          <Input
            placeholder="Password"
            // onChangeText={onChangePassword}
            // value={password}
            // errors={errors.password}
            secureTextEntry={true}
            icon="key"
            choose={true}
            iconStyle={{transform: [{rotate: '80deg'}]}}
          />
          <Input
            placeholder="Confirm Password"
            // onChangeText={onChangeConfirm}
            // value={confirmPass}
            // errors={errors.confirmPass}
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
            onPress={goToHome}
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
    // paddingTop: 10,
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
    marginTop: 5,
  },
  button2: {
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    minWidth: 200,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  checkContainer: {
    borderBottomWidth: 0,
    paddingTop: 10,
  },
  signButton: {
    minWidth: 230,
    marginTop: 40,
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  titleContainer: {
    marginTop: 0,
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: lightTheme.highlightTextColor,
  },
  titleStyle: {
    fontSize: 32,
    textTransform: 'capitalize',
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
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 17,
    paddingLeft: 5,
  },
  leftContainer: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  logoImage: {
    justifyContent: 'center',
    width: 120,
    height: 120,
  },
});
