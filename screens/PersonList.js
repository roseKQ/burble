import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import FlatListRose from '../components/FlatListRose';

function PersonList ( { navigation }) {

    return (
        <View>  
        <FlatListRose/>
        </View>
    )
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PersonList;