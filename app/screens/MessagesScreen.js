import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import ListItem from '../components/ListItem';
import Constants, { UserInterfaceIdiom } from 'expo-constants';
import Screen from '../components/Screen';
import ListItemDeleteItem from '../components/ListItemDeleteItem';

const inittialMessages =[
    {
        id:1,
        title:'T1',
        description: 'D1',
        image: require("../assets/mosh.jpg") 
    },
    {
        id:2,
        title:'T2',
        description: 'D2',
        image: require("../assets/mosh.jpg") 
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(inittialMessages);

    const handleDelete = message =>{
        setMessages(m => md.id !== message.id);
    }
    return (
        <Screen>
            <FlatList
                
                data={messages}
                keyExtractor={message => message.id.toString() }
                renderItem ={({item}) =><ListItem
                    title ={item.title}
                    subTitle ={item.description}
                    image= {item.image}
                    renderRightActions={()=> <ListItemDeleteItem onPress={()=> handleDelete(item)}  />}
                /> }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight
    }
})
export default MessagesScreen;