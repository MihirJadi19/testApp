import React from 'react';
import { TouchableOpacity } from 'react-native';
import AppText from './AppText';

function PickerItem({label, onPress}) {
    return (
        <TouchableOpacity>
            <AppText>{label}</AppText>
        </TouchableOpacity>
    );
}

export default PickerItem;