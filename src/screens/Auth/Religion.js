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
import {Dropdown} from 'react-native-element-dropdown';
import {setFields} from '../../Redux/slices/UserRegisterSlice';
import {useDispatch} from 'react-redux';
import BackButton from '../../components/Common/BackButton';

const {height, width} = Dimensions.get('window');

const Religion = ({navigation}) => {
  const dispatch = useDispatch();
  const [religion, setReligion] = useState(null);
  const [community, setCommunity] = useState(null);
  const [country, setCountry] = useState(null);

  const goToHome = () => {
    if (religion && community && country) {
      const formData = {
        religion: religion,
        motherTongue: community,
        country: country,
      };
      // Dispatch the formData to Redux
      dispatch(setFields(formData));
      console.log(formData, 'formData');
      navigation.navigate('Registration');
    } else {
      alert('Please fill all the fields');
    }
  };

  const Community = [
    {label: 'Marathi', value: 'Marathi'},
    {label: 'Hindi', value: 'Hindi'},
    {label: 'Tamil', value: 'Tamil'},
  ];

  const ReligionData = [
    {label: 'Hindu', value: 'Hindu'},
    {label: 'Christian', value: 'Christian'},
    {label: 'Muslim', value: 'Muslim'},
  ];

  const Country = [
    {label: 'India', value: 'India'},
    {label: 'USA', value: 'USA'},
    {label: 'England', value: 'England'},
  ];

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
          <Text style={styles.signInText}>This Profile Is For</Text>
          <View style={styles.inputWrapper}>
            <Dropdown
              style={styles.inputDrop}
              data={ReligionData}
              labelField="label"
              valueField="value"
              placeholder="Select Religion"
              value={religion}
              onChange={item => setReligion(item.value)}
              selectedTextStyle={styles.selectedTextStyle}
              containerStyle={styles.dropContainerStyle}
              itemTextStyle={styles.itemTextStyle}
              placeholderStyle={styles.placeholderStyle}
              // Enable search functionality
              search
              searchPlaceholder="Search First Name"
              searchStyle={styles.searchStyle}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Dropdown
              style={styles.inputDrop}
              data={Community}
              labelField="label"
              valueField="value"
              placeholder="Select Community"
              value={community}
              onChange={item => setCommunity(item.value)}
              selectedTextStyle={styles.selectedTextStyle}
              containerStyle={styles.dropContainerStyle}
              itemTextStyle={styles.itemTextStyle}
              placeholderStyle={styles.placeholderStyle}
              // Enable search functionality
              search
              searchPlaceholder="Search First Name"
              searchStyle={styles.searchStyle}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Dropdown
              style={styles.inputDrop}
              data={Country}
              labelField="label"
              valueField="value"
              placeholder="Select Country"
              value={country}
              onChange={item => setCountry(item.value)}
              selectedTextStyle={styles.selectedTextStyle}
              containerStyle={styles.dropContainerStyle}
              itemTextStyle={styles.itemTextStyle}
              placeholderStyle={styles.placeholderStyle}
              // Enable search functionality
              search
              searchPlaceholder="Search First Name"
              searchStyle={styles.searchStyle}
            />
          </View>
          <RoundButton
            buttonStyle={styles.signButton}
            label="Next"
            buttonColor={lightTheme.appColor}
            labelStyle={lightTheme.highlightTextColor}
            onPress={goToHome}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Religion;

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
  logoImage: {
    justifyContent: 'center',
    width: 120,
    height: 120,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    margin: 10,
  },
  inputDrop: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  dropContainerStyle: {
    borderColor: '#000',
  },
  selectedTextStyle: {
    color: '#000',
  },
  itemTextStyle: {
    color: '#000',
  },
  placeholderStyle: {
    color: '#999',
  },
  searchStyle: {
    color: '#000',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -50}],
  },
});
