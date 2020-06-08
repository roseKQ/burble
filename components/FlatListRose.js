import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { Avatar, ListItem, List, Card, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function GoToButton({ screenName, item }) {
  
const navigation = useNavigation();

  return (
    <Button
      title={`More Details about ${item.name.first}`}
      onPress={() => {
        navigation.navigate(screenName, 
        { image : item.picture.medium,
          firstname : item.name.first,
          lastname : item.name.last,
          gender : item.gender,
          username: item.login.username

    } )}}
    />
  );
}

class FlatListRose extends Component {

  state = {
    data: [],
    page: 0,
    loading: false,
    id: 0

  };

  componentDidMount() {
    this.fetchData();
    const { navigation } = this.props;
    
  }

  fetchData = async () => {
    this.setState({ loading: true });
    //pagination
    const response = await fetch(`https://randomuser.me/api?results=15&seed=hi&page=${this.state.page}`);
    const json = await response.json();
    //we're appending data onto the end of the list
    this.setState(state => ({ data: [...state.data, ...json.results], loading: false }));
  };

  handleEnd = () => {
    //adding a count to the pagination, making sure fetchData only called once not multiple times
      this.setState( state => ( { page: state.page +1 }), () => this.fetchData());
  }
  
  render() {
    return (
     
      <View>
      
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i.toString()}
          onEndReached={ () => this.handleEnd()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
              this.state.loading
                ? null
                : <ActivityIndicator size="large" animating />}
          renderItem={({ item }) => 

            <View>
            <ListItem
                leftAvatar={{ 
                    source: {uri: item.picture.thumbnail},
                    
            }}
                title={`${item.name.first} ${item.name.last}`}
                subtitle={ JSON.stringify(item.dob.age)}
                
              />
              <GoToButton screenName="PersonDetail" item={item}/>
              
</View>
  } />       
      </View>
      
    );
  }
}

export default FlatListRose;

