import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Container, Content, Button,Text } from 'native-base';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : null,
      password : null,
    };
  }

onPress(){
this.props.navigation.navigate('Settings');
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
      <TextInput
        style={{marginTop:30,marginBottom:30 ,height: 40,width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />
      <Button full success
      onPress={this.onPress}
      >
        <Text>Success</Text>
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
