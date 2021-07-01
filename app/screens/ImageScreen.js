import React from 'react';
import { Image,ImageBackground, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ImageScreen(props) {
    return (
      <View style={styles.container}>
          <View style={styles.closeicon}>
          </View>
          <View style={styles.deleteicon}></View>
          <Image style={styles.image} resizeMode="contain"  source={require("../assets/kara-eads-xRyL63AwZFE-unsplash.jpg")} />
      </View>  
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        flex:1,
    },
    deleteicon:{
        width:50,
        height:50,
        backgroundColor:'#4ecdc4',
        position:"absolute",
        top:40,
        right:30
    },
    closeicon:{
        width:50,
        height:50,
        backgroundColor:'#fc5c65',
        position:"absolute",
        top:40,
        left:30
    },
    image:{
        width:"100%",
        height:"100%",
    }
})

export default ImageScreen;