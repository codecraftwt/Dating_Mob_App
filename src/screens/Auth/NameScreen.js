import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import Input from '../../components/Common/Input';
import RoundButton from '../../components/Common/RoundButton';
import {lightTheme} from '../../assets/themes';
import {useDispatch} from 'react-redux'; // Add this to use dispatch
import {setFields} from '../../Redux/slices/UserRegisterSlice';
import BackButton from '../../components/Common/BackButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Responsive';

const {height, width} = Dimensions.get('window');

const NameScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

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
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
      setDob(selectedDate.toLocaleDateString());
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
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    marginBottom: verticalScale(10),
  },
  signButton: {
    minWidth: horizontalScale(230),
    marginTop: verticalScale(40),
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
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    height: verticalScale(50),
    marginBottom: verticalScale(20),
    paddingTop: verticalScale(10),
    backgroundColor: 'transparent',
  },
  datePickerPlaceholder: {
    fontSize: moderateScale(14),
    color: '#aaa',
    marginLeft: horizontalScale(5),
  },
  selectedDateText: {
    fontSize: moderateScale(14),
    color: '#000',
    marginLeft: horizontalScale(5),
  },
});
