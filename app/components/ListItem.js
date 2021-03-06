import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({title,subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity>
                <View style={styles.container}>
                        <Image source={image} style={styles.image} />
                        <View>
                            <AppText style={styles.title}>{title}</AppText>
                            <AppText style={styles.subTitle}>{subTitle}</AppText>
                        </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginVertical: 20
    },
    title:{
        fontWeight:"700",
    },
    subTitle:{
        color: colors.medium,
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight: 10
    }
})
export default ListItem;