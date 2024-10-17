import React from 'react';
import { StyleSheet, View, ViewStyle, TextInput, TextInputProps, Image, ImageStyle, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { lightTheme } from '../../assets/themes';

// @ts-ignore
const confirmImage = require("../../assets/images/confirm.png");

const Input = (props) => {
    const { errors, icon, iconStyle, choose, confirmIcon, ...restProps } = props;
    return (
        <> 
            <View style={[styles.searchContainer, { borderBottomColor: lightTheme.textColor }]}>
                <View style={styles.iconStyle}>
                    { choose ?
                    <AntDesign name={icon} size={15} color={lightTheme.textColor} style={iconStyle} />
                    : confirmIcon ? 
                    <Image source={confirmImage} style={styles.imageStyle}/>
                    : <Fontisto name={icon} size={15} color={lightTheme.textColor} style={iconStyle} /> }
                </View>
                <View style={styles.textContainer}>
                    <TextInput
                        placeholderTextColor={lightTheme.textColor}
                        style={[styles.textContainer, { color: lightTheme.textColor }]}
                        {...restProps}
                    />
                </View>
            </View>
        </>
    );
};

export default Input;

const styles = StyleSheet.create({
    textContainer: {
        flex: 2,
        paddingBottom:4, 
        height: 35,
        paddingLeft: 5, 
    },
    errorContainer: {
        flex: 1, 
        alignSelf: 'flex-start',
    },
    searchContainer: {
        borderBottomWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 0,
    },
    iconStyle: {
        flex: 0,
        alignItems: "flex-start",
    },
    imageStyle: {
        width: 12, 
        height: 15,
        marginRight: 5, 
    },
})
