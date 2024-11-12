import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, Image, StyleSheet, FlatList, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {visitorsInfo} from '../Redux/slices/VisitorSlice';
import {lightTheme} from '../assets/themes';
import {getUserData} from '../utils/StorageUtils';
import {useFocusEffect} from '@react-navigation/native';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Responsive';

const ImagePath = require('../assets/images/payment.png');

export default function VisitedUsersScreen() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  const visitorsdata = useSelector(state =>
    Array.isArray(state?.visitor?.visitorsData) ? state.visitor.visitorsData : []
  );

  const visitors = visitorsdata.map(item => item);

  const fetchUserData = async () => {
    try {
      const userdata = await getUserData();
      const parsedUserData = JSON.parse(userdata);
      setUserData(parsedUserData || {});
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (userData && userData._id) {
        dispatch(visitorsInfo(userData._id)).then(({payload}) => {
          console.log(payload, 'payload from userData fetching');
        });
      }
    }, [userData, dispatch]),
  );

  const renderUserItem = ({item}) => {
    console.log(item, 'item from renderUserItem');
    return (
      // <ImageBackground source={ImagePath} style={styles.imageStyle}>
        <View style={styles.wrapContainer}>
          <View style={[styles.topContainer, styles.imageContainer]}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logoImage}
            />
          </View>
          <View style={[styles.topContainer, styles.titleContainer]}>
            <Text style={[styles.textStyle, styles.titleStyle]}>
              {item.visitor.firstName}
            </Text>
            <Text style={styles.infoStyle}>visited to your profile.</Text>
          </View>
        </View>
      // </ImageBackground>
    );
  };

  return (
    <FlatList
      data={visitors}
      keyExtractor={item => item.id}
      renderItem={renderUserItem}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wrapContainer: {
    flexDirection: 'row',
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(15),
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  logoImage: {
    width: horizontalScale(40),
    height: verticalScale(40),
  },
  titleContainer: {
    marginLeft: horizontalScale(10),
  },
  titleStyle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: lightTheme.facebookColor,
    textTransform: 'capitalize',
  },
  infoStyle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: lightTheme.textColor,
    marginTop: verticalScale(5),
    paddingLeft: horizontalScale(5),
  },
  contentContainer: {
    paddingBottom: verticalScale(20),
  },
});
