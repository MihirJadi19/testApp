import React from 'react';
import { View,TextInput, StyleSheet,Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

// import { AntDesign } from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={24} color={colors.medium}  name={icon} color="black" />}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F2F3F4",
        borderRadius: 25,
        flexDirection:"row",
        width:"100%",
        padding: 15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    textInput:{
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto": "Avenir"

    }
})
export default AppTextInput;