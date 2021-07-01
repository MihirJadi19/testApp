import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from"yup";
import NetInfo from "@react-native-community/netinfo";
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';

function ListingEditScreen(props) {
    return (
        NetInfo.addEventListener((netinfo)=>console.log(netinfo))
    );
}

export default ListingEditScreen;