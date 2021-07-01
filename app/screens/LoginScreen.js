import React, { useState } from 'react';
import {Image, StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import {ErrorMessage, Formik } from 'formik';
import * as Yup from "yup";
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password :Yup.string().required().min(4).label("Password")
});
function LoginScreen(props) {
    console.log("Hello React Native");
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email,password})=>{
        const result = await authApi.login(email,password);
        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        console.log(result.data)
        setLoginFailed(false);
        console.log(result.data);
    }
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Formik
                    initialValues ={{email:'',password:''}}
                    onSubmit ={handleSubmit}
                    validationSchema={validationSchema}
                    >
                    {({handleChange, handleSubmit, errors, touched, setFieldTouched}) => (
                        <>
                            <ErrorMessage title="Invalid Email and/or password"/>
                            <AppFormField 
                            autoCapitalize ="none"
                            icon="email" 
                            name="email"
                            keyboardType ="email-address" 
                            onChangeText ={handleSubmit('email')}
                            placeholder="Email" />
                            {/* <AppText style={{color:'red'}}>{errors.email}</AppText> */}
                            
                            <AppFormField 
                            autoCapitalize ="none"
                            autoCorrect ={false}
                            name="password"
                            icon="lock"
                            textContentType ="password"
                            secureTextEntry
                            placeholder="Password" />
                            <SubmitButton title="Login" />
                        </>
                    )}                    
                </Formik>
        </Screen>
    );
}
const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
    },
    container:{
        // backgroundColor: "#F2F3F4",
        // borderRadius: 25,
        // flexDirection:"row",
        // width:"100%",
        padding: 20,
        // marginVertical:10
    },
    textInput:{
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto": "Avenir"
    }
})

export default LoginScreen;