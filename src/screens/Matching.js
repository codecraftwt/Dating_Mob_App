import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../components/Common/BackButton';
import { Image } from 'react-native-elements';
import { lightTheme } from '../assets/themes';

const ImagePath = require('../assets/images/dual-tone.png');
const cross = require('../assets/images/cross.png');
const chat = require('../assets/images/chat.png');
const heart = require('../assets/images/heart.png');
const cardImage = require('../assets/images/new-card.jpg');

const Matching = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground source={ImagePath} style={styles.imageStyle}>
          <BackButton navigation={navigation} />
          <View style={[styles.topContainer, styles.titleContainer]}>
            <Text
              styleKey="highlightTextColor"
              style={[styles.textStyle, styles.titleStyle]}>
              matching
            </Text>
          </View>
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
                  <Text styleKey="cardTextColor" style={styles.text}>
                    {card}
                  </Text>
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
                        <Text
                          styleKey="highlightTextColor"
                          style={{fontWeight: 'bold', textAlign: 'center'}}>
                          26
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            onSwiped={cardIndex => {
              console.log(cardIndex);
            }}
            onSwipedAll={() => {
              console.log('onSwipedAll');
            }}
            cardIndex={0}
            useViewOverflow={Platform.OS === 'ios'}
            backgroundColor={'transparent'}
            stackSize={4}
            infinite
            cardStyle={{paddingTop: 70}}></Swiper>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomContent}>
              <View style={styles.childContainer}>
                <View style={styles.iconContainer}>
                  <TouchableOpacity>
                    <Image source={cross} style={styles.logoImage} />
                  </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity>
                    <Image source={chat} style={styles.specialStyle} />
                  </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity>
                    <Image source={heart} style={styles.logoImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Matching;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 16,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageStyle: {
    width: '100%',
    height: 830,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
    // marginBottom: 20,
  },
  leftContainer: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 17,
    paddingLeft: 5,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    zIndex: 9999,
  },
  titleStyle: {
    fontSize: 32,
    textTransform: 'capitalize',
  },
  titleContainer: {
    marginTop: 0,
    // marginBottom: 10,
  },
  card: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent:'center',
    alignSelf: 'center', 
    backgroundColor: 'white',
    width: '80%',
    height: 400,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
    backgroundColor: 'transparent',
  },
  logoImage: {
    justifyContent: 'center',
    width: 90,
    height: 90,
  },
  specialStyle: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    margin: 12,
    minWidth: 50,
    height: 50,
    borderRadius: 50,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Center horizontally
    alignItems: 'center', // Center vertically
    marginTop: 450, // Adjust to control spacing below the swiper cards
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageCard: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  Icon: {
    justifyContent: 'center',
  },
  cardIcon: {
    backgroundColor: '#fc5660',
    width: 37,
    height: 23,
    borderRadius: 20,
    marginTop: 5,
    paddingTop: 3,
    paddingLeft: 10,
  },
  cardContent: {
    backgroundColor: '#fc5660',
    width: 67,
    height: 23,
    borderRadius: 20,
    marginTop: 5,
    paddingTop: Platform.OS === 'ios' ? 3 : 1,
    marginLeft: 10,
  },
});
