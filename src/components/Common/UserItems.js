import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { lightTheme } from '../../assets/themes';

const UserItems = (props) => {
    const { image, title, content, notificationCount } = props; 
  return (
    <View style={[styles.childContainer, styles.backContainer]}>
    <View style={styles.leftContainer}>
      <Image source={image} style={styles.imageStyle}/>
    </View>
    <TouchableOpacity style={[styles.centerContainer, { borderColor: lightTheme.inputColor}]}>
      <View style={styles.childContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.textStyle} styleKey="premiumColor">{title}</Text>
        </View>
        {
          notificationCount && (
            <View style={styles.rightContainer}>
              <View style={[styles.container, { backgroundColor: lightTheme.notifyColor }]}>
                <Text styleKey="highlightTextColor" style={styles.text}>{notificationCount}</Text>
              </View>
            </View>
          )
        }
      </View>
      <View style={styles.childContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftStyle} styleKey="lightTextColor">{content}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={[styles.leftStyle, {paddingRight: 0}]} styleKey="lightTextColor">12.30 am</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default UserItems

const styles = StyleSheet.create({
    leftContainer: {
        flex: 1, 
        justifyContent: "flex-start",
        alignItems: 'flex-start',
      },
      rightContainer: {
        flex: 0, 
        justifyContent: "flex-end", 
      },
      centerContainer: {
        flex: 3, 
        marginLeft: 10,
        justifyContent: 'flex-start', 
        borderBottomWidth: 1,
      },
      backContainer: {
        marginLeft: 20, 
        marginRight: 20, 
        marginBottom: 30,
      },
      childContainer: {
        flexDirection: 'row',
        justifyContent: "center",
      },
      container: {
        width: 18,
        height: 18,
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center"
      },
      text: {
        fontSize: 14
      },
      imageStyle: {
        width: 80, 
        height: 80, 
        borderRadius: 80
      },
      textStyle: {
        fontSize: 24, 
        paddingTop: 5
      },
      leftStyle: {
        fontSize: 12, 
        paddingTop: 10, 
        paddingRight: 10
      },    
})