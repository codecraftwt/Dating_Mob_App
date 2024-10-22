import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {lightTheme} from '../../assets/themes';
import Chips from '../../components/Common/Chip';
import {useDispatch} from 'react-redux';
import {setFields} from '../../Redux/slices/UserRegisterSlice';
import BackButton from '../../components/Common/BackButton';

const {height, width} = Dimensions.get('window');

const GenderScreen = ({navigation}) => {
  const [selectedChip, setSelectedChip] = useState(null);
  const [selectedGender, setSelectedGender] = useState('');
  const dispatch = useDispatch();

  const onPress = () => {
    console.log(selectedGender, 'selectedGender');
    if (selectedGender) {
      const formData = {
        gender: selectedGender,
        profileFor:selectedChip
      };
      dispatch(setFields(formData));
      console.log(formData, 'formData'); // Log updated formData here
      navigation.navigate('NameData');
    } else {
      alert('Please select a gender');
    }
  };

  const handleChipPress = chipTitle => {
    setSelectedChip(chipTitle);
    if (chipTitle === 'My Brother' || chipTitle === 'My Son') {
      setSelectedGender('Male');
    } else if (chipTitle === 'My Daughter' || chipTitle === 'My Sister') {
      setSelectedGender('Female');
    } else {
      setSelectedGender('');
    }
  };

  const handleGenderSelect = gender => {
    setSelectedGender(gender);
  };

  useEffect(() => {
    // Add any effect here if needed based on selectedChip or selectedGender
  }, [selectedChip, selectedGender]);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/profile.png')}
        style={styles.imageStyle}
        resizeMode="cover">
        <BackButton navigation={navigation}/>
        <View style={styles.childContainer}>
          <Text style={[styles.forgotPassword, {color: '#000'}]}>
            This Profile is for
          </Text>
        </View>
        <View>
          <View style={styles.chipBox}>
            <Chips title="My Self" onPress={() => handleChipPress('My Self')} />
            <Chips title="My Son" onPress={() => handleChipPress('My Son')} />
          </View>
          <View style={styles.chipBox}>
            <Chips
              title="My Daughter"
              onPress={() => handleChipPress('My Daughter')}
            />
            <Chips
              title="My Sister"
              onPress={() => handleChipPress('My Sister')}
            />
          </View>
          <View style={styles.chipBox}>
            <Chips
              title="My Brother"
              onPress={() => handleChipPress('My Brother')}
            />
            <Chips
              title="My Relative"
              onPress={() => handleChipPress('My Relative')}
            />
          </View>
        </View>
      </ImageBackground>

      {(selectedChip === 'My Self' || selectedChip === 'My Relative') && (
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContent}>
            <View style={styles.childContainer}>
              <TouchableOpacity onPress={() => handleGenderSelect('Male')}>
                <View
                  style={[styles.iconContainer, {backgroundColor: 'purple'}]}>
                  <MaterialIcon
                    name="gender-male"
                    size={50}
                    style={styles.Icon}
                  />
                </View>
                <Text style={styles.genderStyle}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleGenderSelect('Female')}>
                <View
                  style={[styles.iconContainer, {backgroundColor: '#e3384c'}]}>
                  <MaterialIcon
                    name="gender-female"
                    size={50}
                    style={styles.Icon}
                  />
                </View>
                <Text style={styles.genderStyle}>Female</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            styles.inputLabel,
            {backgroundColor: '#fd7c62'},
          ]}>
          <Text style={[styles.userNameStyle, {color: '#ffffff'}]}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },

  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chipBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: '100%',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  iconContainer: {
    margin: 12,
    minWidth: 80,
    height: 80,
    borderRadius: 50,
    padding: 15,
  },
  genderStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
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
  inputLabel: {
    minWidth: 230,
    paddingTop: 20,
    minHeight: 60,
    borderRadius: 50,
    marginBottom: 30,
  },
  userNameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 17,
    paddingLeft: 5,
  },
  forgotPassword: {
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
