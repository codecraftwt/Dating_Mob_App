import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {visitorsInfo} from '../Redux/slices/Visitors';
import {lightTheme} from '../assets/themes';
import {getUserData} from '../utils/StorageUtils';

export default function VisitedUsersScreen() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  const visitorsdata = useSelector(state => state?.visitor?.visitorsData || []);

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

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData && userData._id) {
      dispatch(visitorsInfo(userData._id)).then(({payload}) => {
        console.log(payload, 'payload from userData fetching');
      });
    }
  }, [userData, dispatch]);

  const renderUserItem = ({item}) => {
    console.log(item,'item from renderUserItem')
    return (
      <View style={styles.wrapContainer}>
        <View style={[styles.topContainer, styles.imageContainer]}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={[styles.topContainer, styles.titleContainer]}>
          <Text style={[styles.textStyle, styles.titleStyle]}>{item.visitor.firstName}</Text>
          <Text style={styles.infoStyle}>visited your profile</Text>
        </View>
      </View>
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
  wrapContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    marginLeft: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: lightTheme.facebookColor,
    textTransform: 'capitalize',
  },
  infoStyle: {
    fontSize: 16,
    fontWeight:'bold',
    color: lightTheme.textColor,
    marginTop: 5,
    paddingLeft:5
  },
  contentContainer: {
    paddingBottom: 20,
  },
});
