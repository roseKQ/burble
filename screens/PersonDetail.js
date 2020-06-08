import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import { Card } from 'react-native-elements'

function PersonDetail ( { route, navigation }) {

const { image } = route.params;
const { firstname } = route.params;
const { lastname } = route.params;
const { gender } = route.params;
const { username } = route.params;

    return (
        <View style={styles.screen}>
            <Card containerStyle={{padding: 15, margin: 2} }
                image={{ uri: image }} style={{ width: 200, height: 200 }}
                title={username} >
                    <Text> {firstname} {lastname}</Text>
                    <Text> {gender}</Text>
                    <Text> {username}</Text>
            <Button title="Go Back" onPress={ () => 
                navigation.navigate('PersonList')
                }></Button>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default PersonDetail;