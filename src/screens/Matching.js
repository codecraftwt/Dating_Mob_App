import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../components/Common/BackButton';
import {Image} from 'react-native-elements';
import {lightTheme} from '../assets/themes';

const ImagePath = require('../assets/images/payment.png');
const cross = require('../assets/images/cross.png');
const chat = require('../assets/images/chat.png');
const heart = require('../assets/images/heart.png');
const cardImage = require('../assets/images/new-card.jpg');

const Matching = ({navigation}) => {
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
            <TouchableOpacity>
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
    paddingTop: 10,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleStyle: {
    fontSize: 32,
    textTransform: 'capitalize',
    color:lightTheme.highlightTextColor
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -20, 
  },
  card: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '80%',
    height: 350,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
  },
  logoImage: {
    width: 60,
    height: 60,
  },
  specialStyle: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  iconContainer: {
    margin: 12,
    minWidth: 50,
    height: 50,
    borderRadius: 50,
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
    height: 250,
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
