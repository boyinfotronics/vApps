import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default class Flogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : null,
      password : null,
    };
  }
  onPress = () => {
    if(this.state.username==null){
      alert ("username is null !")
      console.log(this.state.username);
       return false;
    }
    console.log(this.state.username);
    console.log(this.state.password);
    this.props.navigation.navigate('Tabs');

  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1}}
        value={this.state.username}
        onChangeText={(username) => this.setState({username})}
      />
      <TextInput
        style={{marginTop:30,marginBottom:30 ,height: 40,width:200, borderColor: 'gray', borderWidth: 1}}
        value={this.state.password}
        onChangeText={(password) => this.setState({password})}
      />

      <Button
  onPress={this.onPress}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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
