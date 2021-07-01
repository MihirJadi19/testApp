import React, { useState } from 'react';
import { View,Button,TextInput, StyleSheet,items, Modal, FlatList,Platform,TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';
import Apptext from './AppText';
import PickerItem from './PickerItem';
// import { AntDesign } from '@expo/vector-icons';

function AppPicker({icon,placeholder, ...otherProps}) {
    const [modalVisible, setModalVisible] =useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
            {icon && (
            <MaterialCommunityIcons 
            style={styles.icon} 
            size={24} 
            color={colors.medium}  
            name={icon} 
            color="black" />
            )}
            <Apptext>{placeholder}</Apptext>
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={()=>setModalVisible(false)}></Button>
            <FlatList
            data={items}
            keyExtractor={items=> items.value.toString()}
            renderItem ={({item}) => <PickerItem 
                label={item.label}
                onPress={()=>console.log("item clicked")}
            />}
             />
        </Modal>
        </>
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
    textInput:{
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto": "Avenir"

    },
    icon:{
        marginRight: 10
    }
})
export default AppPicker;