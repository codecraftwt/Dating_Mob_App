import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Swiper from 'react-native-deck-swiper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../components/Common/BackButton';
import {Image} from 'react-native-elements';
import {lightTheme} from '../assets/themes';
import {useDispatch, useSelector} from 'react-redux';
import {matchedInfo} from '../Redux/slices/VisitorSlice';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Responsive';

const ImagePath = require('../assets/images/payment.png');
const cross = require('../assets/images/cross.png');
const chat = require('../assets/images/chat.png');
const heart = require('../assets/images/heart.png');
const cardImage = require('../assets/images/new-card.jpg');

const Matching = ({navigation}) => {
  const dispatch = useDispatch();
  const matchingInformation = useSelector(state => state?.visitor?.matchedData);

  console.log(matchingInformation, 'matchingInformation');

  useEffect(() => {
    dispatch(matchedInfo());
  }, []);

  const likeProfile = () => {
    console.log('liked profile');
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={ImagePath} style={styles.imageStyle}>
        <BackButton navigation={navigation} />
        <View style={styles.topContainer}>
          <Text style={[styles.textStyle, styles.titleStyle]}>matching</Text>
        </View>
        <View style={styles.contentContainer}>
          <Swiper
            cards={[
              'Abraham',
              'Abraham',
              'Abraham',
              'WHAT',
              'MAKES',
              'YOU',
              'HAPPY',
            ]}
            renderCard={(card, cardIndex) => {
              return (
                <View key={`${card}-${cardIndex}`} style={styles.card}>
                  <Image source={cardImage} style={styles.imageCard} />
                  <Text style={styles.text}>{card}</Text>
                  <View style={styles.childContainer}>
                    <TouchableOpacity>
                      <View style={styles.cardIcon}>
                        <MaterialIcon
                          name="gender-male"
                          size={15}
                          color={lightTheme.highlightTextColor}
                          style={styles.Icon}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.cardContent}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                          26
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            onSwiped={cardIndex => console.log(cardIndex)}
            onSwipedAll={() => console.log('onSwipedAll')}
            cardIndex={0}
            useViewOverflow={Platform.OS === 'ios'}
            backgroundColor="transparent"
            stackSize={4}
            infinite
          />
        </View>
        <View style={styles.childContainer2}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image source={cross} style={styles.logoImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Matched')}>
              <Image source={chat} style={styles.specialStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={likeProfile}>
              <Image source={heart} style={styles.logoImage} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Matching;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    width: '100%',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(10),
  },
  textStyle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  titleStyle: {
    fontSize: moderateScale(32),
    textTransform: 'capitalize',
    color: lightTheme.highlightTextColor,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: verticalScale(-20),
  },
  card: {
    borderRadius: moderateScale(40),
    borderWidth: moderateScale(2),
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '80%',
    height: verticalScale(350),
  },
  text: {
    textAlign: 'center',
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    marginTop: verticalScale(5),
  },
  logoImage: {
    width: horizontalScale(55),
    height: verticalScale(72),
  },
  specialStyle: {
    width: horizontalScale(43),
    height: verticalScale(55),
    marginTop: verticalScale(10),
  },
  iconContainer: {
    margin: horizontalScale(14),
    minWidth: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  childContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageCard: {
    width: '100%',
    height: verticalScale(250),
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  Icon: {
    justifyContent: 'center',
  },
  cardIcon: {
    backgroundColor: '#fc5660',
    width: horizontalScale(37),
    height: verticalScale(23),
    borderRadius: moderateScale(20),
    marginTop: verticalScale(5),
    paddingTop: verticalScale(3),
    paddingLeft: horizontalScale(10),
  },
  cardContent: {
    backgroundColor: '#fc5660',
    width: horizontalScale(67),
    height: verticalScale(23),
    borderRadius: moderateScale(20),
    marginTop: verticalScale(5),
    paddingTop: Platform.OS === 'ios' ? 3 : 1,
    marginLeft: horizontalScale(10),
  },
});
