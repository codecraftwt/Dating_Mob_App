import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { globalColors } from './globalColors';
import { globalFonts } from './globalFonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {

    },
    bottom: {
        width: Dimensions.get('screen').width,
        bottom: RFValue(0)
    },
    box: {
        backgroundColor: '#8157DD',
        height: 120
    },
    topWavy: {
        height: RFPercentage(59)
    },
    bottomWavy: {
        position: 'absolute',
        bottom: RFValue(12)
    },
    imageBack: { height: RFPercentage(35), backgroundColor: '#8157DD', marginBottom: RFPercentage(20) },
    imageBackView: { flex: 1, alignItems: 'center', marginTop: RFValue(70), },
    imageContainer: { height: RFPercentage(27.8), width: RFPercentage(27.8), marginHorizontal: 'auto' },
    logoImage: { height: RFPercentage(27), width: RFPercentage(27), },
    bottomView: {
        flex: 2,
        backgroundColor: '#ffffff',
        bottom: RFValue(15),
        //   paddingBottom:RFValue(5),
        borderTopStartRadius: RFValue(40),
        borderTopEndRadius: RFValue(40),
    },
    signInText: {
        fontSize: RFValue(33),
        color: '#8157DD',
        fontWeight: '700',
        fontFamily: globalFonts.semibold,
        marginVertical: RFValue(10),
        textDecorationLine: 'underline'
    },
    textInputView: { marginHorizontal: RFValue(35), paddingVertical: RFValue(15) },
    input: {
        height: RFValue(50),
        fontSize: RFValue(14),
        fontWeight: '600',
        width: '100%',
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        borderWidth: 0.5,
        borderColor: '#8157DD',
        borderTopRightRadius: RFValue(10),
        borderTopLeftRadius: RFValue(10),
        backgroundColor: globalColors.whiteGrey,
        paddingLeft: RFPercentage(2),
    },
    text: {
        fontWeight: '600',
        marginTop: 10,
        textAlign: 'center',
    },
    linkText: {
        color: '#8157DD',
        fontWeight: '700',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        paddingLeft: RFPercentage(0),
        paddingHorizontal: 10,
        height: RFValue(50),
        fontSize: RFValue(14),
        fontWeight: '600',
        width: '100%',
    },
    icon: {
        padding: 10,
    },
})