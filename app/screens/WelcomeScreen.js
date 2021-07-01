import React from 'react';
import { Image,StyleSheet, Text, View,ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
    <ImageBackground blurRadius={6} style={styles.background} source={require("../assets/background.jpg")} >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.tagline}>Project Management System</Text> 
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title="Login" color="primary" style={styles.loginbtn}></AppButton>
            <AppButton title="Register" color="secondary" style={styles.loginbtn}></AppButton>
        </View>
        

    </ImageBackground>
    );
    }
 const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonContainer:{
        padding:20,
        width:"100%"
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:20,
        color: colors.black
    },
    loginbtn:{
        width:'100%',
        height:70,
        backgroundColor:'#fc5c65'
    },
    registerbtn:{
        width:'100%',
        height:70,
        backgroundColor:'#4ecdc4'
    },
    logo:{
        width:100,
        height:100,
        backgroundColor: 'white',
        borderRadius:50,   
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:'center',
    }
}); 
export default WelcomeScreen;
