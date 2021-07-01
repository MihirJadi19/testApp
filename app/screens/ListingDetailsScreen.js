import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import App from '../../App';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/jacket.jpg")}></Image>
            <View style={styles.detailscontainer}>
                <AppText style={styles.title}>Red Jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Mihir Jadi"
                        subTitle = "5 Listing"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: 300
    },
    detailscontainer:{
        padding:20
    },
    title:{
      fontSize:21,
      fontWeight: "500"  
    },
    userContainer:{
        marginVertical:20
    },
    price:{
        color: colors.secondary,
        fontWeight:'bold',
        fontSize:19,
        marginVertical:10
    }
})
export default ListingDetailsScreen;