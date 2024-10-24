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
import {useDispatch} from 'react-redux'; // Add this to use dispatch
import {setFields} from '../../Redux/slices/UserRegisterSlice';
import BackButton from '../../components/Common/BackButton';
import DateTimePicker from '@react-native-community/datetimepicker';

const {height, width} = Dimensions.get('window');

const NameScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch(); // Initialize dispatch

  const goToNext = () => {
    if (firstName && lastName && dob) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
      };
      // Dispatch the formData to Redux
      dispatch(setFields(formData));
      console.log(formData, 'formData');
      navigation.navigate('ReligionData');
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Close the date picker when a date is selected
    if (selectedDate) {
      setSelectedDate(selectedDate);
      setDob(selectedDate.toLocaleDateString()); // Format the date as needed (e.g., mm/dd/yyyy)
    }
  };

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
          <Input
            placeholder="Enter Your First Name"
            onChangeText={text => setFirstName(text)}
            value={firstName}
            icon="form"
            choose={true}
          />
          <Input
            placeholder="Enter Your Last Name"
            onChangeText={text => setLastName(text)}
            value={lastName}
            icon="form"
            choose={true}
          />
          <View style={styles.datePickerContainer}>
            <Icon
              name="calendar"
              size={16}
              color="#888"
              onPress={() => setShowDatePicker(true)}
            />
            <Text style={styles.datePickerPlaceholder}>
              {dob ? '' : 'Enter Date Of Birth'}
            </Text>
            <Text style={styles.selectedDateText}>{dob}</Text>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
              maximumDate={new Date()} // Optionally limit date selection to today or earlier
            />
          )}
          <RoundButton
            buttonStyle={styles.signButton}
            label="Next"
            buttonColor={lightTheme.appColor}
            labelStyle={lightTheme.highlightTextColor}
            onPress={goToNext}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NameScreen;

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
    top: height * 0.45,
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
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    // padding: 10,
    width: '100%',
    height: 50,
    marginBottom: 20,
    paddingTop:10,
    backgroundColor: 'transparent',
  },
  datePickerPlaceholder: {
    fontSize: 14,
    color: '#aaa',
    marginLeft:5
  },
  selectedDateText: {
    fontSize: 14,
    color: '#000',
    marginLeft:5
  },
});
