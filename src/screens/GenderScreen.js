import {
  Dimensions,
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
import { lightTheme } from '../assets/themes';

const {height, width} = Dimensions.get('window');

const GenderScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleNavigation = () => {
    navigation.navigate('Registration');
  };
  const handleNavigationToLogin = () => {
    navigation.navigate('ForgetPass');
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const submitLogin = () => {
    // Handle login submission
  };

  const backButton = () => {
    navigation.navigate('Login');
  };

  const onPress = () => {
    console.log('onpress');
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/images/profile.png')}
          style={styles.imageStyle}
          resizeMode="cover">
          <TouchableOpacity style={styles.backContainer} onPress={backButton}>
            <View style={styles.leftContainer}>
              <MaterialIcon
                name="chevron-left-circle-outline"
                size={30}
                color="#ffffff"
                style={styles.backIcon}
              />
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.textStyle}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.topContainer, styles.nexStyle]}>
            <Text
              style={[
                styles.textStyle,
                styles.specialText,
              ]}>
              Gender
            </Text>
          </View>
          <View style={styles.childContainer}>
            <Text
              style={[styles.forgotPassword, {color: '#ffffff'}]}
              styleKey="highlightTextColor">
              Select Your Gender
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContent}>
            <View style={styles.childContainer}>
              <TouchableOpacity>
                <View
                  style={[styles.iconContainer, {backgroundColor: 'purple'}]}>
                  <MaterialIcon
                    name="gender-male"
                    size={50}
                    // color={theme.highlightTextColor}
                    style={styles.Icon}
                  />
                </View>
                <Text style={styles.genderStyle} styleKey="textColor">
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={[styles.iconContainer, {backgroundColor: '#e3384c'}]}>
                  <MaterialIcon
                    name="gender-female"
                    size={50}
                    // color={theme.highlightTextColor}
                    style={styles.Icon}
                  />
                </View>
                <Text style={styles.genderStyle} styleKey="textColor">
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onPress}>
          <View
            style={[
              styles.container,
              styles.inputLabel,
              {backgroundColor: '#fd7c62'},
            ]}>
            <Text
              styleKey="textColor"
              style={[styles.userNameStyle, {color: '#ffffff'}]}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
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
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:lightTheme.highlightTextColor
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
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
  },
  leftContainer: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  specialText: {
    fontSize: 36,
    textTransform: 'capitalize',
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    margin: 12,
    minWidth: 80,
    height: 80,
    borderRadius: 50,
    padding: 15,
  },
  Icon: {
    justifyContent: 'center',
  },
  genderStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  forgotPassword: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  inputLabel: {
    minWidth: 230,
    paddingTop: 20,
    minHeight: 60,
    marginTop: 0,
    borderRadius: 50,
    marginBottom: 30,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20,
    minWidth: 30,
    height: 45,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  userNameStyle: {
    fontWeight: 'bold',
    paddingTop: 0,
    paddingBottom: 2,
    fontSize: 16,
  },
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 17,
    paddingLeft: 5,
  },
  nexStyle: {
    marginTop: 100, 
    marginBottom: 5,
  },
});
